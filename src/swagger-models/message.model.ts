import { ApiProperty } from "@nestjs/swagger";

export class Message {

    @ApiProperty()
    n: number;

    @ApiProperty()
    nModified: number;

    @ApiProperty()
    ok: number;
}