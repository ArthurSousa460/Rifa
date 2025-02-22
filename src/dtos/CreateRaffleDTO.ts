import { IsDate, IsString } from "class-validator";

class CreateRaffleDTO{

    @IsString()
    name!: string;
    @IsString()
    description!: string;
    @IsString()
    urlBanner!: string;
    @IsDate()
    date!: Date
    
}


export default CreateRaffleDTO;