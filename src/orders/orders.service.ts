import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  // ==========================================
  // 🟢 1. LOGIKA PROSES SIMPAN CHECKOUT
  // ==========================================
  async checkout(userId: number, dto: any) {
    if (!dto.items || dto.items.length === 0) {
      throw new NotFoundException('Tidak ada item yang dikirim!');
    }
    let total = 0;

    for (const item of dto.items) {
      const product = await this.prisma.product.findUnique({
        where: { id: Number(item.productId || item.id) },
      });

      if (!product) {
        throw new NotFoundException(
          `Produk ID ${item.productId || item.id} tidak ditemukan`,
        );
      }

      total += product.price * item.quantity;
    }

    const shippingCost = total >= 500000 ? 0 : 25000;
    const grandTotal = total + shippingCost;

    return this.prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
          total: grandTotal,
          address: dto.address,
          phone: dto.phone,
          paymentMethod: dto.paymentMethod?.toUpperCase() || 'COD',
          mapLink: dto.mapLink || null,
          status: 'PENDING',
        },
      });

      for (const item of dto.items) {
        const product = await tx.product.findUnique({
          where: { id: Number(item.productId || item.id) },
        });

        await tx.orderItem.create({
          data: {
            orderId: order.id,
            productId: product!.id,
            quantity: item.quantity,
            price: product!.price,
          },
        });

        await tx.product.update({
          where: { id: product!.id },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });
      }

      return order;
    });
  }

  // ==========================================
  // 🔵 2. AMBIL RIWAYAT PESANAN PER USER (Pelanggan)
  // ==========================================
  async findByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: {
          include: { product: true },
        },
      },
      orderBy: {
        id: 'desc', // Pesanan terbaru ditaruh paling atas
      },
    });
  }

  // ==========================================
  // 🟡 3. RUTE PEMBANTU LAINNYA (Admin & Detail)
  // ==========================================
  async findAll() {
    return this.prisma.order.findMany({
      include: {
        user: true,
        items: {
          include: { product: true },
        },
      },
      orderBy: { id: 'desc' },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        items: {
          include: { product: true },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Data pesanan tidak ditemukan');
    }

    return order;
  }

  async updateStatus(id: number, status: any) {
    await this.findOne(id);

    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.order.delete({
      where: { id },
    });
  }
}
