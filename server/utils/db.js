const mongoose=require('mongoose');
const URI=process.env.MONGODB_URI
const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log('Connection successful')
    } catch (error) {
        console.error("Connection failed");
        process.exit(0);
    }
}
module.exports=connectDb;