import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/index";

export async function POST(request: NextRequest){
    const body = await request.json();
    const { username, password } = body;
    const user = await prisma.user.create({
        data:{
            username,
            password
        }
    })
    console.log(user.id);
    return NextResponse.json({
        username,
        password 
    })
}