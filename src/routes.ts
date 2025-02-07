import { Request, Response, Router } from "express"
import ClientController from "./Controllers/ClientController"
import RaffleController from "./Controllers/RaffleController";


const router = Router();
const clientController = new ClientController();
const raffleController = new RaffleController()

router.get("/", (req: Request, res: Response) => {res.send("ok")});
router.post("/client/create", async(req: Request, res: Response) =>{await clientController.createClient(req, res)});
router.post("/raffle/create", async(req: Request, res: Response) => {await raffleController.create(req, res)});



export default router;