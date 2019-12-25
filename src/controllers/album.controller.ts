// @nestjs
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// services
import { AlbumService } from 'src/services/album.service';

@Controller('album')
@ApiTags('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService){}

    @Get()
    getAlbums(): string {
        return this.albumService.getAlbums();
    }
}
