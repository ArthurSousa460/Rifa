import { PrismaClient, Client } from "@prisma/client"
import ClientDTO from "../dtos/ClientDTO";

class ClientRepository{
    private repository: PrismaClient;


    constructor(){
        this.repository = new PrismaClient();
    }

    async listClients(): Promise<Client[]>{
        const clients = await this.repository.client.findMany();
        return clients;
    };

    async create(name: string, cellphone:string): Promise<Client>{
        const newClient = await this.repository.client.create({
            data:{
                name,
                cellphone
            }
        })
        return newClient;
    };

    async update(CreateClientDTO: ClientDTO, id: string): Promise<Client>{
        const updatedClient = await this.repository.client.update({
            where:{
                id
            },
            data:{
                name: CreateClientDTO.name,
                cellphone: CreateClientDTO.cellphone
            }
        })
        return updatedClient;
    }

    async delete(id: string): Promise<Client>{
        const deletedClient = await this.repository.client.delete({
            where:{
                id
            }
        })
        return deletedClient;
    }

    async findClientByCellphone(cellphone: string): Promise< Client | null> {
        const existCellphone = this.repository.client.findFirst({
            where:{
                cellphone: cellphone
            }
        })
        return existCellphone;
    }

    async findClientById(clientId: string): Promise<Client | null> {
        const clientExist = this.repository.client.findFirst({
            where:{
                id: clientId
            }
        })
        return clientExist;
    }


}


export default ClientRepository