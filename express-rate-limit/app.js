const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

//app.use(limiter) this can be used in application level also or can be used in specific api route also

const limiter = rateLimit({
  window: 1 * 60 * 1000, // 1 min
  max: 100, // maximum 100 requests in 1 min
  message: "Too many request from this IP, please try again after a minute",
});

app.post("/api/auth/register",limiter, (req, res) => {
  res.status(201).json({
    message: "User registered successfuly",
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
