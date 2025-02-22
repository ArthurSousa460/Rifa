import { PrismaClient, Raffle } from "@prisma/client";

class RaffleRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }

    async create(name: string, description: string, date: Date, urlBanner: string): Promise<Raffle>{
        const newRaffle = await this.repository.raffle.create({
            data:{
                name,
                description,
                date,
                urlBanner
            }
        })
        return newRaffle;
    }

}

export default RaffleRepository;