import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
            address: string;
            phone: string;
            paymentMethod: string;
            mapLink: string | null;
        })[];
    }>;
}
