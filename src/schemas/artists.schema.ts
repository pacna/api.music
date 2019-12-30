// others
import * as mongoose from 'mongoose';

export const ArtistsSchema = new mongoose.Schema({
    artist: String,
    albums: Array
});