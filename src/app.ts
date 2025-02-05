// import express, { Router } from "express"
// class App {
//     public server: express.Application;
//     public router: Router;

//     constructor(router: Router){
//         this.server = express();
//         this.middleware()
//         this.router = router
//         this.setRouter(this.router)
//     }

//     private middleware(){
//         this.server.use(express.json());
//     }

//     private setRouter(router: Router){
//         this.server.use(router);
//     }
// }

// export {App};

import express from "express"
import router from "./routes";

const app = express();
app.use(express.json());
app.use(router)

export default app