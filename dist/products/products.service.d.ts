import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto, file?: any): Promise<{
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
    findAll(categoryId?: number, minPrice?: number, maxPrice?: number): Promise<({
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
    findOne(id: number): Promise<{
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
    update(id: number, data: UpdateProductDto, file?: any): Promise<{
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
    remove(id: number): Promise<{
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
