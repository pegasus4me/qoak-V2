import React from "react";
import { FC } from "react";
import Header from "@/components/community/header";
import NewPost from "@/components/community/newPost";
import Check from "@/components/community/check";
import Link from "next/link";

export interface PropsParams {
  params: {
    url: string;
    commuName: string;
  };
}

const Community: FC<PropsParams> = ({ params }) => {

    console.log('url params=>',params)
  return (
    <div>
      <div>
        <Link
          href="/"
          className="text-sm font-light border-b hover:text-slate-600"
        >
          hub
        </Link>
      </div>
      <Check verify={params.commuName} />
      <div>
        <Header community={params.commuName} />
      </div>

      <div className="p-3">
        <NewPost name={params.commuName} />
      </div>

      <div>
        {/* posts dans la communauté (seulement le titre + debut texte ) + upvotes component */}
      </div>
    </div>
  );
};

export default Community;
