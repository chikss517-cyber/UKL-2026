import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    checkout(req: any, dto: any): Promise<{
        id: number;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.order_status;
        address: string;
        phone: string;
        paymentMethod: string;
        mapLink: string | null;
        createdAt: Date;
    }>;
    findMyOrders(req: any): Promise<any>;
    findAll(): Promise<any>;
    updateStatus(id: string, body: {
        status: string;
    }): Promise<any>;
}
