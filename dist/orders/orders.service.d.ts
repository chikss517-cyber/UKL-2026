import { PrismaService } from '../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkout(userId: number, dto: any): Promise<{
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
    findByUser(userId: number): Promise<({
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
    findOne(id: number): Promise<{
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
    }>;
    updateStatus(id: number, status: any): Promise<{
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
    remove(id: number): Promise<{
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
