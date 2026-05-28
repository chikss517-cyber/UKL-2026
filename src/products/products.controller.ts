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
} from '@nestjs/common';

import { ProductsService } from './products.service';

import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productsService.create(data);
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,

    @Body() data: UpdateProductDto,
  ) {
    return this.productsService.update(Number(id), data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(Number(id));
  }
}
