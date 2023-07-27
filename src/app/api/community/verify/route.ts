import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET(){
    try {
        const commus = await prisma.subreddit.findMany();
        console.log('dddd',commus)
        return NextResponse.json({msg : commus})
    } catch (error : any) {
        return error
    }
}