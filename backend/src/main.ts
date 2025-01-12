import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages:
        process.env.app_env?.toLowerCase() === 'production' ? true : false,
    }),
  );
  await app.listen(process.env.BACKEND_PORT ?? 3000);
}
bootstrap();
