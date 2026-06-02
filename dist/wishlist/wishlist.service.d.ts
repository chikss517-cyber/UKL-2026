import { PrismaService } from '../prisma/prisma.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: CreateWishlistDto): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    }>;
    findAll(userId: number): Promise<({
        product: {
            id: number;
            createdAt: Date;
            name: string;
            price: number;
            stock: number;
            categoryId: number;
            specs: import("@prisma/client/runtime/library").JsonValue;
            description: string | null;
            imageUrl: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    })[]>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    }>;
}
