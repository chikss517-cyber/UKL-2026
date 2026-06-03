import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

// Prisma client may not export the Role enum as a runtime value in some setups.
// Define a local Role enum to use for validation instead.
export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(Role)
  role: Role;
}
