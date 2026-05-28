import { Injectable, NotFoundException } from '@nestjs/common';

import { PaymentStatus, OrderStatus } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePaymentDto) {
    const order = await this.prisma.order.findUnique({
      where: {
        id: data.orderId,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return this.prisma.payment.create({
      data: {
        orderId: data.orderId,
        amount: data.amount,
        proofUrl: data.proofUrl,
      },
    });
  }

  async findAll() {
    return this.prisma.payment.findMany({
      include: {
        order: true,
      },

      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const payment = await this.prisma.payment.findUnique({
      where: {
        id,
      },

      include: {
        order: true,
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    return payment;
  }

  async uploadProof(id: number, proofUrl: string) {
    await this.findOne(id);

    return this.prisma.payment.update({
      where: {
        id,
      },

      data: {
        proofUrl,

        status: PaymentStatus.WAITING_VERIFICATION,
      },
    });
  }

  async verify(id: number, status: PaymentStatus) {
    const payment = await this.findOne(id);

    return this.prisma.$transaction(async (tx) => {
      const updatedPayment = await tx.payment.update({
        where: {
          id,
        },

        data: {
          status,
        },
      });

      if (status === PaymentStatus.PAID) {
        await tx.order.update({
          where: {
            id: payment.orderId,
          },

          data: {
            status: OrderStatus.PAID,
          },
        });
      }

      return updatedPayment;
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.payment.delete({
      where: {
        id,
      },
    });
  }
}
