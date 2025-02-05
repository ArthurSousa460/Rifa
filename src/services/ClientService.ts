import ClientRepository from "../repository/ClientRepository";

class ClientService{
    private repository: ClientRepository;


    constructor(){
        this.repository = new ClientRepository();
    }

    async create(name: string, cellphone: string){

        const existCellphone = await this.repository.findClientByCellphone(cellphone);
        
        if(existCellphone){
            throw new Error(`${cellphone} already exist`);
        }

        const result = await this.repository.create(name, cellphone);

        return result
    }
}

export default ClientService;