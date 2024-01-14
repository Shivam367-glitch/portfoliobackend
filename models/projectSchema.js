const mongoose = require("mongoose");

const projectSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true, 
        trim:true
    },
    Github:{
        type:String,
        require:true, 
        trim:true
    },
    Live:{
        type:String,
        require:true, 
        trim:true
    },
    imageSrc:{
        type:String,
        require:true, 
        trim:true
    }
}); 

const projects= new mongoose.model("projects",projectSchema); 
module.exports=projects;