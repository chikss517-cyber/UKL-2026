import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userId: number, data: CreateReviewDto): Promise<any>;
    findAll(): Promise<any>;
    findByProduct(productId: number): Promise<any>;
    update(id: number, data: UpdateReviewDto): Promise<any>;
    remove(id: number): Promise<any>;
}
