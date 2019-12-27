// @nestjs
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// services
import { ArtistsService } from 'src/services/artists.service';
import { IArtists } from 'src/interfaces/artists.interface';

@Controller('artists')
@ApiTags('artists')
export class ArtistsController {
    constructor(private readonly artistsService: ArtistsService){}

    @Get()
    async getArtists(): Promise<IArtists[]> {
        return await this.artistsService.getArtists();
    }
}
