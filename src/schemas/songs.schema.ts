
import * as mongoose from 'mongoose';

export const SongsSchema = new mongoose.Schema({
    title: String,
    artist: String,
    length: String,
    path: String,
    favorite: Boolean
});