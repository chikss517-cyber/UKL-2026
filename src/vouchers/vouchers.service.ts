import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { VoucherType } from '@prisma/client';

import { CreateVoucherDto } from './dto/create-voucher.dto';

import { ApplyVoucherDto } from './dto/apply-voucher.dto';

@Injectable()
export class VouchersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateVoucherDto) {
    return this.prisma.voucher.create({
      data: {
        code: data.code,

        type: data.type,

        value: data.value,

        minPurchase: data.minPurchase,

        expiredAt: new Date(data.expiredAt),

        active: true,
      },
    });
  }

  async findAll() {
    return this.prisma.voucher.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const voucher = await this.prisma.voucher.findUnique({
      where: {
        id,
      },
    });

    if (!voucher) {
      throw new NotFoundException('Voucher not found');
    }

    return voucher;
  }

  async apply(data: ApplyVoucherDto) {
    const voucher = await this.prisma.voucher.findFirst({
      where: {
        code: data.code,
        active: true,
      },
    });

    if (!voucher) {
      throw new BadRequestException('Voucher invalid');
    }

    const now = new Date();

    if (voucher.expiredAt < now) {
      throw new BadRequestException('Voucher expired');
    }

    if (data.total < voucher.minPurchase) {
      throw new BadRequestException(
        `Minimum purchase is ${voucher.minPurchase}`,
      );
    }

    let finalTotal = data.total;

    if (voucher.type === VoucherType.PERCENT) {
      finalTotal = data.total - (data.total * voucher.value) / 100;
    } else {
      finalTotal = data.total - voucher.value;
    }

    if (finalTotal < 0) {
      finalTotal = 0;
    }

    return {
      voucher: voucher.code,

      type: voucher.type,

      value: voucher.value,

      finalTotal,
    };
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.voucher.delete({
      where: {
        id,
      },
    });
  }
}
