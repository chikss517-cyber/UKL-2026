import { VouchersService } from './vouchers.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersController {
    private readonly vouchersService;
    constructor(vouchersService: VouchersService);
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
    apply(data: ApplyVoucherDto): Promise<{
        voucher: string;
        discount: any;
        finalTotal: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        code: string;
        expiredAt: Date;
        type: import(".prisma/client").$Enums.VoucherType;
        value: number;
        minPurchase: number | null;
        active: boolean;
    }>;
}
