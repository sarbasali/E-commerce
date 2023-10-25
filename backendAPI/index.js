const express=require("express");
const mongoose=require("mongoose");
const app = express();
const api = require('./mongo')
const cors = require('cors')


mongoose.connect("mongodb://localhost:27017/ecomApi").then(()=>{
    app.listen(3000,()=>{
        console.log("listening");
    })
})

app.use(cors({
    credentials:true,
    origin:'*'
}))


app.use(express.json());
app.get("/api", async(req,res)=>{
    const products=await api.find();
    res.send(products)
})
