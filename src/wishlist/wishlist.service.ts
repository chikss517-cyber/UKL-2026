import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateWishlistDto } from './dto/create-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, data: CreateWishlistDto) {
    return this.prisma.wishlist.create({
      data: {
        userId,
        productId: data.productId,
      },
    });
  }

  async findAll(userId: number) {
    return this.prisma.wishlist.findMany({
      where: {
        userId,
      },

      include: {
        product: true,
      },

      orderBy: {
        id: 'desc',
      },
    });
  }

  async remove(id: number) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: {
        id,
      },
    });

    if (!wishlist) {
      throw new NotFoundException('Wishlist not found');
    }

    return this.prisma.wishlist.delete({
      where: {
        id,
      },
    });
  }
}
