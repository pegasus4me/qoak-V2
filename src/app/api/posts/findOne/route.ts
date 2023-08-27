import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { parse, UrlWithParsedQuery } from "url";

const prisma  = new PrismaClient()

export async function GET(req: Request){
    try {
        
        const ParseURL: UrlWithParsedQuery = parse(req.url, true);
        const { query } = ParseURL;
        const { id } = query;

        const findOnePost = await prisma.post.findFirst({
            where : {
                id : id as string
            },
            include : {
                comments: true, 
                votes : true
            }
            
        })

        if(findOnePost) {
            return NextResponse.json({msg : 'ok', data : findOnePost})
        } else {
            return NextResponse.json({msg : 'post not found'})
        }
    } catch (error : any) {
        return NextResponse.json({msg : error})
    }
}
