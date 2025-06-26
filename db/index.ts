import { PrismaClient } from "@/lib/generated/prisma";

const generatePrismaClient = () => {
    return new PrismaClient();
}
declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || generatePrismaClient();
export default prisma;

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}