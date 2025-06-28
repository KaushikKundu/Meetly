import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import client  from '@/db/index';

export async function POST(req: NextRequest) {
    try{
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return new Response(JSON.stringify({ error: "Username and password are required" }), { status: 400 });
        }
        const user = await client.user.create({
            data: {
                username,
                password
            }
        })
        return NextResponse.json({
            message: "User created successfully",
            user: {
                id: user.id,
                username: user.username
            }
        }
    )
    }catch (error) {
        console.error("Error in signup route:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}