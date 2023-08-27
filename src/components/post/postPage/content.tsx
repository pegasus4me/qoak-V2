"use client";
import { useEffect, useState } from "react";
import { Posts } from "../../../../lib/actions/post";
import Infos from "./infos";
import { BiComment } from "react-icons/bi";
import Voting from "./voting";

type Content = {
  content: string;
  title: string;
};
const Content = ({ id, commuName }: { id: string; commuName: string }) => {
  const [creation, setCreation] = useState<Date>(new Date());
  const [data, setData] = useState<Content[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
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
      <section className="max-w-[60%] p-2 flex flex-col max-h-fit">
        {/* upvote ici aussi */}
        <div className="flex border items-center gap-2">
            <Voting/>   // ajouter les props up dawn et le count
            <h1 className="text-2xl font-medium mb-4">{data[0]?.title}</h1>
        </div>
        <article>
          <div
            className="text-md"
            dangerouslySetInnerHTML={{ __html: fetch }}
          />
        </article>
        {/* comments  count */}
        <div className="flex items-center gap-1">
          <BiComment className="text-xs" />
          <p className="text-xs font-medium">{messages.length} comments</p>
        </div>

        {/* espace comments */}
      </section>
    </div>
  );
};

export default Content;
