"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PostStructure from "./post/post.structure";

type Data = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updateAt: Date;
  subredditId: string;
  authorId: string;
};

const AllPosts = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let res = await axios.get("/api/posts/findAll");
      setData(res.data.msg);
    } catch (error: any) {
      console.error(error);
    }
  };

  return <>
  
  {data.length !== 0 ? <>
    {data.map((post) => {
        return <PostStructure 
            content={post.content.slice(0,400)} 
            title={post.title}
            date={new Date(post.createdAt)}
            postId={post.id}
            creator={post.authorId}
            
        />
    })}

  </> : <p className="text-center text-lg text-slate-500">loading...</p>}</>;
};

export default AllPosts;
