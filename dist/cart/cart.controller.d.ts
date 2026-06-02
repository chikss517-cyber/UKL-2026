import { CartService } from './cart.service';
import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(req: any, data: AddCartDto): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    findCart(req: any): Promise<{
        items: ({
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
            productId: number;
            quantity: number;
            cartId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
    }>;
    updateQuantity(id: string, data: UpdateCartDto): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    removeItem(id: string): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    clearCart(req: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
