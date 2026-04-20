import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect"
import PostModel from "../../../schema/Post"
 export async function POST(req:Request){
   const data = await req.json();
  await DbConnect();
  try{
    
    const {
    companyname,
    industry,
    location,
    about,
    adminComment,
    logo,
    comment,
    name,
    hiringStatus,
    locationType,
    salary,
    salaryCurrency,
    description,
    } = data;
    
    const res = await PostModel.create({
      companyname,
    industry,
    location,
    about,
    adminComment,
    logo,
    comment,
    jobs:[{
    name,
    hiringStatus,
    locationType,
    salary,
    salaryCurrency,
    description,
    }]
    
    })
  return NextResponse.json({
    message:"company and job created simultaneously",
    data:res
  },{status:200})
  }catch(error){
    return NextResponse.json({
      message:error,
    },{status:400})
  }
}