import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { parse, UrlWithParsedQuery } from 'url';

const prisma = new PrismaClient()



export async function GET(request : Request){
    try {
        const parseUrl: UrlWithParsedQuery = parse(request.url, true);
        const { query } = parseUrl;
        const { email } = query;

        const find_user = await prisma.user.findFirst({
            where: {
                email : email as string,
            },
            include: {
                createdSubreddits: true, 
                subscriptions: true 
                
            }
        })
        if(find_user?.email !== email ) return NextResponse.json({statut : "user not found"})
        return NextResponse.json({user : find_user})
    
    } catch (error: any) {
        console.log('ddd',error)
        return NextResponse.json({statut : "error", error : error})
    }
}