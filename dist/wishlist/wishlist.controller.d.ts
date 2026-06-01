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
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
    }>;
}
