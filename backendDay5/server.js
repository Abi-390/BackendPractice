const express = require("express")

const connectToDb = require("./src/db/db")

const noteModel = require("./src/models/notes.model")

const app = express()

app.use(express.json())

app.post("/notes",async(req,res)=>{
    const {title,content} = req.body

    console.log(title,content)

   await noteModel.create({
        title,content
    })

    res.json({
        message:"Note created successfully"
    })
})




connectToDb()

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000 ")
})