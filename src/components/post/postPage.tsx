'use client'
import { FC } from "react"
import React from "react"
import { BsFillChatLeftFill } from "react-icons/bs";

const PostPage:FC = () => {
    return <div>
    
        <div className="mt-11">
            <input type="text" className="bg-transparent focus:outline-none text-4xl text-slate-400"
            placeholder="title"/>
        </div>
        <div className="mt-8">
            <input type="text" className="bg-transparent focus:outline-none text-2xl text-slate-300" 
            placeholder="text"
            />
        </div>
    </div>
}

export default PostPage