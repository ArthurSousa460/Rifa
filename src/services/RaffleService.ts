import { Raffle } from "@prisma/client";
import ClientRepository from "../repository/ClientRepository";
import RaffleRepository from "../repository/RaffleRepository";
import CreateRaffleDTO from "../dtos/CreateRaffleDTO";

class RaffleService{
    private raffleRespository: RaffleRepository;
    private clientRepository: ClientRepository;

    constructor(){
        this.raffleRespository = new RaffleRepository();
        this.clientRepository = new ClientRepository();
    }

    async create(createRaffleDTO: CreateRaffleDTO): Promise<Raffle>{
        const newRaffle = await this.raffleRespository.create(
            createRaffleDTO.name,
            createRaffleDTO.description,
            createRaffleDTO.date,
            createRaffleDTO.urlBanner
        );
        return newRaffle;
    }
}

export default RaffleService;