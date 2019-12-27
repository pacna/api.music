// @nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { SongsController } from '../controllers/songs.controller';

// services
import { SongsService } from '../services/songs.service';

// schemas
import { SongsSchema } from '../schemas/songs.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Songs', schema: SongsSchema}])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}