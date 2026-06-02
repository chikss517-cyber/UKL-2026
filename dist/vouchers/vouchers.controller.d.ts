import { VouchersService } from './vouchers.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersController {
    private readonly vouchersService;
    constructor(vouchersService: VouchersService);
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
    apply(data: ApplyVoucherDto): Promise<{
        voucher: string;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        finalTotal: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        value: number;
        code: string;
        type: import(".prisma/client").$Enums.VoucherType;
        minPurchase: number | null;
        expiredAt: Date;
        active: boolean;
    }>;
}
