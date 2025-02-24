import { IsString, IsPhoneNumber, } from "class-validator";


class ClientDTO{
    @IsString()
    name!: string;

    @IsPhoneNumber("BR")
    cellphone!: string;

}

export default ClientDTO;