import { IsEnum } from 'class-validator';

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
  PAID = 'PAID',
  WAITING_VERIFICATION = 'WAITING_VERIFICATION',
}

export class VerifyPaymentDto {
  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
