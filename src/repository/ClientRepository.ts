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

    async findClientById(clientId: number){
        const clientExist = this.repository.client.findFirst({
            where:{
                id: clientId
            }
        })
        return clientExist;
    }


}


export default ClientRepository