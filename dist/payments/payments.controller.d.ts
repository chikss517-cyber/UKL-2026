import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(data: CreatePaymentDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    uploadProof(id: string, file: Express.Multer.File): Promise<any>;
    verify(id: string, data: VerifyPaymentDto): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.payment_status;
        createdAt: Date;
        orderId: number;
        amount: number;
        proofUrl: string | null;
    }>;
    remove(id: string): Promise<any>;
}
