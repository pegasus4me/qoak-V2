import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET(req: Request) {
    try {
        const find = await prisma.post.findMany()
        return NextResponse.json({msg : find})
    } catch (error: any) {
        return NextResponse.json({error : error})
    }
}