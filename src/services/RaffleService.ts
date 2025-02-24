import { Raffle } from "@prisma/client";
import RaffleRepository from "../repository/RaffleRepository";
import RaffleDTO from "../dtos/RaffleDTO";

class RaffleService{
    private raffleRespository: RaffleRepository;


    constructor(){
        this.raffleRespository = new RaffleRepository();
    }

    
    async list(): Promise<Raffle[]>{
        const raffles = await this.raffleRespository.list();
        return raffles;
    }

    async create(raffleDTO: RaffleDTO): Promise<Raffle>{
        const newRaffle = await this.raffleRespository.create(
            raffleDTO.name,
            raffleDTO.description,
            raffleDTO.date,
            raffleDTO.urlBanner
        );
        return newRaffle;
    }

    async update(id: string, raffleDTO: RaffleDTO): Promise<Raffle>{
        const updatedRaffle = await this.raffleRespository.update(
            id,
            raffleDTO.name,
            raffleDTO.description,
            raffleDTO.date,
            raffleDTO.urlBanner
        );
        return updatedRaffle;
    }

    async delete(id: string): Promise<Raffle>{
        const deletedRaffle = await this.raffleRespository.delete(id);
        return deletedRaffle;
    }
    
}

export default RaffleService;