// @nestjs
import { Module } from '@nestjs/common';

// modules
import { SongsModule } from './modules/songs.module';
import { ArtistsModule } from './modules/artists.module';


@Module({
    imports: [ ArtistsModule, SongsModule ],
    controllers: [],
    providers: [],
})
export class AppModule {}
