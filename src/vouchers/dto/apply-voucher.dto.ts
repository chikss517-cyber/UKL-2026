import { IsInt, IsString, Min } from 'class-validator';

export class ApplyVoucherDto {
  @IsString()
  code: string;

  @IsInt()
  @Min(1)
  total: number;
}
