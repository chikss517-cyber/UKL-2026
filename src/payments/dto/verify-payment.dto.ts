import { IsEnum } from 'class-validator';

export enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export class VerifyPaymentDto {
  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
