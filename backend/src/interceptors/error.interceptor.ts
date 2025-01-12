import {
  BadGatewayException,
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APIResponseDto } from 'src/utils/api/api-response.dto';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        console.error(err);
        if (err instanceof PrismaClientKnownRequestError) {
          if (err.code === 'P2002') {
            const messages = err.message.split('\n');
            const field = messages[messages.length - 1]
              .match(new RegExp(/(?<=`).*?(?=`)/))
              .toString();
            return throwError(
              () =>
                new BadRequestException({
                  errors: { [field]: ['require unique value'] },
                  message: 'Invalid unique',
                } as APIResponseDto<{}>),
            );
          }
          return throwError(() => new BadRequestException());
        }
        return throwError(() => new BadGatewayException());
      }),
    );
  }
}
