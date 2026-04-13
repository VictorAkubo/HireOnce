import mongoose from "mongoose"
const MongoUri = process.env.MONGODB_URI
 const DbConnect = async ()=>{
  if(!MongoUri){
    return "no uri found"
  }
 await mongoose.connect(MongoUri)
 return mongoose
}

export default DbConnect