import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findAll(categoryId?: number, minPrice?: number, maxPrice?: number): Promise<({
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
        categoryId: number;
        description: string | null;
        price: number;
        stock: number;
        imageUrl: string | null;
        specs: import("@prisma/client/runtime/library").JsonValue;
    }>;
    update(id: number, data: UpdateProductDto): Promise<{
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
    remove(id: number): Promise<{
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
