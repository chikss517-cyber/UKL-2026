import { VoucherType } from '@prisma/client';
export declare class CreateVoucherDto {
    code: string;
    type: VoucherType;
    value: number;
    minPurchase: number;
    expiredAt: string;
}
