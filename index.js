require('dotenv').config(); 

const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const bodyParser=require("body-parser");
const colors=require("colors");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const authRoutes=require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app=express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler);
const PORT=process.env.PORT||8080;
//api routes
app.use("/api/v1/auth",authRoutes);
app.listen(8080,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on ${PORT}`);
});