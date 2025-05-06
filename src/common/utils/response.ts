export class HttpResponse<T> {
  status: number;
  message: string;
  data: T;

  constructor(message: string, data: T, status: number) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
