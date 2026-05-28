import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { WishlistService } from './wishlist.service';

import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { CreateWishlistDto } from './dto/create-wishlist.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req,

    @Body() data: CreateWishlistDto,
  ) {
    return this.wishlistService.create(req.user.id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req) {
    return this.wishlistService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(Number(id));
  }
}
