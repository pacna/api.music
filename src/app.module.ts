// @nestjs
import { Module } from '@nestjs/common';

// controllers
import {SongController} from './controllers/song.controller'
import {SongService} from './services/song.service'

// services
import { AlbumService } from './services/album.service';
import { AlbumController } from './controllers/album.controller';

@Module({
    imports: [],
    controllers: [AlbumController, SongController],
    providers: [AlbumService, SongService],
})
export class AppModule {}
