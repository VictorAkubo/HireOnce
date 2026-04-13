import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect.ts"
import UserModel from "../../../schema/Users"


export async function GET(){
  await DbConnect()
  const allUsers = await UserModel.find()
  return NextResponse.json({data:allUsers})
}

export async function POST(req:Request){
  await DbConnect()
  const data = await req.json()
  const {email,name,password} = data;
  const newUser = await UserModel.create({email,name,password})
  return NextResponse.json({
    message:"created successfully",
    data:newUser
  })
}

export async function PUT(req:Request){
  await DbConnect();
  const data = await req.json()
  const {email,name,password} = data;
  const updatedUser = await UserModel.findOneAndUpdate({email},{name,password})
  return NextResponse.json({message:"password changed successfully",
    data:updatedUser
  })
}
