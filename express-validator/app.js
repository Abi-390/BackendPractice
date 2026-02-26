const express = require("express");
const validators = require("./middlewares/validator.middleware");
const app = express();

app.use(express.json());

app.post("/register", validators.registerValidationRules, (req, res) => {
  const { username, email, password } = req.body;
});

module.exports = app;
