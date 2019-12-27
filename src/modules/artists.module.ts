
import { Module } from '@nestjs/common';
import { ArtistsController } from '../controllers/artists.controller';
import { ArtistsService } from '../services/artists.service';
import { ArtistsProviders } from '../database/database.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ArtistsController],
  providers: [
    ArtistsService,
    ...ArtistsProviders,
  ],
})
export class ArtistsModule {}