import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
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

app.use("/user",userRouter);
app.use("/auth",authRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}...`);
})