const User = require("../models/user_model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var crypto = require("crypto");
var nodemailer = require('nodemailer');
const {sendPasswordResetEmail} = require("../utils/sendEmail");
const Token = require("../models/Token");


const home = async ( req, res)=>{
    try {
        res.status(200).send("Welcome to world route")
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res)=>{
    try {
        const {username, email, phone, address, password} = req.body;
        console.log(req.body);
        const userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({message:"Email already exists"});
        }
        
        
        const userCreated = await User.create({username, email, phone, address, password});

        res.status(201).json({msg : userCreated,
             token: await userCreated.generateToken(), 
             userId:userCreated._id.toString(),  
        });
        // res.status(200).render("register.ejs");
    } catch (error) {
        res.status(400).send({message:"page not found"});
    }
};

// user Registration Steps :
// 1. Get registration data : retrieve user data (username, email, password)
// 2. check email existance : check if the email is already registered 
// 3. hash password : Securely hash password
// 4. create user : create a new user with hashed password
// 5. save to db : save user data to the database
// 6. responds : responds with registration successful or handle errors



// User Login Logic

const login = async (req, res)=>{
    try { 
        const {email, password} = req.body;
        const userExists = await User.findOne({email});

        if(!userExists){ 
            res.status(400).send({message:"Invalid Email or password!"});
        }

        // const user = await bcrypt.compare(password, userExists.password);
        const user = await userExists.comparePassword(password);

        if(user){
            res.status(200).json({
                message : "Login Successful",
                token: await userExists.generateToken(), 
                userId:userExists._id.toString(), 
            });

        }else{
            res.status(401).json({message : "Invalid email or password"})
        }

    } catch (error) {
        res.status(500).send({message:"page not found"});
    }
}

const generateToken = () => {
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
};


const forgotPassword = async(req, res)=>{
    
        try {
        const { email } = req.body;
        const user = await User.find({ email:email });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }

        const token = generateToken();
        const data1 = await Token.create({ userId: user[0]._id, token });
         await sendPasswordResetEmail(email, token);
        // res.status(200).json({ message: 'Password reset email sent successfully' });
        res.send(email, token)

    } catch (error) {
        res.status(500).send({message:"Internal Server Error"});
    }        
}

const resetPassword = async(req, res)=>{
        try {
            const users = await User.findById(req.params.userId);
            if(!users){
                return res.status(400).json({message: "Invalid link or expired"});
            }

            const token = await Token.findOne({
                token : req.params.token,
                userId : req.params.userId,
            });

            if(!token){
                return res.status(400).json({message: "Invalid link or expired"});
            }

            user.password = req.body.password;
            await user.save();
            await token.delete();
            return res.status(200).json({message: "Password reset successfully"});
            
        } catch (error) {
            res.send("An error occurred");
            console.log(error);
        }
}

// to send user data User Logic

const user = async( req, res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from the user route ${error}`);
    }
}




module.exports = {home, register, login, user, forgotPassword, resetPassword};