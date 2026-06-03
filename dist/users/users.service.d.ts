import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    findByEmail(email: string): Promise<any>;
    create(data: any): Promise<any>;
    update(id: number, data: UpdateUserDto): Promise<any>;
    remove(id: number): Promise<any>;
}
