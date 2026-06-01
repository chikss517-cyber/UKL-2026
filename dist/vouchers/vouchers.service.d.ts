import { PrismaService } from '../prisma/prisma.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateVoucherDto): Promise<{
        id: number;
        value: number;
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        minPurchase: number | null;
        expiredAt: Date;
        active: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        value: number;
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        minPurchase: number | null;
        expiredAt: Date;
        active: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        value: number;
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        minPurchase: number | null;
        expiredAt: Date;
        active: boolean;
    }>;
    apply(data: ApplyVoucherDto): Promise<{
        voucher: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        finalTotal: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        value: number;
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        minPurchase: number | null;
        expiredAt: Date;
        active: boolean;
    }>;
}
