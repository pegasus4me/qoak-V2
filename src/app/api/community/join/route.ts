import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

type Community = {
  commu: string;
  id: string;
  commuId: string;
};

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ statut: "only post call allowed" });
  }

  try {
    const { commu, id }: Omit<Community, "commuId"> = await req.json();

    const check = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        createdSubreddits: true,
        subscriptions: true,
      },
    });

    if (check) {
      if (check.createdSubreddits.length !== 0) {
        check.createdSubreddits.map(async (data) => {
          if (data.name === commu) {
            throw new Error('you are the creator of this community')
          }
        });
      }

      // find subreddit concerned
      const findSub = await prisma.subreddit.findFirst({
        where: {
          name: commu,
        },
      });
      //  check if the user is already a subscriber of this community
      if (check.subscriptions.length !== 0) {
        const alreadyIn = check.subscriptions.some(subs => subs.subredditId === findSub?.id);
        if(alreadyIn) throw new Error('deja abboné')
      }
      // create a subscription
      const create = await prisma.subscription.create({
        data: {
          user: {
            connect: {
              id: id as string,
            },
          },
          subreddit: {
            connect: {
              id: findSub?.id as string,
            },
          },
        },
      });
     
      // update user body subscriptions
      const join_commu = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          subscriptions: {
            connect: { 
                id :create.id
            },
          },
        },

        include: {
          subscriptions: true,
        },
      });
      
      return NextResponse.json({
        statut: 200,
        msg: "community joined",
        code: join_commu,
      });
    }
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ msg: error });
  }
}
