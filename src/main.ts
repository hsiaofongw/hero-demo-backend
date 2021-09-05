import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const docConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('探索子博客数据接口')
    .setVersion('1.0')
    .build();

  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT') ?? '3000');

  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port).then(() => {
    const logger = new Logger(bootstrap.name);
    logger.log(`Nest App listen at ${port}`);
  });
}
bootstrap();
