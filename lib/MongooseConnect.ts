import mongoose from "mongoose"
const MongoUri = process.env.MONGODB_URI
const DbConnect =()=>{
  if(!MongoUri){
    return "no uri found"
  }
 mongoose.connect(MongoUri)
 return mongoose
}

export default DbConnect