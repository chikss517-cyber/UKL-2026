import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    create(req: any, data: CreateWishlistDto): Promise<any>;
    findAll(req: any): Promise<any>;
    remove(id: string): Promise<any>;
}
