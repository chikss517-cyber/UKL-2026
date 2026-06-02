import { IsNotEmpty, IsNumber, IsObject, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer'; // 👈 Import ini

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  // 🛠️ PAKSA STRING FORMDATA MENJADI NUMBER
  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Min(0)
  price: number;

  // 🛠️ PAKSA STRING FORMDATA MENJADI INTEGER NUMBER
  @Transform(({ value }) => Math.floor(Number(value)))
  @IsNumber()
  @Min(0)
  stock: number;

  // 🛠️ PAKSA STRING FORMDATA MENJADI INTEGER NUMBER
  @Transform(({ value }) => Math.floor(Number(value)))
  @IsNumber()
  categoryId: number;

  // 🛠️ PARSE STRING JSON DARI FORMDATA MENJADI OBJECT KEMBALI
  @Transform(({ value }) => {
    try {
      return typeof value === 'string' ? JSON.parse(value) : value;
    } catch {
      return value;
    }
  })
  @IsObject()
  specs: object;
}