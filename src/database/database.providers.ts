import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { SongsSchema } from '../schemas/songs.schema';
import { ArtistsSchema } from '../schemas/artists.schema';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: process.env.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE),
  },
];

export const SongsProviders = [
  {
    provide: 'Songs',
    useFactory: (connection: Connection) => connection.model('songs', SongsSchema),
    inject: [process.env.DATABASE_CONNECTION],
  }
];

export const ArtistsProviders = [
  {
    provide: 'Artists',
    useFactory: (connection: Connection) => connection.model('artists', ArtistsSchema),
    inject: [process.env.DATABASE_CONNECTION],
  }
];