import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    analytics(): Promise<{
        totalUsers: any;
        totalProducts: any;
        totalOrders: any;
        totalRevenue: number;
        recentOrders: any;
    }>;
}
