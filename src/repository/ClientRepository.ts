import { PrismaClient, Client } from "@prisma/client"

class ClientRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }


    async create(name: string, cellphone:string): Promise<Client>{
        const newClient = await this.repository.client.create({
            data:{
                name,
                cellphone
            }
        })
        return newClient;
    }

    async findClientByCellphone(cellphone: string): Promise< Client | null> {
        const existCellphone = this.repository.client.findFirst({
            where:{
                cellphone: cellphone
            }
        })
        return existCellphone;
    }


}


export default ClientRepository