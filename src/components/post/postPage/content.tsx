"use client";
import { useEffect, useState } from "react";
import { Posts } from "../../../../lib/actions/post";
import Infos from "./infos";
import { BiComment } from "react-icons/bi";
import Voting from "./voting";
import axios, { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";

type Content = {
  content: string;
  title: string;
};

const Content = ({ id, commuName }: { id: string; commuName: string }) => {
  const [creation, setCreation] = useState<Date>(new Date());
  const [data, setData] = useState<Content[]>([]);
  const [messages, setMessages] = useState<string[]>([]);

  const { data: session } = useSession();
  const post = new Posts();

  useEffect(() => {
    fetchPost();
  }, []);


  const fetchPost = async () => {
    const res = await post.getPostbyPostId(id);
    setCreation(new Date(res.data?.data?.createdAt));

    setData([
      {
        content: res.data?.data?.content,
        title: res.data?.data?.title,
      },
    ]);

    setMessages(res.data?.data?.comments);
  };
  let fetch: string = data[0]?.content;

  return (
    <div>
      <Infos name={commuName} creationDate={creation} />
      <section className="max-w-[1000px] p-2 flex flex-col max-h-fit">
        
        {/* upvote ici aussi */}
        <div className="flex items-center gap-4">
          <Voting postId={id}/>
          <h1 className="text-2xl font-medium mb-4">{data[0]?.title}</h1>
        </div>

        <article className="p-3 mt-5">
          <div
            className="text-md"
            dangerouslySetInnerHTML={{ __html: fetch }}
          />
        </article>
        {/* comments  count */}
        <hr className="border-dotted bg-slate-200" />
        <div className="flex items-center gap-1 p-3 mt-5 opacity-50">
          <BiComment className="text-xs" />
          <p className="text-xs font-medium">{messages.length} comments</p>
        </div>

        {/* espace comments */}
      </section>
    </div>
  );
};

export default Content;
