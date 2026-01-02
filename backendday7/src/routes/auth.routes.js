const express = require("express");

const userModel = require("../models/user.model");

const router = express.Router();

router.use(express.json());

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: "user created successfully",user
  });
});

router.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    const isUserExist = await userModel.findOne({
        username:username
    })

    if(!isUserExist){
        res.status(401).json({
            message:"Invalid username,user doesnt exist"
        })
    }
    const isPasswordValid = password == isUserExist.password;
    
    if(!isPasswordValid){
        res.status(401).json({
            message:"Invalid password"
        })
    }

    res.status(200).json({
        message:"User logged in successfully"
    })

})

module.exports = router;
