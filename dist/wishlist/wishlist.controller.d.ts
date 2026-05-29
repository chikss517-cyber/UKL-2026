import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(req: any, data: CreateWishlistDto): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    }>;
    findAll(req: any): Promise<({
        product: {
            id: number;
            createdAt: Date;
            name: string;
            categoryId: number;
            description: string | null;
            price: number;
            stock: number;
            imageUrl: string | null;
            specs: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    })[]>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    }>;
}
