const express = require("express");
const validators = require("./middlewares/validator.middleware");
const app = express();

app.use(express.json());

app.post("/register", validators.registerValidationRules, (req, res) => {
  const { username, email, password } = req.body;
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})
