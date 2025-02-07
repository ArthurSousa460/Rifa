import { PrismaClient } from "@prisma/client";

class RaffleRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }

    async create(clientId: number){
        const newRaffle = await this.repository.raffle.create({
            data:{
                clientId
            }
        })
        return newRaffle;
    }

}

export default RaffleRepository;