import { ApiProperty } from "@nestjs/swagger";

export class Songs {

    @ApiProperty()
    title: string;

    @ApiProperty()
    artist: string;

    @ApiProperty()
    length: string;

    @ApiProperty()
    path: string;

    @ApiProperty()
    favorite: boolean;
}