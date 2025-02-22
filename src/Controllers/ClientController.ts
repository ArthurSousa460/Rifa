import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { validate } from "class-validator";
import ClientService from "../services/ClientService";
import ClientDTO from "../dtos/ClientDTO";

class ClientController{
    private service: ClientService;

    constructor(){
        this.service = new ClientService;
    }

    async listClients(req: Request, res: Response){
        try{
            const clients = await this.service.listClients();
            return res.status(200).json(clients);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({"message": error.message});
            }
            return res.status(500).json({"message": "Internal server error"});
        }
    }

    async createClient(req: Request, res: Response){
        try{
            console.log(req.body);
            const dto = plainToInstance(ClientDTO, req.body);
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

    async updateClient(req: Request, res: Response){
        try{
            const dto = plainToInstance(ClientDTO, req.body);
            const errors = await validate(dto);
            if(errors.length > 0){
                const err = errors.map(err => ({
                    field: err.property,
                    constraints: err.constraints
                }))
                return res.status(400).json({"validation error": err});
            }
                const clientUpdated = await this.service.update(dto, req.params.id);
                return res.status(200).json(clientUpdated);
            }catch(erro){
                if(erro instanceof Error){
                    return res.status(400).json({"message": erro.message});
                }
                return res.status(500).json({"message": "Internal server error"});
            }
}

    async deleteClient(req: Request, res: Response){
        try{
            const clientDeleted = await this.service.delete(req.params.id);
            return res.status(200).json({message: "Client deleted"});
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({"message": error.message});
            }
            return res.status(500).json({"message": "Internal server error"});
        }
    }
}

export default ClientController;