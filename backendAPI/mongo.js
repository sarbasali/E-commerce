// const mongoose=require("mongoose");
const  mongoose  = require("mongoose")
const connection = mongoose.model(
    "",
    new mongoose.Schema({
        name: String,
        model:String,
        year:String,
        color: String,
        email:String,
        pass:String
    }),
    "clothApi"
);
module.exports=connection