"use client";
import React,{ useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from 'axios'
import Link from "next/link";

export default function Community() {
    const [communityName, setCommunityName]=useState<string>('')
    const [alert, setAlert] = useState<boolean>(false)
    const [checked ,setChecked] = useState<boolean>(false)


    const onSubmit =async() => {
        if(communityName === "") setAlert(true)
        if(!checked) throw new Error('not clicked')
        try {
            
        } catch (error : any) {
            console.error('erreur community', error)
        }

    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg w-[500px] h-[500px] border border-gray-200 p-3">
        <div className="p-3 flex justify-between border-b max-w-[96%] m-auto">
          <h3 className="font-light text-md text-gray-900">
            Create a Community
          </h3>
          <AiOutlineClose onClick={() => <Link href='/'></Link> }/>
        </div>
        <div className="mt-3">
            <h2>Name</h2>
            <p className="text-xs text-gray-400 mb-6">Community names including capitalization cannot be changed.</p>
            <input type="text" 
            className=" border border-gray-300 text-gray-900 text-sm block w-[96%] m-auto p-2.5 mb-3 rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) : void => setCommunityName(e.currentTarget.value)}
            placeholder="q/"
            required
            />
            {alert && <p className="mt-1 text-red-600 text-sm font-light">A community name is required</p>}
        </div>
        
        <div className="flex gap-3">
                <input type="checkbox" name="validate" id="" onClick={() => setChecked(true)} />
                <p className="text-black text-xs">I have understod the rules of <span className="text-blue-500 font-medium">community</span></p>
        </div>
        <div className=" flex justify-end gap-3 mt-52">
            <button className="border bg-transparent text-black font-light p-2 rounded-md text-center text-xs"
            onClick={() => {}}
            >cancel</button>
            
            <button className="bg-neutral-900 text-white font-light p-2 rounded-md text-center text-xs"
            onClick={() => onSubmit()}
            >Create Community</button>
        </div>
      </div>
    </div>
  );
}


// le nom de la commu sera le leaf qui donne acces a l'autre page