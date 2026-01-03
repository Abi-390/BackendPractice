const express = require("express");

const userModel = require("../models/user.model");

const router = express.Router();

const jwt = require("jsonwebtoken");

router.use(express.json());

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

 
  const user = await userModel.create({
    username,
    password,
  });

   const token = jwt.sign({
    id:user._id
  },process.env.JWT_TOKEN)


  res.status(201).json({
    message: "user created successfully",user,token
  });
});

router.post('/login',async(req,res)=>{
    const {username,password} = req.body;

    const isUserExist = await userModel.findOne({
        username:username
    })

    if(!isUserExist){
       return res.status(401).json({
            message:"Invalid username,user doesnt exist"
        })
    }
    const isPasswordValid = password == isUserExist.password;
    
    if(!isPasswordValid){
       return res.status(401).json({
            message:"Invalid password"
        })
    }

    res.status(200).json({
        message:"User logged in successfully"
    })

})

router.get("/user",(req,res)=>{
  const {token} = req.body;
 
  if(!token){
    res.status(401).json({
      message:"Unauthorized"
    })
  }

   try{const decoded =jwt.verify(token,process.env.JWT_TOKEN);
  res.send(decoded)}
  catch(err){
    return res.status(401).json({
      message:"Invalid token"
    })
  }
})

module.exports = router;
