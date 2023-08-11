import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

type Community = {
    commu : string, 
    id : string,
    commuId : string
}

export async function POST(req : Request) {
    if(req.method !== "POST") {
        return NextResponse.json({statut : "only post call allowed"});
    }
   
    try {
        const {commu, id}:Omit<Community, "commuId">  = await req.json()
        
        const check = await prisma.user.findFirst({
            where : {
                id : id,
            },
            include: {
                createdSubreddits: true,
            },
        })
        if(check) {
            if(check.createdSubreddits.length !== 0) {
                check.createdSubreddits.map(async(data)=> {
                    if(data.name === commu) {
                        return NextResponse.json({msg : "you are the creator of the community!"})
                    }
                })
            }
                // find subreddit concerned 
                    const findSub = await prisma.subreddit.findFirst({
                        where : {
                            name : commu
                        }
                    });
                // create a subscription
                    const create = await prisma.subscription.create({
                        data : {
                            user : {
                                set : check
                            },
                            subreddit : {
                                set : findSub
                            }
                        }
                    });
                    
                    // update user body subscriptions
                    const join_commu = await prisma.user.update({
                        where : {
                            id : id,
                        },
                        data : {
                            subscriptions : {
                                set : create
                            }
                       },
                       include: {
                        subscriptions: true,
                      },
                    })
                    return NextResponse.json({msg : 'community joined', code : join_commu})

        }
   } catch (error: any) {
        return NextResponse.json({msg : error})
   }
}