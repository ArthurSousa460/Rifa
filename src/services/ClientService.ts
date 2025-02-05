import ClientRepository from "../repository/ClientRepository";

class ClientService{
    private repository: ClientRepository;


    constructor(){
        this.repository = new ClientRepository();
    }

    async create(name: string, cellphone: string){
        return await this.repository.create(name, cellphone);
    }
}

export default ClientService;