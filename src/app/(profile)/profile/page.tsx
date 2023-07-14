"use client";
import { useCallback, useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import axios, { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import * as Avatar from "@radix-ui/react-avatar";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateProfile from "@/components/updateProfile";
import { userInfos } from "../../../../lib/actions/user";
type user = {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  emailVerified?: string | undefined;
  image?: string | undefined;
  userName?: string | undefined;
};

export default function Profile() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>([]);
  const [clicked, setClicked] = useState<boolean>(false);
  useEffect(() => {
    fetch();
  }, [session]);

  const fetch = useCallback(async () => {
    try {
      const res = await userInfos(session?.user?.email as string);
      setUser(res?.data.find_user);
    } catch (error: any) {
      console.log(error);
    }
  }, [session]);
  const closeModal = () => setClicked(false);
  return (
    <div>
      <div className="mt-6">
        <Link href="/" className="underline">
          home
        </Link>
      </div>

      <div className="flex items-center max-w-[80%] m-auto gap-2">
        <div className="border bg-white min-w-[59%]">{/* post upvdote */}</div>
        <div className="bg-white w-[40%] rounded-md h-[50%] border">
          {/* PROFILE CARD */}
          <div className="bg-blue-400 h-12 flex justify-center p-2 ">
            <Avatar.Root className="bg-blackA3 h-[80px] w-[80px] select-none items-center r overflow-hidden rounded-full flex justify-center">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover z-0  hover:opacity-80"
                src={
                  user?.image !== null
                    ? (user?.image as string)
                    : "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                }
                alt="Colm Tuite"
              />
            </Avatar.Root>
          </div>

          <button onClick={() => setClicked(true)}>
            <AiOutlineEdit className="text-gray-600 text-xl mt-3 ml-3" />
          </button>
          {clicked && <UpdateProfile id={user?.id} close={closeModal} />}
          {/* user id */}
          <div className="flex flex-col justify-center items-center mt-4 mb-5">
            {user?.username === undefined ? (
              <p className="text-lg text-blue-600 ml-1">set username</p>
            ) : (
              <p className="text-lg text-blue-600 ml-1">@{user?.username}</p>
            )}

            <p className="text-xs ml-1">{user?.email}</p>
          </div>
        </div>
        {/* grid informations utilisateurs ( communautés rejointes , communautés crées et ses dernieres post)+ redirect page settings  */}
      </div>

    </div>
  );
}
