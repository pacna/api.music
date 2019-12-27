// @nestjs
import { Injectable, Inject } from '@nestjs/common';
import { ISongs } from '../interfaces/songs.interface';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
    constructor(
        @Inject('SONGS_MODEL')
        private readonly songsModel: Model<ISongs>
    ){}
  
	getSongs(): Promise<ISongs[]> {
		return this.songsModel.find().exec();
	}
}