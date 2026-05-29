import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: CreateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    }>;
    findAll(): Promise<({
        user: {
            email: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
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
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    })[]>;
    findByProduct(productId: number): Promise<({
        user: {
            email: string;
            password: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
            createdAt: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    })[]>;
    update(id: number, data: UpdateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    }>;
}
