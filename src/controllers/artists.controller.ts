// @nestjs
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

// services
import { ArtistsService } from '../services/artists.service';

// interfaces
import { IArtists } from '../interfaces/artists.interface';

// models
import { Artists } from '../swagger-models/artists.model';

@Controller('artists')
@ApiTags('artists')
export class ArtistsController {
    constructor(private readonly artistsService: ArtistsService){}

    @Get()
    @ApiResponse({status: 200, type: [Artists]})
    async getArtists(): Promise<IArtists[]> {
        return await this.artistsService.getArtists();
    }
}
