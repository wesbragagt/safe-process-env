import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    if (process.env.APP_ENV === 'staging') {
      return 'Hello World from staging';
    } else {
      return 'Hello World from else';
    }
  }
}
