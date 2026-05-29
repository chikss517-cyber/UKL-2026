import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    analytics(): Promise<{
        totalUsers: number;
        totalProducts: number;
        totalOrders: number;
        totalRevenue: number;
        recentOrders: ({
            user: {
                email: string;
                password: string;
                id: number;
                role: import(".prisma/client").$Enums.Role;
                createdAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            userId: number;
            total: number;
            status: import(".prisma/client").$Enums.OrderStatus;
        })[];
    }>;
}
