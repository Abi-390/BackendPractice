const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://dekaabinash07_db_user:eYOSi1nMoF15iaOH@cluster0.brdptzt.mongodb.net/Practice").then(()=>{
        console.log("Connected to db")
    })
}

module.exports = connectToDb