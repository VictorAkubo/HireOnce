import {NextResponse} from "next/server"
import {DbConnect} from "../../../lib/MongooseConnect.ts"
import UserModel from "../../../schema/Users"

export async function POST(req:Request){
  await DbConnect();
  const data = req.json();
  const {email,password} = data;
  
 const userExists = await UserModel.findOne({email})
 if(!userExists){
   NextResponse.json({message:"user do not exist"})
 }
 NextResponse.json({message:"user found"})
}