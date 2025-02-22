import { App } from "./app";
import router from "./routes";



const app = new App(router);

const PORT = process.env.PORT || 3333;


app.server.listen(PORT, ()=>{
    console.log(`Server running in http://127.0.0.1:${PORT}`);
})