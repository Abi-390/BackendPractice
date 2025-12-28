const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected to database")
    }).catch((err)=>{
        console.error("Errror connecting to Mongodb",err)
    })
}

module.exports = connectToDb