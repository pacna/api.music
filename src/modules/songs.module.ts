// @nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { SongsController } from 'src/controllers/songs.controller';

// services
import { SongsService } from 'src/services/songs.service';

// schemas
import { SongsSchema } from 'src/schemas/songs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Songs', schema: SongsSchema}])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}