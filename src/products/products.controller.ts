import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  UsePipes,            // 👈 Import UsePipes
  ValidationPipe,      // 👈 Import ValidationPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'; 
import { extname } from 'path'; 

import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `prod-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  // 🚨 REKAYASA 1: Paksa NestJS mengubah string angka FormData menjadi Integer murni sesuai aturan DTO
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  create(
    @Body() data: CreateProductDto,
    @Request() req: any,
    @UploadedFile() file: any, 
  ) {
    console.log("🔥 BACKEND POST BODY:", data);
    console.log("🔥 BACKEND POST FILE GAMBAR:", file);
    console.log("🔥 BACKEND PUT BODY:", data);
    return this.productsService.create(data, file);
  }

  @Get()
  findAll(
    @Query('categoryId') categoryId?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
  ) {
    return this.productsService.findAll(
      categoryId ? Number(categoryId) : undefined,
      minPrice ? Number(minPrice) : undefined,
      maxPrice ? Number(maxPrice) : undefined,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

 @Put(':id')
@UseGuards(JwtAuthGuard)
@UseInterceptors(
  FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix =
          Date.now() + '-' + Math.round(Math.random() * 1e9);

        callback(
          null,
          `prod-${uniqueSuffix}${extname(file.originalname)}`
        );
      },
    }),
  }),
)
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
  }),
  
)
update(
  @Param('id') id: string,
  @Body() data: UpdateProductDto,
  @UploadedFile() file: any,
)
 {
  
  console.log('========== PUT ==========');
  console.log('ID =', id);
  console.log('BODY =', data);
  console.log('FILE =', file);

  return this.productsService.update(
    Number(id),
    data,
    file,
  
  );
  
  
}
@Delete(':id')
@UseGuards(JwtAuthGuard)
remove(@Param('id') id: string) {
  return this.productsService.remove(Number(id));
}
};
