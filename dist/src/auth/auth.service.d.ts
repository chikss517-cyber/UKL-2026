import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(data: RegisterDto): Promise<{
        message: string;
        user: Promise<{
            email: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        }>;
    }>;
    login(data: LoginDto): Promise<{
        access_token: string;
    }>;
}
