import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(res=>{
    console.log("Database connected!!");
})
.catch(err=>{
    console.log("Database is not connected!!");
})

app.use("/user",userRouter)

app.get('/test',(req,res)=>{
    res.json({message:"Hello World"})
})



const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}...`);
})