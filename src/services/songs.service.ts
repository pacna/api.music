import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  getSongs(): string {
    return 'Hello World!';
  }
}
