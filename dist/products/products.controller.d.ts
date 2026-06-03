import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(data: CreateProductDto, req: any, file: any): Promise<any>;
    findAll(categoryId?: string, minPrice?: string, maxPrice?: string): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: UpdateProductDto, file: any): Promise<any>;
    remove(id: string): Promise<any>;
}
