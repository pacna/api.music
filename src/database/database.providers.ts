import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: process.env.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DATABASE),
  },
];