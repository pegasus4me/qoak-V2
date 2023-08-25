import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

interface Post {
    title  : string, 
    content : string,
    user : string
    name : string
}
export async function POST(req: Request){
    try {

        const {title ,content, name, user} : Post = await req.json()
      
        // recuper le subreddit dans le quel je suis => le lier au post 
       const community = await prisma.subreddit.findFirst({
        where : {
            name  : name
        }
       })
        // create new Post and save it in the database
        const createPost = await prisma.post.create({
          
            data:  {
             title : title, 
             content : content,
             author: {
                connect: {
                  id: user as string,
                },
              },
              subreddit : {
                connect : {
                    id :  community?.id
                }
              }
          } 
        })
        return NextResponse.json({statut: "ok", response : createPost})
    } catch (error : any) {
        return NextResponse.json({error : error})
    }
}

