import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect"
import PostModel from "../../../schema/Post"
export async function GET() {
  try{
    await DbConnect();
    const res = await PostModel.find()
  return NextResponse.json({
    message:"data fetched",
    data:res
  },{status:200})
  }catch(error){
    return NextResponse.json({
    message:"data not fetched",
    data:error
  },{status:400})
  }
}