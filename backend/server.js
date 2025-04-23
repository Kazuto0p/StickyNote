import express from "express";
import path ,{ dirname,join} from 'path'
import url from 'url'
import connection from "./connection.js";

const app = express()

const port = 3000;


const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

app.use(express.json())
app.use(express.static(path.join(__dirname,"..","frontend")))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
})


connection().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`)
    })
}).catch((error)=>{
    console.log(error);
})
