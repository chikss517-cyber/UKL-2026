import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
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
    findOne(id: string): Promise<{
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
    uploadProof(id: string, file: Express.Multer.File): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    verify(id: string, data: VerifyPaymentDto): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        status: import(".prisma/client").$Enums.PaymentStatus;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
}
