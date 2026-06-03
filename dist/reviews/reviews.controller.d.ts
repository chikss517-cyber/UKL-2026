import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(req: any, data: CreateReviewDto): Promise<any>;
    findAll(): Promise<any>;
    findByProduct(id: string): Promise<any>;
    update(id: string, data: UpdateReviewDto): Promise<any>;
    remove(id: string): Promise<any>;
}
