
const mongoose=require('mongoose');
const colors=require('colors');
const connectDB=async()=>{
    try{
        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI is undefined. Please check your .env file.");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI);

        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`)
    }catch(error){
        console.log(`Mongodb Database Error ${error}`.bgRed.white)
    }
}
module.exports=connectDB;

