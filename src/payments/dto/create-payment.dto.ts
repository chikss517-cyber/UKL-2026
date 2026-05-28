import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  proofUrl?: string;
}
