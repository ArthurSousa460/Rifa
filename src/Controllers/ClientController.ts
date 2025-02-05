import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import CreateClientDTO from "../dtos/CreateClientDTO";
import { validate } from "class-validator";
import ClientService from "../services/ClientService";

class ClientController{
    private service: ClientService;

    constructor(){
        this.service = new ClientService;
    }


    async createClient(req: Request, res: Response){
        console.log(req.body);
        const dto = plainToInstance(CreateClientDTO, req.body);
        const errors = await validate(dto);

        if(errors.length > 0){
            return res.status(400).send(errors);
        }

        const newClient = this.service.create(dto.name, dto.cellphone);

        res.status(200).send(newClient);

}

}

export default ClientController;