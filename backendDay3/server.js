const express = require("express");

const app = express();

app.get("/notes",(req,res)=>{
    res.send("Notes")
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})