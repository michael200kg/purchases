export class ApiResponse {
  type: string;
  code: number;
  message: string;

  constructor(type: string = '', code: number = 0, message: string = '') {
    this.type = type;
    this.code = code;
    this.message = message;
  }
}