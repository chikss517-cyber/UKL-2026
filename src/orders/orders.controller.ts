import {
  Body, // 📦 Tool untuk mengambil DATA FORM (alamat, no hp, dll) yang dikirim frontend
  Controller,
  Get,
  Param,
  Patch,
  Post, // 🚀 Tool untuk membuat rute request POST (menulis data baru)
  Req, // 🔑 Tool untuk mengambil data USER yang sedang login dari Token JWT
  UseGuards, // 🔒 Gembok pengaman rute
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'; // Gembok token login

@Controller('orders') // 1. Ini adalah URL UTAMA kamu -> http://localhost:3001/orders
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('checkout')
  checkout(@Req() req, @Body() dto: any) {
    return this.ordersService.checkout(req.user.id, dto);
  }

  @UseGuards(JwtAuthGuard) // Harus login juga
  @Get('my-orders') // Sub-rute GET. URL lengkap: GET http://localhost:3001/orders/my-orders
  findMyOrders(@Req() req) {
    // Mengambil riwayat belanja khusus untuk user yang sedang login saat ini
    return this.ordersService.findByUser(req.user.id);
  }

  // ==========================================
  // 🟡 3. RUTE KHUSUS ADMIN (DAFTAR PESANAN MASUK)
  // ==========================================
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.ordersService.updateStatus(Number(id), body.status);
  }
  // Rute lainnya seperti Ambil Detail (:id), Update Status (:id/status), dan Hapus (:id)
}
