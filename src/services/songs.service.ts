// @nestjs
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// interfaces
import { ISongs } from '../interfaces/songs.interface';
import { IFavorite } from '../interfaces/favorite.interface';

// others
import { Model, UpdateWriteOpResult } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel('Songs')
    private readonly songsModel: Model<ISongs>,
  ) {}

  async getSongs(): Promise<ISongs[]> {
    return await this.songsModel.find().exec();
  }

  async getFavorites(): Promise<ISongs[]> {
    return await this.songsModel.find({ favorite: true }).exec();
  }

  async updateFavorite(
    id: string,
    body: IFavorite,
  ): Promise<UpdateWriteOpResult> {
    return await this.songsModel
      .updateOne({ _id: id }, { $set: { favorite: body.favorite } })
      .exec();
  }
}
