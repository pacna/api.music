// @nestjs
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// services
import { SongService } from 'src/services/song.service';

@Controller('song')
@ApiTags('song')
export class SongController {
    constructor(private readonly songService: SongService) {}

    @Get()
    getSongs(): string {
        return this.songService.getSongs();
    }
}