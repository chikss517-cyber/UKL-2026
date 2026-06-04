import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentStatus } from './dto/verify-payment.dto';
export declare class PaymentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePaymentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    uploadProof(id: number, proofUrl: string): Promise<any>;
    verify(id: number, status: PaymentStatus): Promise<any>;
    remove(id: number): Promise<any>;
}
