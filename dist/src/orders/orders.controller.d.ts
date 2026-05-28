import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    checkout(req: any): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    }>;
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
                categoryId: number;
                description: string | null;
                price: number;
                stock: number;
                imageUrl: string | null;
                specs: import("@prisma/client/runtime/library").JsonValue;
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
    })[]>;
    findOne(id: string): Promise<{
        user: {
            email: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
        payment: {
            id: number;
            createdAt: Date;
            status: import(".prisma/client").$Enums.PaymentStatus;
            orderId: number;
            amount: number;
            proofUrl: string | null;
        };
        items: ({
            product: {
                id: number;
                createdAt: Date;
                name: string;
                categoryId: number;
                description: string | null;
                price: number;
                stock: number;
                imageUrl: string | null;
                specs: import("@prisma/client/runtime/library").JsonValue;
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
    }>;
    updateStatus(id: string, status: string): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    }>;
}
