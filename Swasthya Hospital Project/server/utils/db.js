const mongoose = require("mongoose");
const mongodb = require("mongodb");

const URL = "mongodb://127.0.0.1:27017/HospitalWebsiteProjectDB";
// const URL = process.env.MONGODB_URI;
// var db = mongoose.connect(URL)

const connectDB = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed ");
        process.exit(0);
    }
}



module.exports=connectDB;