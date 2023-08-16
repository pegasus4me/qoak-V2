import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
import { useRouter } from "next/router";
type Id = {
  id: string;
  community: string;
};
export async function GET(req: Request) {

   
  try {


    // => CORRIGER CE PROBLEME
    const { id, community }: { id: string; community: string } = req.query; // Utilisez req.query pour obtenir les paramètres
   
    
    const sub = await prisma.subreddit.findFirst({
      where: {
        name: community,
      },
    });

    const findUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        subscriptions: true,
      },
    });
    if (findUser) {
      const check: boolean = findUser.subscriptions.some(
        (data) => data.subredditId === sub?.id
      );
      if (check) NextResponse.json({ code: check, msg: "TRUE" });
      else NextResponse.json({ code: check, msg: "FALSE" });
    } else {
      throw new Error("not found");
    }
  } catch (error: any) {
    return NextResponse.json({ msg: error });
  }
}
