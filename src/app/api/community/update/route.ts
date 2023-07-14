import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";


async function PUT(req:Request) {

    const handler:any  = req.json()
    const { username, image, id}  = handler
    try {
        const updateUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                username: username,
                image: image
            }
        })

        if(!updateUser) return NextResponse.json({statut : "user not found"})
            return NextResponse.json(updateUser)
    } catch (error : any) {
        console.log("err", error)
    }
}
