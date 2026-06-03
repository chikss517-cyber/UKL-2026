import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto, file?: any): Promise<any>;
    findAll(categoryId?: number, minPrice?: number, maxPrice?: number): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: UpdateProductDto, file?: any): Promise<any>;
    remove(id: number): Promise<any>;
}
