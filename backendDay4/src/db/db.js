const mongoose = require("mongoose")



function connectToDb(){

mongoose.connect("mongodb+srv://dekaabinash07_db_user:*****@cluster0.brdptzt.mongodb.net/").then(()=>{
    console.log("connected to DB")
})

}

module.exports = connectToDb