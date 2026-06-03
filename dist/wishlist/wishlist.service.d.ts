import { PrismaService } from '../prisma/prisma.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: CreateWishlistDto): Promise<any>;
    findAll(userId: number): Promise<any>;
    remove(id: number): Promise<any>;
}
