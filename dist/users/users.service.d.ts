import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
    findById(id: number): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    create(data: any): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    update(id: number, data: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
