import { CartService } from './cart.service';
import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(req: any, data: AddCartDto): Promise<any>;
    findCart(req: any): Promise<any>;
    updateQuantity(id: string, data: UpdateCartDto): Promise<any>;
    removeItem(id: string): Promise<any>;
    clearCart(req: any): Promise<any>;
}
