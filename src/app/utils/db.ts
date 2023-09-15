import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
}
// for HMR issues 
const client = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV != "production"){
    globalThis.prisma = client;
}

export {client as db};