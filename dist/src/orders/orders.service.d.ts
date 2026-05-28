import { PrismaService } from '../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkout(userId: number): Promise<{
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
    findOne(id: number): Promise<{
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
    updateStatus(id: number, status: any): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        total: number;
        status: import(".prisma/client").$Enums.OrderStatus;
    }>;
}
