import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect"
import PostModel from "../../../schema/Post"

export async function POST(req:Request){
  await DbConnect()
  const data = await req.json();
  const {
    companyname,
    industry,
    location,
    about,
    adminComment,
    logo,
    comment,
  } = data;
  
  try{
    const res = await PostModel.create({
      companyname,
      industry,
    location,
    about,
    adminComment,
    logo,
    comment,
    })
    return NextResponse.json({
      status:200,
      message:res
    },{status:200})
  }catch(error){
    return NextResponse.jso({status:400,message:error},{status:400})
  }
}