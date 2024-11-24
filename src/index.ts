import express from "express"
import cors  from "cors"
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({origin: "*"}))

app.get("/",(req,res)=>{
 res.json("welcome to deployed express typescripr root route")
})

app.get("/homepage",(req,res)=>{
 res.send("<h3 style=\"background-color: orange;\">welcome to deployed express typescripr root route</h3>")
})


app.listen(PORT,()=>{
 console.log(`server started on port: ${PORT}`);
 
})