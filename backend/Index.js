import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(res=>{
    console.log("Database connected!!");
})
.catch(err=>{
    console.log("Database us not connected!!");
})


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}...`);
})