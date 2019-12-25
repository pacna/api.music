// @nestjs
import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
  
	getSongs(): string {
		return 'Hello World!';
	}
}
