import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

import { CartService } from './cart.service';

import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { AddCartDto } from './dto/add-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addToCart(
    @Req() req,

    @Body() data: AddCartDto,
  ) {
    return this.cartService.addToCart(req.user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findCart(@Req() req) {
    return this.cartService.findCart(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateQuantity(
    @Param('id') id: string,

    @Body() data: UpdateCartDto,
  ) {
    return this.cartService.updateQuantity(Number(id), data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  removeItem(@Param('id') id: string) {
    return this.cartService.removeItem(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  clearCart(@Req() req) {
    return this.cartService.clearCart(req.user.id);
  }
}
