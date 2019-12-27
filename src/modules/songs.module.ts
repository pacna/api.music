
import { Module } from '@nestjs/common';
import { SongsController } from '../controllers/songs.controller';
import { SongsService } from '../services/songs.service';
import { SongsProviders } from '../database/database.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SongsController],
  providers: [
    SongsService,
    ...SongsProviders,
  ],
})
export class SongsModule {}