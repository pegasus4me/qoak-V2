import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { parse, UrlWithParsedQuery } from 'url';

const prisma = new PrismaClient()



export async function GET(req : Request) {
    try {
        
        const parseUrl: UrlWithParsedQuery = parse(req.url, true);
        const { query } = parseUrl;
        const { id } = query;
      

        const findById = await prisma.user.findFirst({
            where : {
                id : id as string
            }
        })

        return NextResponse.json({user : findById})


    } catch (error : any ) {
        console.error(error)
        return NextResponse.json({msg : error})
    }
} 