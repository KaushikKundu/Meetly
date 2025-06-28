import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prisma  from '@/db/index';

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return new Response(JSON.stringify({ error: "Username and password are required" }), { status: 400 });
        }
      const existingUser = await prisma.user.findUnique({
            where: {
                username: username,
                password: password 
            }
        });

        if (!existingUser) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }
       
        return NextResponse.json({
            message: "User logged in successfully",
            
        }
        )
    }catch (error) {
        console.error("Error in signin route:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}