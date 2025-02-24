import { IsDate, IsString } from "class-validator";

class RaffleDTO{

    @IsString()
    name!: string;
    @IsString()
    description!: string;
    @IsString()
    urlBanner!: string;
    @IsDate()
    date!: Date
    
}


export default RaffleDTO;