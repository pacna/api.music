// @nestjs
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { IArtists } from 'src/interfaces/artists.interface';

@Injectable()
export class ArtistsService {
    constructor(
        @Inject('Artists')
        private readonly artistsModel: Model<IArtists>
    ){}
    
    async getArtists(): Promise<IArtists[]> {
        return await this.artistsModel.find().exec();
    }
}
