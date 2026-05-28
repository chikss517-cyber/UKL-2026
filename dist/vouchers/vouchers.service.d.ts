import { PrismaService } from '../prisma/prisma.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateVoucherDto): Promise<{
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
        expiredAt: Date;
        id: number;
    }>;
    findAll(): Promise<{
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
        expiredAt: Date;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
        expiredAt: Date;
        id: number;
    }>;
    apply(data: ApplyVoucherDto): Promise<{
        voucher: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        finalTotal: number;
    }>;
    remove(id: number): Promise<{
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
        expiredAt: Date;
        id: number;
    }>;
}
