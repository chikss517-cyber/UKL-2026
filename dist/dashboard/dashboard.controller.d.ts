import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    analytics(): Promise<{
        totalUsers: any;
        totalProducts: any;
        totalOrders: any;
        totalRevenue: number;
        recentOrders: any;
    }>;
}
