import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { userInfos } from "../../../../../lib/actions/user";

const prisma = new PrismaClient()

type Name = { subqoakName : string, id : string}
export async function POST (req : Request) {
    
    if(req.method !== "POST") {
        return NextResponse.json({statut : "only post call allowed"});
    }

    try {
        
        const sender = await req.json();
        const {subqoakName, id}:Name = sender;
        
        if(subqoakName === undefined) {
            return NextResponse.json({error : "nom de communauté invalide"})
        }

        // verify if community exist already or not
        const check = await prisma.subreddit.findFirst({
            where : {
                name : subqoakName,
            }
        })
        if(check) return NextResponse.json({msg : "community already exist"})
        
        // add new community to the db 
        const save = await prisma.subreddit.create({
            data : {
                creatorId : id,
                name : subqoakName
            }
        })

        const save_user = await prisma.user.update({
            where : {
                id : id,
            },
           data : {

                createdSubreddits : {
                    set : save,
                }
           }
        })
        
        return NextResponse.json({statut : 200, msg : save, user : save_user})
    } catch (error : any) {
        console.log('erreur zebi', error)
        return error
    }
}