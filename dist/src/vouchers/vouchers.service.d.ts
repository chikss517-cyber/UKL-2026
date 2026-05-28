import { PrismaService } from '../prisma/prisma.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateVoucherDto): Promise<{
        id: number;
        code: string;
        expiredAt: Date;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        code: string;
        expiredAt: Date;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        code: string;
        expiredAt: Date;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
    }>;
    apply(data: ApplyVoucherDto): Promise<{
        voucher: string;
        discount: any;
        finalTotal: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        code: string;
        expiredAt: Date;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
    }>;
}
