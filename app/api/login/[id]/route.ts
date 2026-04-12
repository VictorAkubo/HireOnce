import { NextResponse } from "next/server";

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

export async function DELETE(req,Request, {params}){
  const {id} = await params
  users = users.filter(user=>user.id != parseInt(id))
  return NextResponse.json({
    message:`user with id ${id} deleted`
  })
}

/*
export async function DELETE(req, { params }) {
  const { id } = await params;
  users = users.filter(u => u.id !== parseInt(id));
  return Response.json({ message: `User ${id} gone!` });
}*/
/*
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } =await params;

  users = users.filter(u => u.id !== parseInt(id));

  return NextResponse.json({ message: `User ${id} gone!` });
}*/