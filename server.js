const http=require('http');
const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const app=require('./app');

const server=http.createServer(app);

server.listen(3000, async ()=>{
    console.log("Server started on port 3000");
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
})