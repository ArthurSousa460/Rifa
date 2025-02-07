import { IsNumber } from "class-validator";

class CreateRaffleDTO{
    @IsNumber()
    clientId!: number
}