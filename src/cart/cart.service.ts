import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(userId: number, data: AddCartDto) {
    let cart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: {
          userId,
        },
      });
    }

    const existingItem = await this.prisma.cartitem.findFirst({
      where: {
        cartId: cart.id,
        productId: data.productId,
      },
    });

    if (existingItem) {
      return this.prisma.cartitem.update({
        where: {
          id: existingItem.id,
        },

        data: {
          quantity: existingItem.quantity + data.quantity,
        },
      });
    }

    return this.prisma.cartitem.create({
      data: {
        cartId: cart.id,
        productId: data.productId,
        quantity: data.quantity,
      },
    });
  }

  async findCart(userId: number) {
    const cart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });

    if (!cart) {
      return null;
    }

    const cartItems = await this.prisma.cartitem.findMany({
      where: {
        cartId: cart.id,
      },
      include: {
        product: true,
      },
    } as any);

    return {
      ...cart,
      cartItems,
    };
  }

  async updateQuantity(itemId: number, data: UpdateCartDto) {
    const item = await this.prisma.cartitem.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cartitem.update({
      where: {
        id: itemId,
      },

      data: {
        quantity: data.quantity,
      },
    });
  }

  async removeItem(itemId: number) {
    const item = await this.prisma.cartitem.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item) {
      throw new NotFoundException('Cart item not found');
    }

    return this.prisma.cartitem.delete({
      where: {
        id: itemId,
      },
    });
  }

  async clearCart(userId: number) {
    const cart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return this.prisma.cartitem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });
  }
}
