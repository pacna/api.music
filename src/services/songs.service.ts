// @nestjs
import { Injectable, Inject } from '@nestjs/common';
import { ISongs } from '../interfaces/songs.interface';
import { IFavorite } from '../interfaces/favorite.interface';
import {IMessage} from '../interfaces/message.interface';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
    constructor(
        @Inject('SONGS_MODEL')
        private readonly songsModel: Model<ISongs>
    ){}
  
	async getSongs(): Promise<ISongs[]> {
		return await this.songsModel.find().exec();
    }
    
    async getFavorites(): Promise<ISongs[]> {
        return await this.songsModel.find({'favorite': true}).exec();
    }

    async updateFavorite(id: string, body: IFavorite): Promise<void | IMessage> {
        return await this.songsModel.updateOne({'_id': id}, {'$set': {'favorite': body.favorite}}).exec()
    }
}