import mongoose from "mongoose";

const connectDB = async() => {
  try{
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connect successfully.")
  }catch(error){
    console.log(error);
  }
}

export default connectDB ; 