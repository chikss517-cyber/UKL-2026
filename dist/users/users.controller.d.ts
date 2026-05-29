import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    update(id: string, data: UpdateUserDto): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
