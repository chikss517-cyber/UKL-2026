import { PrismaService } from '../prisma/prisma.service';
import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addToCart(userId: number, data: AddCartDto): Promise<any>;
    findCart(userId: number): Promise<any>;
    updateQuantity(itemId: number, data: UpdateCartDto): Promise<any>;
    removeItem(itemId: number): Promise<any>;
    clearCart(userId: number): Promise<any>;
}
