// @nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// modules
import { SongsModule } from './modules/songs.module';
import { ArtistsModule } from './modules/artists.module';

// others
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [  MongooseModule.forRoot(process.env.DATABASE),
                ArtistsModule, 
                SongsModule 
            ],
    controllers: [],
    providers: [],
})
export class AppModule {}
