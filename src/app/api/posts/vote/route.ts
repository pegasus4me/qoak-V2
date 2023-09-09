import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { EnumType } from "typescript";

const prisma = new PrismaClient()

type Data = {
    type: "UP" | "DOWN",
    postId: string,
    userId: string
}


export const POST = async (req: Request) => {



    try {

        const { type, postId, userId }: Data = await req.json();
        // passer postid et userid en + du front

        const addCount = await prisma.vote.create({
            

            data : {
                type,

                user : {
                    connect: {
                        id: userId as string,
                      },
                },
                post : {
                    connect : {
                        id: postId
                    }
                }
            }
        })

        return NextResponse.json({msg : addCount})

    } catch (error: any) {
        console.log('error', error)
        return NextResponse.json({msg : error})
    }
}

