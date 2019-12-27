import { ApiProperty } from "@nestjs/swagger";

export class Favorite {
    
    @ApiProperty()
    favorite: boolean;
}