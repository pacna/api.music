// @nestjs
import { Module } from '@nestjs/common';

// controllers
import {SongController} from './controllers/song.controller'
import {SongService} from './services/song.service'

// services
import { AlbumService } from './services/album.service';
import { AlbumController } from './controllers/album.controller';
import { SongsModule } from './modules/songs.module';


@Module({
    imports: [SongsModule],
    controllers: [AlbumController, SongController],
    providers: [AlbumService, SongService],
})
export class AppModule {}
