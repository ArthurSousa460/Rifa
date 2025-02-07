import { plainToInstance } from "class-transformer";
import RaffleService from "../services/RaffleService";
import CreateRaffleDTO from "../dtos/CreateRaffleDTO";
import { Request, Response } from "express";
import { validate } from "class-validator";

class RaffleController{
    private service: RaffleService;

    constructor(){
        this.service = new RaffleService();
    }


    async create(req: Request, res: Response){
        try{
            const dto = plainToInstance(CreateRaffleDTO, req.body);
            const errors = await validate(dto);

            if(errors.length > 0){
                const err = errors.map(err => ({
                    field: err.property,
                    constraints: err.constraints
                }))
                return res.status(400).json({"validation error": err});
            }

            const newRaffle = await this.service.create(dto.clientId);
            return res.status(201).json(newRaffle);
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({"message": error.message});
            }
            return res.status(500).json({"message": "internal server error"});
        }
    }
}

export default RaffleController;