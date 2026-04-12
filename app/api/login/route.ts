import {NextResponse} from "next/server"
import DbConnect from "@/lib/MongooseConnect.ts"
import UserModel from "@/schema/Users"
let users = [
  {
    id: 1,
    name: "Victor Akubo",
    email: "victor.akubo@example.com",
    password: "password123"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    password: "securePass456"
  },
  {
    id: 3,
    name: "David Lee",
    email: "david.lee@example.com",
    password: "myPassword789"
  },
  {
    id: 4,
    name: "Amaka Okafor",
    email: "amaka.okafor@example.com",
    password: "passWord321"
  }
];

export function GET(){
  return NextResponse.json({data:users})
}

export async function POST(req:Request){
  await DbConnect()
  const data = await req.json()
  const {email,name,password} = data;
  const newUser = await UserModel.create({email,name,password})
  users = [...users, {email,name,password}]
  return NextResponse.json({data:users})
}

export async function PUT(req:Request){
  const data = await req.json()
  const {email,password} = data;
  
  users = users.map(user=>{
    if(email === user.email){
      return {...user,email,password,}
    }else {  
      return user 
    }
  })
  return NextResponse.json({message:"password changed successfully",
    data:users
  })
}
