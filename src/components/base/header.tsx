"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
 import { Register } from "../authentification/register";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { AiOutlineDown } from "react-icons/ai";
import Search from "../searchBar";
import * as Avatar from "@radix-ui/react-avatar";
import { userInfos } from "../../../lib/actions/user";
// import SideBar from "../sidebar";
export default function Header() {
  const [register, setRegister] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [user, setUser] = useState<any>([]);
  const { data: session, status } = useSession();
    console.log("user", user)
  useEffect(() => {
    fetch();
  }, [session]);
  const fetch = async () => {
    const res = await userInfos(session?.user?.email as string);
    console.log('fofofo', res)
    setUser(res?.data.find_user);
  };
  return (
    <header className="border bg-white p-2">
      <div className="max-w-[90%] m-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-semibold">qoak</h1>
        </div>

        <div className="w-[50%] border rounded-md p-2">
          <Search />
        </div>
        {status !== "authenticated" ? (
          <div className="flex gap-6 0">
            <button className="text-lg font-medium hover:hover:text-gray-700">
              <Link href="/login">login</Link>
            </button>
            <button
              className="text-lg font-medium hover:hover:text-gray-700"
              onClick={() => {
                setRegister(true);
              }}
            >
              register
              {register && (
                <Register closeModal={() => setRegister(!register)} />
              )}
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <Avatar.Root className="bg-blackA3 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle mr-4">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={
                  user?.image !== null
                    ? (user?.image as string)
                    : "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                }
                alt="Colm Tuite"
              />
            </Avatar.Root>
            <div className="min-w-[13rem] flex flex-col items-start border-l ">
              <p className="text-sm text-blue-600 ml-1">{user?.username}</p>
              <p className="text-xs ml-1">{session.user?.email}</p>
            </div>
            <div>
              <AiOutlineDown onClick={() => setClicked(!clicked)} />
              
            </div>
            {/* {clicked && <SideBar />} */}
          </div>
        )}

      </div>
    </header>
  );
}
