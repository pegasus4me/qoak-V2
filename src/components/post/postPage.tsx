"use client";
import { FC } from "react";
import React from "react";
import { BsMagic } from "react-icons/bs";
import Conditions from "./conditions";
import Editor from "./editor";
import Link from "next/link";
import { Posts } from "../../../lib/actions/post";

const PostPage: FC<{commuinyName : string}> = ({commuinyName}) => {
   
    return (
    <div className="">
        <div className="p-1">
            <Link href="/" className="text-slate-300">home</Link>
            <div className="flex items-center gap-1 text-xl mt-3">
            <h2>Create a post</h2>
            <BsMagic/>
            </div>
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
