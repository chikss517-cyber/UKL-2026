export declare enum VoucherType {
    PERCENTAGE = "PERCENTAGE",
    FIXED = "FIXED"
}
export declare class CreateVoucherDto {
    code: string;
    type: VoucherType;
    value: number;
    minPurchase: number;
    expiredAt: string;
}
