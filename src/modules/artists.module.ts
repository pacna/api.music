// @nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { ArtistsController } from '../controllers/artists.controller';

// services
import { ArtistsService } from '../services/artists.service';

// schemas
import { ArtistsSchema } from '../schemas/artists.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Artists', schema: ArtistsSchema}])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}