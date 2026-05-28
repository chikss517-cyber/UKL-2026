import { IsDateString, IsEnum, IsInt, IsString, Min } from 'class-validator';

import { VoucherType } from '@prisma/client';

export class CreateVoucherDto {
  @IsString()
  code: string;

  @IsEnum(VoucherType)
  type: VoucherType;

  @IsInt()
  @Min(0)
  value: number;

  @IsInt()
  @Min(0)
  minPurchase: number;

  @IsDateString()
  expiredAt: string;
}
