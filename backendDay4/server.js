const express = require("express");

const connectToDb = require("./src/db/db");

connectToDb();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow world");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title,content)
});


app.listen(3000, (req, res) => {
  console.log("Server is running at port 3000");
});
