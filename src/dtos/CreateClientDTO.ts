import { IsString, IsPhoneNumber, } from "class-validator";


class CreateClientDTO{
    @IsString()
    name: string;

    @IsPhoneNumber("BR")
    cellphone: string;

}

export default CreateClientDTO;