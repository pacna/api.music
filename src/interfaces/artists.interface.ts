// interfaces
import { ISongs } from './songs.interface';

// others
import { Document } from 'mongoose';

export interface IArtists extends Document {
    readonly artist: string;
    readonly albums: Array<IAlbums>;
}

export interface IAlbums {
    name: string
    songs: Array<ISongs>
}