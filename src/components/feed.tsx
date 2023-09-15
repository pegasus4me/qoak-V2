import React from "react";
import Link from "next/link";

export default function Feed() {
  return (
    <div className="border max-w-[700px] min-w-[300px] bg-white p-2">
      <div className="mt-9">
        <h2>Home</h2>
        <p className="text-xs text-gray-400 mb-6">
          Your personal Qoak frontpage. Come here to check in with your
          favorite communities.
        </p>
      </div>
      <div className="flex flex-col">
        <Link className="border bg-gray-300 font-light p-2 rounded-md mb-2 hover:bg-gray-100 text-center"
        href='/community/create'
        >create a community</Link>
        <Link className="bg-neutral-900 text-white font-light p-2 rounded-md hover:bg-neutral-800 text-center"
        href='/post/createNewPost'
        >create a post</Link>    
      </div>
    </div>
  );
}
