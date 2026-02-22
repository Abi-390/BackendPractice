const mongoose = require("mongoose");


async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to db")
        
    } catch (error) {
        console.log("Error connecting to DB",error)
    }
}

module.exports = connectToDb;