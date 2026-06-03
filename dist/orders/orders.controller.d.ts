import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    checkout(req: any, dto: any): Promise<{
        id: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        address: string;
        phone: string;
        paymentMethod: string;
        mapLink: string | null;
        createdAt: Date;
        userId: number;
    }>;
    findMyOrders(req: any): Promise<any>;
    findAll(): Promise<any>;
    updateStatus(id: string, body: {
        status: string;
    }): Promise<any>;
}
