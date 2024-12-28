const express = require("express")
const app = express()
require('dotenv').config()
const port = process.env.PORT ?? 3001

const data = {
    username:"Abhi",
    age:8,
    email:"temp@email.com",
    isActive:false
}
app.get("/",(req,res)=>{
    console.log(req)
    res.json({
        msg:"namaste",
        success:true
    })
})

app.get("/html",(req,res)=>{
    res.send(`
        <div>
        <button>click</button>
        <p>abhinay</p>
        </div>
    `)
})

app.get("/user",(req,res)=>{
    res.json(data)
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})