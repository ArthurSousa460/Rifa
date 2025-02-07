import { IsNumber } from "class-validator";

class CreateRaffleDTO{
    @IsNumber()
    clientId!: number
}


export default CreateRaffleDTO;