const express = require('express');
const User = require("../models/user");
const router = express.Router();
const bcrypt = require('bcrypt');

//Register
router.post("/register", async(req,res) =>{
  

    try{ 
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword
        });
        //save user and return response
        const user = await newUser.save();
        res.status(200).json({user, message:"User Successfully saved"});

    }catch(error){
        console.log(error);
        res.status(400).json({message:"User are not Registered"});

    }
});


//Login

router.post("/login", async(req,res) =>{
    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).send("user not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong password");
        res.status(200).json(user);
    }catch(error){
        console.log(error);
        res.status(400).json(error);
    }
   
});






module.exports = router;
