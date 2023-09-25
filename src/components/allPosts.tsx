"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PostStructure from "./post/post.structure";
import { Posts } from "../../lib/actions/post";

type Data = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updateAt: Date;
  subredditId: string;
  authorId: string;
};
type userData ={
  email: string,
  emailVerified: string,
  hashedPassword : string,
  id: string,
  image: string,
  name: string,
  username: string
}

const AllPosts = () => {
  
  const [data, setData] = useState<Data[]>([]);
  
  const post = new Posts();

  useEffect(() => {
   set()
  }, []);

  const set = async() => {
    const allPosts = await post.getAllPosts()
    setData(allPosts.data.msg)
  }
  
  const findUserById = async(id : string) : Promise<string | undefined> => {
    try {
      const res = await axios.get("/api/user/findById", {
        params : {
          id : id
        }
      })

      const user:string =  res.data.user.name
      return user;
    } catch (error : any) {
      return error
    }
  }
  
  return <>
  
  {data.length !== 0 ? <>
    {data.map((item)=>{
        const {id, title, content, authorId, subredditId, createdAt} = item;
        return <PostStructure 
            postId={id}
            title={title}
            content={content}
            creator={() => findUserById(authorId)}
            date={createdAt}
            subreddit={subredditId}
          />
    })}

  </> : <p className="text-center text-lg text-slate-500">loading...</p>}</>;
};

export default AllPosts;
