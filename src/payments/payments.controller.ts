import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: CreatePaymentDto) {
    return this.paymentsService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(Number(id));
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/upload')
  @UseInterceptors(FileInterceptor('proof'))
  uploadProof(
    @Param('id') id: string,

    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.paymentsService.uploadProof(Number(id), file.filename);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/verify')
  verify(
    @Param('id') id: string,

    @Body() data: VerifyPaymentDto,
  ) {
    return this.paymentsService.verify(Number(id), data.status as any);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(Number(id));
  }
}
