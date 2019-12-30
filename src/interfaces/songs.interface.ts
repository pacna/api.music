// others
import { Document } from 'mongoose';

export interface ISongs extends Document {
  readonly title: string;
  readonly artist?: string;
  readonly length?: string;
  readonly path: string;
  readonly favorite?: boolean;
}