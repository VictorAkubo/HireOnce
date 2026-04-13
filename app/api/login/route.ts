import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect.ts"
import UserModel from "../../../schema/Users"

export async function POST(req:Request){
  await DbConnect();
  const data = await req.json();
  const {email,password} = data;
  
 const userExists = await UserModel.findOne({email})
   if(!userExists){
   return NextResponse.json({error:`user ${email} do not exist`})
 }
  try{
    if(userExists.password == password){
    return NextResponse.json({message:"user logged in"})
    }else{
      return NextResponse.json({message:"wrong password"})
    }
  }catch(error){
    return NextResponse.json({message:"server error"})
  }
  
}