"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { useSession } from "next-auth/react";

interface modal {
  close: () => void;
  id: string;
}
export default function UpdateProfile({ close, id }: modal) {

  const { data: session, status } = useSession();
  const [userName, setUserName] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  /**
   * @update database Username + image Value
   * @PUT
   */


  const updateUser = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/user/update", {
        email : session?.user?.email,
        username: userName,
        image : photo,
      });
      console.log('res', res.data)
    } catch (error: any) {
      console.error(error);
    }
  },[session]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg w-[500px] h-[500px] border border-gray-200">
        <div className="flex justify-between p-2 border-b">
          <h3 className="font-light">Update your Profile</h3>
          <AiOutlineClose onClick={close} className="cursor-pointer" />
        </div>
        <div className="max-w-[80%] m-auto p-2 mt-6">
          <form onSubmit={(e) => updateUser(e)}>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md focus:outline-none"
              placeholder="set your username"
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md focus:outline-none"
              placeholder="set your photo url "
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setPhoto(e.target.value);
              }}

            />
            <button className="bg-black text-white font-medium py-2 px-4 rounded">send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

/**
 * 
  <input
                  type="text"
                  className="p-1 border-none focus:outline-none text-center text-sm"
                  placeholder="set your username"
                  onChange={(e : React.ChangeEvent<HTMLInputElement>): void => {
                      setUserName(e.target.value)
                  }}
                />
 */
