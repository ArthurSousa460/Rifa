import { Request, Response, Router } from "express"
import ClientController from "./Controllers/ClientController"


const router = Router();
const clientController = new ClientController();

router.get("/", (req: Request, res: Response) => {res.send("ok")});
router.post("/client/create", async(req: Request, res: Response) =>{await clientController.createClient(req, res)});




export default router;