import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(data: CreateProductDto): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    }>;
    findAll(categoryId?: string, minPrice?: string, maxPrice?: string): Promise<({
        category: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        name: string;
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    })[]>;
    findOne(id: string): Promise<{
        category: {
            id: number;
            name: string;
        };
        reviews: {
            id: number;
            createdAt: Date;
            productId: number;
            userId: number;
            imageUrl: string | null;
            rating: number;
            comment: string | null;
        }[];
    } & {
        id: number;
        createdAt: Date;
        name: string;
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    }>;
    update(id: string, data: UpdateProductDto): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    }>;
}
