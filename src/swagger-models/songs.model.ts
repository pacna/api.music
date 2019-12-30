// @nestjs
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class Songs {

    @ApiProperty()
    title: string;

    @ApiPropertyOptional()
    artist: string;

    @ApiPropertyOptional()
    length: string;

    @ApiProperty()
    path: string;

    @ApiPropertyOptional()
    favorite: boolean;
}