
import prisma from "@/db/index";

export async function GET() {
    const user = await prisma.user.findFirst({});
    return Response.json({
        username: user?.username,
        email: user?.email,
        message: "User fetched successfully"
    })
}