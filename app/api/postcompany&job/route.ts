import {NextResponse} from "next/server"
import DbConnect from "../../../lib/MongooseConnect"
import PostModel from "../../../schema/Users"
 export async function POST(req:Request){
  await DbConnect();
  try{
    const data = req.json();
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
    name,
    hiringStatus,
    locationType,
    salary,
    salaryCurrency,
    description,
    })
  return NextResponse.json({
    status:200,
    message:"company and job created simultaneously",
    data:res
  })
  }catch(error){
    return NextResponse.json({
      status:400,
      message:"unable to create company and job"
    })
  }
}