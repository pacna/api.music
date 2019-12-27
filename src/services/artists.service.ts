// @nestjs
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// interfaces
import { IArtists } from '../interfaces/artists.interface';

// other
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
    constructor(
        @InjectModel('Artists')
        private readonly artistsModel: Model<IArtists>
    ){}
    
    async getArtists(): Promise<IArtists[]> {
        return await this.artistsModel.find().exec();
    }
}
