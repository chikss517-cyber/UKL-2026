import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number, data: CreateReviewDto) {
    return this.prisma.review.create({
      data: {
        userId,
        productId: data.productId,
        rating: data.rating,
        comment: data.comment,
      },
    });
  }

  async findAll() {
    return this.prisma.review.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findByProduct(productId: number) {
    return this.prisma.review.findMany({
      where: {
        productId,
      },

      orderBy: {
        id: 'desc',
      },
    });
  }

  async update(id: number, data: UpdateReviewDto) {
    const review = await this.prisma.review.findUnique({
      where: {
        id,
      },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return this.prisma.review.update({
      where: {
        id,
      },

      data,
    });
  }

  async remove(id: number) {
    const review = await this.prisma.review.findUnique({
      where: {
        id,
      },
    });

    if (!review) {
      throw new NotFoundException('Review not found');
    }

    return this.prisma.review.delete({
      where: {
        id,
      },
    });
  }
}
