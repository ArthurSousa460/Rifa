import ClientDTO from "../dtos/ClientDTO";
import ClientRepository from "../repository/ClientRepository";

class ClientService{
    private repository: ClientRepository;


    constructor(){
        this.repository = new ClientRepository();
    }

    async create(name: string, cellphone: string): Promise<ClientType>{

        const existCellphone = await this.repository.findClientByCellphone(cellphone);
        
        if(existCellphone){
            throw new Error(`${cellphone} already exist`);
        }

        const result = await this.repository.create(name, cellphone);

        return result
    }

    async listClients(): Promise<ClientType[]>{
        const result = await this.repository.listClients();
        return result;
    }

    async update(clientDTO: ClientDTO, id: string): Promise<ClientType>{
        const existCellphone = await this.repository.findClientById(id);
        const existClient = await this.repository.findClientByCellphone(clientDTO.cellphone);

        if(!existClient){
            throw new Error(`Client with id ${id} not found`);
        }

        if(existCellphone && existCellphone.id !== id){
            throw new Error(`${clientDTO.cellphone} already exist`);
        }

        const clientUpdated = await this.repository.update(clientDTO, id);

        return {
            id: clientUpdated.id,
            name: clientUpdated.name,
            cellphone: clientUpdated.cellphone
        };
    }

    async delete(id: string): Promise<void>{
        const existClient = await this.repository.findClientById(id);

        if(!existClient){
            throw new Error(`Client with id ${id} not found`);
        }

        const clientDeleted = await this.repository.delete(id);
    }


}

export default ClientService;