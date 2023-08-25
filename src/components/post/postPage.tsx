"use client";
import { FC } from "react";
import React,{useEffect} from "react";
import { BsMagic } from "react-icons/bs";
import Conditions from "./conditions";
import Editor from "./editor";
import Link from "next/link";

const PostPage: FC<{commuinyName : string}> = ({commuinyName}) => {
   
    return (
    <div className="">
        <div className="p-1">
            <Link href={`/community/${commuinyName}`} className="text-black text-sm">go back</Link>
            <div className="flex items-center gap-1 text-xl mt-3">
            <h2>Create a post</h2>
            <BsMagic/>
            </div>

            <h3>q/{commuinyName}</h3>
        </div>

      <div className="flex gap-4 mt-10">
        <div className="grow">
          <Editor name={commuinyName}/>
        
        </div>
        <div className="grow-0">
          <Conditions />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
