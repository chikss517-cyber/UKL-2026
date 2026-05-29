import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],

    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,

      forbidNonWhitelisted: true,

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

  await app.listen(3000);

  console.log('Server running on http://localhost:3000');

  console.log('Swagger running on http://localhost:3000/api');
}

bootstrap();
