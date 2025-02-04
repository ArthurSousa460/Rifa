import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateClientDTO from "../dtos/CreateClientDTO";
import { validate } from "class-validator";

class ClientController{
    private service: ClientService;



    constructor(){
        this.service = new ClientService;
    }


    async createClient(req: Request, res: Response){
        const dto = plainToInstance(CreateClientDTO, req.body);
        const errors = await validate(dto);

        if(errors.length > 0){
            return res.status(400).send(errors);
        }

        res.status(200).send(dto);

}

}

export default ClientController;