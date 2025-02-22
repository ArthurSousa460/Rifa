import { Request, Response, Router } from "express"
import ClientController from "./Controllers/ClientController"
import RaffleController from "./Controllers/RaffleController";


const router = Router();
const clientController = new ClientController();
const raffleController = new RaffleController()

router.get("/", (req: Request, res: Response) => {res.send("ok")});
router.get("/client/list", async(req: Request, res: Response) => {await clientController.listClients(req, res)});
router.post("/client/create", async(req: Request, res: Response) =>{await clientController.createClient(req, res)});
router.put("/client/update/:id", async(req: Request, res: Response) => {await clientController.updateClient(req, res)});
router.delete("/client/delete/:id", async(req: Request, res: Response) => {await clientController.deleteClient(req, res)});
router.post("/raffle/create", async(req: Request, res: Response) => {await raffleController.create(req, res)});



export default router;