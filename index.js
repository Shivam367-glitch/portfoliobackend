const express=require('express');  
const app=express();   
require("dotenv").config();
const cors = require('cors'); 
require("./db/connection")
const router=require('./Routes/router')
const PORT=process.env.PORT || 5000;


app.use(cors());
app.use(express.json());// we recive data from backend as json

// all api are on router page 
app.use(router);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}
app.listen(PORT,(req,res)=>{ 
    console.log(`Listening......................${PORT}`);
})