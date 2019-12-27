import { ApiProperty } from "@nestjs/swagger";
import { Songs } from './songs.model'

export class Albums {

    @ApiProperty()
    name: string;

    @ApiProperty( {type: [Songs]})
    songs: Array<Songs>
}