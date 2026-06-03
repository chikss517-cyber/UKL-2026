import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async analytics() {
    const totalUsers = await this.prisma.user.count();

    const totalProducts = await this.prisma.product.count();

    const totalOrders = await this.prisma.order.count();

    const paidOrders = await this.prisma.order.findMany({
      where: {
        status: 'PAID',
      },
    });

    let totalRevenue = 0;

    for (const order of paidOrders) {
      totalRevenue += order.total;
    }

    const recentOrders = await this.prisma.order.findMany({
      orderBy: {
        id: 'desc',
      },

      take: 5,
    });

    return {
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
      recentOrders,
    };
  }
}
