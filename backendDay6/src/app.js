const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();

//This is middle ware, req from post man will come to app first then it will go through this middle ware t routes

app.use((req, res, next) => {

  console.log("This is a middle ware between app and route");
  
  next(); //if we dont do next() the request from postman or user will not go forward to the routes from middleware
});

app.use("/", indexRoutes);

module.exports = app;
