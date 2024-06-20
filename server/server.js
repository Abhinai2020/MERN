require('dotenv').config();
const cors=require("cors");
const express=require('express');
const app=express();
const authRoute=require('./router/auth-router');
const contactRoute=require("./router/contact_router")
const serviceRoute=require("./router/service_router")
const adminRoute=require("./router/admin_router");
const connectDb=require('./utils/db');
const errorMiddleware = require('./middleware/error_middleware');

const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credential:true,
}
app.use(cors(corsOption));
app.use(express.json());
app.use('/abhinai',authRoute)
app.use('/abhinai',contactRoute)
app.use('/abhinai',serviceRoute)
app.use('/abhinai/admin',adminRoute)
app.use(errorMiddleware)
const PORT=5000;

connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log("My server is running at port 5000")
});
});