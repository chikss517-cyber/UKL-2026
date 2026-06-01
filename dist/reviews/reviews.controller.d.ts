import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(req: any, data: CreateReviewDto): Promise<{
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
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    })[]>;
    findByProduct(id: string): Promise<({
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
    update(id: string, data: UpdateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        productId: number;
        userId: number;
        imageUrl: string | null;
        rating: number;
        comment: string | null;
    }>;
}
