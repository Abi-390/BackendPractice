const express = require("express");

const app =express();

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})

app.listen(3000,()=>{
    console.log("Server chal gaya 3000 port mai")
})
