import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(data: CreateProductDto, req: any, file: any): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        stock: number;
        categoryId: number;
        specs: import("@prisma/client/runtime/library").JsonValue;
        description: string | null;
        imageUrl: string | null;
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
        price: number;
        stock: number;
        categoryId: number;
        specs: import("@prisma/client/runtime/library").JsonValue;
        description: string | null;
        imageUrl: string | null;
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
        price: number;
        stock: number;
        categoryId: number;
        specs: import("@prisma/client/runtime/library").JsonValue;
        description: string | null;
        imageUrl: string | null;
    }>;
    update(id: string, data: UpdateProductDto, file: any): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        stock: number;
        categoryId: number;
        specs: import("@prisma/client/runtime/library").JsonValue;
        description: string | null;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        name: string;
        price: number;
        stock: number;
        categoryId: number;
        specs: import("@prisma/client/runtime/library").JsonValue;
        description: string | null;
        imageUrl: string | null;
    }>;
}
