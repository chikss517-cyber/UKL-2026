import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // 👈 1. WAJIB IMPORT INI
import { join } from 'path'; // 👈 2. WAJIB IMPORT UNTUK PATH FOLDER

async function bootstrap() {
  // 👈 3. TAMBAHKAN <NestExpressApplication> DI SINI
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  // 🎯 4. JURUS UTAMA: Buka akses folder 'uploads' agar bisa dilihat Next.js
  // Catatan: Pastikan nama folder tempat backend kamu menyimpan file gambar dari laptop bernama 'uploads'
// 🎯 AMBIL JALUR LANGSUNG DARI ROOT UTAMA PROJECT
 // 🎯 SESUAIKAN DENGAN LOKASI ASLI: masuk ke folder 'src' baru ke 'uploads'
// 🎯 Setelan standar kalau folder uploads sudah di luar src
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads/',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      
    }),
  );

  /*
  =========================
  SWAGGER CONFIG
  =========================
  */
  const config = new DocumentBuilder()
    .setTitle('Toko Online API')
    .setDescription('API E-Commerce Komponen Komputer')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
  console.log('Server running on http://localhost:3001');
  console.log('Swagger running on http://localhost:3001/api');
}

bootstrap();