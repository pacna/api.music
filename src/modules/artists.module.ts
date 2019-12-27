// @nestjs
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// controllers
import { ArtistsController } from 'src/controllers/artists.controller';

// services
import { ArtistsService } from 'src/services/artists.service';

// schemas
import { ArtistsSchema } from 'src/schemas/artists.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Artists', schema: ArtistsSchema}])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
})
export class ArtistsModule {}