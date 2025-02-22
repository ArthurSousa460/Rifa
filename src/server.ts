import { app } from "./app";


const PORT = process.env.PORT || 3333;



app.listen(PORT, ()=>{
    console.log(`Server running in http://127.0.0.1:${PORT}`);
})