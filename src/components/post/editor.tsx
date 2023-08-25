"use client";
import React, { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "./button";
import { useSession } from "next-auth/react";
import axios from "axios";
const Editor = ({name}:{name : string}) => {

    const { data: session, status } = useSession();
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    
    console.log(content)
    console.log(title)
    const send = useCallback(async() => {

        
        try {
            const res = await axios.post('/api/posts/create',{
                title: title,
                content : content,
                user:session?.user?.id as string,
                name : name
            })

            console.log('res =>', res)
            
        } catch (error:any) {
            console.error('error =>', error)
        }
    },[content, title,session?.user?.id,name])

  return (
    <div className="bg-white p-3 rounded-md shadow-sm border border-slate-200 max-h-fit">
      <div className="mb-4">
        <input
          type="text"
          className="block w-full p-1 text-gray-900 border border-slate-300 bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500"
          placeholder="title"
          onChange={(e : React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
      </div>
      <div className="h-[12rem]" >
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="text..."
          style={{ height: "9rem" }}
        />
      </div>
            
      {/* <div 
        dangerouslySetInnerHTML={{ __html: value }}
        /> */}
      <div className="text-end mt-16" >
            <Button send={() => send()}/>
        </div>
    </div>
  );
};

export default Editor;
