const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/",(req,res)=>{
    res.send("hellow world")
})

app.post("/notes",(req,res)=>{
    const {title,content} = req.body

    title.push = notes
    content.push = notes
 
    res.send("note created successfully")
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(3000,(req,res)=>{
    console.log("Server is running at port 3000")
})