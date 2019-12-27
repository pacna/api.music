import { Document } from 'mongoose';
import { ISongs } from './songs.interface'

export interface IArtists extends Document {
    readonly artist: string;
    readonly albums: Array<IAlbums>;
}

export interface IAlbums {
    name: string
    songs: Array<ISongs>
}