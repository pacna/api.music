import { Controller, Get } from '@nestjs/common';
import { SongsService } from '../services/songs.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('songs')
@ApiTags('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getSongs(): string {
    return this.songsService.getSongs();
  }
}