import { PaymentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePaymentDto): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    findAll(): Promise<({
        order: {
            id: number;
            createdAt: Date;
            userId: number;
            total: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            address: string;
            phone: string;
            paymentMethod: string;
            mapLink: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    })[]>;
    findOne(id: number): Promise<{
        order: {
            id: number;
            createdAt: Date;
            userId: number;
            total: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            address: string;
            phone: string;
            paymentMethod: string;
            mapLink: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    uploadProof(id: number, proofUrl: string): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    verify(id: number, status: PaymentStatus): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
}
