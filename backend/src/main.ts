import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ErrorsInterceptor } from './interceptors/error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages:
        process.env.app_env?.toLowerCase() === 'production' ? true : false,
    }),
  );
  app.useGlobalInterceptors(new ErrorsInterceptor());
  await app.listen(process.env.BACKEND_PORT ?? 3000);
}
bootstrap();
