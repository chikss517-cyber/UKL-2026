import { PrismaService } from '../prisma/prisma.service';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkout(userId: number, dto: any): Promise<{
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
    findByUser(userId: number): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    updateStatus(id: number, status: any): Promise<any>;
    remove(id: number): Promise<any>;
}
