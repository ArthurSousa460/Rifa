import { PrismaClient } from "@prisma/client"

class ClientRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }


    async create(name: string, cellphone:string){
        return await this.repository.client.create({
            data:{
                name,
                cellphone
            }
        })
    }

}


export default ClientRepository