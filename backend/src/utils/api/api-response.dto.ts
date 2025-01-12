export class APIResponseDto<T> {
  errors?: { [k: string]: string[] };
  message: string;
  data?: T;
}
