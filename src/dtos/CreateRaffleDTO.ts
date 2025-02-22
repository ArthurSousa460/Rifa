import { IsDate, IsNumber, IsString, } from "class-validator";

class CreateRaffleDTO{

    @IsString()
    name!: string;
    @IsString()
    description!: string;
    @IsDate()
    date!: Date
    @IsNumber()
    clientId!: number
}


export default CreateRaffleDTO;