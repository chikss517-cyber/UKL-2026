import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    checkout(req: any, dto: any): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        address: string;
        phone: string;
        paymentMethod: string;
        mapLink: string | null;
    }>;
    findMyOrders(req: any): Promise<({
        items: ({
            product: {
                id: number;
                createdAt: Date;
                name: string;
                price: number;
                stock: number;
                categoryId: number;
                specs: import("@prisma/client/runtime/library").JsonValue;
                description: string | null;
                imageUrl: string | null;
            };
        } & {
            id: number;
            productId: number;
            quantity: number;
            price: number;
            orderId: number;
        })[];
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
    })[]>;
    findAll(): Promise<({
        user: {
            email: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
        items: ({
            product: {
                id: number;
                createdAt: Date;
                name: string;
                price: number;
                stock: number;
                categoryId: number;
                specs: import("@prisma/client/runtime/library").JsonValue;
                description: string | null;
                imageUrl: string | null;
            };
        } & {
            id: number;
            productId: number;
            quantity: number;
            price: number;
            orderId: number;
        })[];
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
    })[]>;
    updateStatus(id: string, body: {
        status: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        address: string;
        phone: string;
        paymentMethod: string;
        mapLink: string | null;
    }>;
}
