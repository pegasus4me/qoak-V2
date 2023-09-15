"use client";
import { FC } from "react";
import React from "react";
import { BsMagic } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
const NewPost: FC<{ name: string }> = ({ name }) => {
  const router: AppRouterInstance = useRouter();

  const redirect = () => {
    router.push(`/community/${name}/post`);
  };

  return (
    <div className="border border-slate-300 max-w-[400px] p-1 bg-white rounded-sm flex justify-around items-center">
      <input
        type="text"
        className="hover:outline-1 bg-transparent p-1 focus:outline-none"
        placeholder="create a post"
        onChange={() => redirect()}
      />
      <div>
        <BsMagic className="text-md" />
      </div>
    </div
  );
};

export default NewPost;
