import { App } from "./app";
import router from "./routes";

const PORT = process.env.PORT || 3333;
const server = new App(router);

server.server.listen(PORT, () =>{
    console.log(`Server runnig ao http://127.0.0.1:${PORT}`);
})