import { PrismaService } from '../prisma/prisma.service';
import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addToCart(userId: number, data: AddCartDto): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    findCart(userId: number): Promise<{
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
    updateQuantity(itemId: number, data: UpdateCartDto): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    removeItem(itemId: number): Promise<{
        id: number;
        productId: number;
        quantity: number;
        cartId: number;
    }>;
    clearCart(userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
