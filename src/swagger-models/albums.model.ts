// @nestjs
import { ApiProperty } from "@nestjs/swagger";

// models
import { Songs } from './songs.model'

export class Albums {

    @ApiProperty()
    name: string;

    @ApiProperty( {type: [Songs]})
    songs: Array<Songs>
}