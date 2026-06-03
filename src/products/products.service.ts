import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  // 📝 TAMBAHKAN PARAMETER SECONDARY 'file' UNTUK MENAMPUNG SEPUCUK GAMBAR
  async create(data: CreateProductDto, file?: any) {
    try {
      // 1. Ambil path/nama file gambar jika diunggah, jika tidak beri string kosong/default
      const imagePath = file
        ? file.filename || file.path
        : 'default-hardware.jpg';

      // 2. Antisipasi validasi tipe data 'specs' (Pastikan berupa Objek JSON asli saat masuk Prisma)
      let parsedSpecs = data.specs;
      if (typeof parsedSpecs === 'string') {
        try {
          parsedSpecs = JSON.parse(parsedSpecs);
        } catch {
          parsedSpecs = { detail: data.specs };
        }
      }

      // 3. Eksekusi pemisahan data biner dan data teks murni
      return await this.prisma.product.create({
        data: {
          name: data.name,
          price: Number(data.price),
          stock: Number(data.stock),
          categoryId: Number(data.categoryId),
          specs: parsedSpecs as any, // Dipaksa any agar Prisma Json type tidak protes
          imageUrl: imagePath, // 👈 String nama file aman masuk ke kolom string DB!
        },
      });
    } catch (error) {
      console.error('🚨 DETAIL ERROR PRISMA DB:', error);
      throw new InternalServerErrorException(
        'Gagal menyimpan produk. Pastikan value categoryId (ID Kategori) sudah terdaftar di database kamu!',
      );
    }
  }

  async findAll(categoryId?: number, minPrice?: number, maxPrice?: number) {
    const where: any = {};

    if (categoryId !== undefined) {
      where.categoryId = categoryId;
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    return this.prisma.product.findMany({
      where,
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  // 📝 SESUAIKAN JUGA UNTUK METHOD UPDATE
  async update(id: number, data: UpdateProductDto, file?: any) {
    await this.findOne(id);
    try {
      const updateData: any = {
        name: data.name,
        price: data.price ? Number(data.price) : undefined,
        stock: data.stock ? Number(data.stock) : undefined,
        categoryId: data.categoryId ? Number(data.categoryId) : undefined,
      };

      // 🛠️ PERBAIKAN DI SINI: Ubah 'image' menjadi 'image_url' agar sinkron dengan database
      if (file) {
        updateData.imageUrl = file.filename || file.path;
      }

      if (data.specs) {
        updateData.specs =
          typeof data.specs === 'string' ? JSON.parse(data.specs) : data.specs;
      }

      return await this.prisma.product.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      console.error('🚨 DETAIL ERROR UPDATE PRISMA DB:', error);
      throw new InternalServerErrorException('Gagal memperbarui data produk.');
    }
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.cartitem.deleteMany({
      where: { productId: id },
    });

    await this.prisma.wishlist.deleteMany({
      where: { productId: id },
    });

    await this.prisma.review.deleteMany({
      where: { productId: id },
    });

    await this.prisma.orderitem.deleteMany({
      where: { productId: id },
    });

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
