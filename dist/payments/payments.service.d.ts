import { PrismaService } from '../prisma/prisma.service';
import { PaymentStatus } from '@prisma/client';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePaymentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    uploadProof(id: number, proofUrl: string): Promise<any>;
    verify(id: number, status: PaymentStatus): Promise<{
        id: number;
        orderId: number;
        amount: number;
        proofUrl: string | null;
        status: import(".prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
    }>;
    remove(id: number): Promise<any>;
}
