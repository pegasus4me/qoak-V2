import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
// route trigger dans la dynamic URL
// le user clique sur join la commu et ça ajoute le id + le nom de la communité join 
// dans la reponse dans le header
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
        // recuperer le nom de la communité ou id + id de l'user qui a cliqué ()
        const {commu, id}:Omit<Community, "commuId">  = await req.json()

        const check = await prisma.user.findFirst({
            where : {
                id : id,
            },
            include: {
                createdSubreddits: true, // Inclure les sous-reddits créés dans la réponse
            },
        })
        if(check) {
             check.createdSubreddits.map((data)=> {
                if(data.name === commu) {
                    console.log('nom deja existant')
                    return NextResponse.json({msg : "you are the creator of the community!"})
                } else {
                    const join_commu = await prisma.user.update({
                        data : {
                            subscriptions : {
                                set : commu,
                            }
                       },
                       include: {
                        subscriptions: true, // Inclure les sous-reddits créés dans la réponse
                      },
                    })
                    return NextResponse.json({msg : 'community joined', code : join_commu})

                }
            })
        }

   } catch (error: any) {
    console.log('erreur join community', error)
   }
}