import ClientRepository from "../repository/ClientRepository";
import RaffleRepository from "../repository/RaffleRepository";

class RaffleService{
    private raffleRespository: RaffleRepository;
    private clientRepository: ClientRepository;

    constructor(){
        this.raffleRespository = new RaffleRepository();
        this.clientRepository = new ClientRepository();
    }

    async create(idClient: number){
        const existClient = await this.clientRepository.findClientById(idClient);

        if(!existClient){
            throw new Error("Client not exist!");
        }

        return existClient;
    }
}