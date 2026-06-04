import { IsArray, IsOptional, IsString } from 'class-validator';

export class CheckoutDto {

  @IsArray()
  items: any[];

  @IsOptional()
  @IsArray()
  cartItems?: any[];

  @IsOptional()
  @IsString()
  note?: string;
}