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
        try{

            const dto = plainToInstance(CreateClientDTO, req.body);
            const errors = await validate(dto);

            if(errors.length > 0){
                const err = errors.map(err => ({
                    field: err.property,
                    constraints: err.constraints
                }))
                return res.status(400).json({"validation error": err});
            }

            const newClient = await this.service.create(dto.name, dto.cellphone);

            return res.status(201).json(newClient);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({"message": error.message});
            }
            return res.status(500).json({"message": "Internal server error"});
        }

}

}

export default ClientController;