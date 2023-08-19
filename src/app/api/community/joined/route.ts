import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextResponse } from "next/server";
import { parse, UrlWithParsedQuery } from "url";
type Id = {
  id: string;
  community: string;
};
export async function GET(req: Request) {
  try {
    const ParseURL: UrlWithParsedQuery = parse(req.url, true);
    const { query } = ParseURL;
    const { name, id } = query;

    const sub = await prisma.subreddit.findFirst({
      where: {
        name: name as string,
      },
    });
    const findUser = await prisma.user.findFirst({
      where: {
        id: id as string,
      },
      include: {
        subscriptions: true,
      },
    });
    console.log('sosos=>',findUser?.subscriptions);

    if (findUser?.subscriptions.length !== 0) {
      const check: boolean | undefined = findUser?.subscriptions.some(
        (data) => data.subredditId === sub?.id
      );
      if (check) {
        return NextResponse.json({ code: check, msg: "TRUE" });
      } else {
        return NextResponse.json({ code: check, msg: "FALSE" });
      } 
    } else {
      throw new Error("not found");
    }
  } catch (error: any) {
    return NextResponse.json({ msg: error });
  }
}
