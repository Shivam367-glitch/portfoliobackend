const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    require: true,
    trim: true,
  },
  LastName: {
    type: String,
    require: true,
    trim: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) { 
        console.log(value);
        throw new Error("Invalid Email");
      }
    } 
  }, 
    Phone:{ 
        type:Number, 
    }, 
    Message:[]
}); 
userSchema.methods.MessageSave=async function (message) {
  try {
    this.Message=this.Message.concat({message})  
    await this.save();
    return message;
  } catch (error) {
    console.log(error);
  }
}


//create model 
const users= new mongoose.model("users",userSchema); 

module.exports=users;
