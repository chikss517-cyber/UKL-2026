import { OrdersService } from './orders.service';
import { CheckoutDto } from './dto/checkout.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    checkout(req: any, dto: CheckoutDto): Promise<{
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.order_status;
        createdAt: Date;
        id: number;
    }>;
    findMyOrders(req: any): Promise<any>;
    findAll(): Promise<any>;
    updateStatus(id: string, body: {
        status: string;
    }): Promise<any>;
}
