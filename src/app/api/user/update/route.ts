import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type User = {
    email  : string,
    username   : string,
    image  : string
}

export async function PUT(req: Request) {
    
    try {
        const { username, image, email} : User = await req.json();
        const updateUser = await prisma.user.update({
            
            where : {
                email : email,
            }, 
            data : {
                username : username,
                image : image
            }
        })
        return NextResponse.json({statut : "user updated succesfully", user : updateUser})
    } catch (error) {
        return NextResponse.json({statut : "error", error : error})
    }
}