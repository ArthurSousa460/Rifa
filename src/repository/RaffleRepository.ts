import { PrismaClient, Raffle } from "@prisma/client";

class RaffleRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }

    async list(): Promise<Raffle[]>{
        const raffles = await this.repository.raffle.findMany();
        return raffles;
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

    async update(id: string, name: string, description: string, date: Date, urlBanner: string): Promise<Raffle>{
        const updatedRaffle = await this.repository.raffle.update({
            where:{
                id
            },
            data:{
                name,
                description,
                date,
                urlBanner
            }
        })
        return updatedRaffle;
    }

    async delete(id: string): Promise<Raffle>{
        const deletedRaffle = await this.repository.raffle.delete({
            where:{
                id
            }
        })
        return deletedRaffle;
    }

}

export default RaffleRepository;