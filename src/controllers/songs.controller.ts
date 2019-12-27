// @nestjs
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// services
import { SongsService } from 'src/services/songs.service';
import { ISongs } from 'src/interfaces/songs.interface';

@Controller('songs')
@ApiTags('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    @Get()
    async getSongs(): Promise<ISongs[]> {
        return await this.songsService.getSongs();
    }
}