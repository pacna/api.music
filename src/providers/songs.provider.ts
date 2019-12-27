
import { Connection } from 'mongoose';
import { SongsSchema } from '../schemas/songs.schema';
import * as dotenv from 'dotenv'

dotenv.config();

export const SongsProviders = [
  {
    provide: 'SONGS_MODEL',
    useFactory: (connection: Connection) => connection.model('songs', SongsSchema),
    inject: [process.env.DATABASE_CONNECTION],
  },
];