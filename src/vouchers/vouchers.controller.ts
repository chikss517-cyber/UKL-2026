import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { VouchersService } from './vouchers.service';

import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreateVoucherDto) {
    return this.vouchersService.create(data);
  }

  @Get()
  findAll() {
    return this.vouchersService.findAll();
  }

  @Post('apply')
  apply(@Body() data: ApplyVoucherDto) {
    return this.vouchersService.apply(data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vouchersService.remove(Number(id));
  }
}
