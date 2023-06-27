
//helmet help us to protect the express server by setting up various http headers. 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require("helmet");
const morgan = require('morgan');
require('dotenv').config();
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')


//The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.set('strictQuery', false);
const connectDB = async() =>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,

        })
        console.log(`MongoDB connected: ${con.connection.host}`);
        
    }catch(error){
        console.log(error);
        process.exit(1);

    }
}
connectDB();


app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)




app.listen(process.env.PORT, () =>{
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
})


