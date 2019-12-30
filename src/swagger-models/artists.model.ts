// @nestjs
import { ApiProperty } from "@nestjs/swagger";

// models
import { Albums } from "./albums.model";

export class Artists {

    @ApiProperty()
    artist: string;

    @ApiProperty({ type: [Albums] })
    albums: Array<Albums>
}