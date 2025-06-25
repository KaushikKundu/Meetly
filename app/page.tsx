import { PrismaClient } from "@/lib/generated/prisma";

const client = new PrismaClient();

async function getUserDetails() {
  try{
    const user = await client.user.findFirst({});
    return {
      name: user?.username || "No Name",
      password: user?.password || "No Email"
    }
  }catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }

}

export default async function App() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>{userDetails?.name}</p>
      <p>{userDetails?.password}</p>
    </div>
  );
}