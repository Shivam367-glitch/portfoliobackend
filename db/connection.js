const mongoose = require("mongoose");
require('dotenv').config()
const DB =process.env.DATABASE;


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("connected to database......... let do it")).catch((err) => {
    console.log("not connected.....");
    console.log(err.message);
}) 
