import express, { Router } from "express"
class App {
    public server: express.Application;
    public router: Router;

    constructor(router: Router){
        this.server = express();
        this.middleware()
        this.router = router
        this.setRouter(this.router)
    }

    private middleware(){
        this.server.use(express.json());
    }

    private setRouter(router: Router){
        this.server.use(router);
    }
}

export {App};