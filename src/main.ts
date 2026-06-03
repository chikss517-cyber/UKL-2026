import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ─── 🔑 PERBAIKAN UTAMA: ATUR CORS UNTUK MENERIMA VERCEL ───
  app.enableCors({
    origin: [
      'http://localhost:3000', // Untuk testing lokal Next.js
      'https://ukl-tech-store.vercel.app', // URL Vercel kamu (Wajib tanpa tanda slash / di ujung)
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Wajib true karena kamu pakai sistem Cookie/Token
  });

  // 🎯 Akses folder 'uploads' agar gambar produk bisa diakses lewat URL
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

  const port = process.env.PORT || 3001;

  // Menggunakan '0.0.0.0' agar backend bisa diakses secara global/jaringan lokal
  await app.listen(port, '0.0.0.0');

  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger docs available on http://localhost:${port}/api`);
}
bootstrap();
