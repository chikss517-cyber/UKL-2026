export declare enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED",
    PAID = "PAID",
    WAITING_VERIFICATION = "WAITING_VERIFICATION"
}
export declare class VerifyPaymentDto {
    status: PaymentStatus;
}
