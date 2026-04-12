import mongoose from "mongoose"

const UserSchema= mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique:true
  },
  password:String
})

export default const UserModel = mongoose.Model("Users",UserSchema)