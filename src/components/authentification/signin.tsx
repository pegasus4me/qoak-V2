'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
type formData = {
  email: string;
  password: string;
};

export function Login() {
  
  const { register, handleSubmit } = useForm<formData>();
  
  const onSubmit = async(data: formData) => {
    try {
      let signin = await signIn("credentials", {
        redirect: true,
        email: data.email,
        password: data.password,
        callbackUrl: "/"
      })
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg w-[500px] h-[500px] border border-gray-200 ">
        <div className="text-start p-2 border-b flex items-center justify-between">
          <h3 className="font-light">welcome back</h3>
          <Link href="/"><AiOutlineClose/></Link>
        </div>
        <form className="max-w-[90%] m-auto mt-10"
        onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="font-light flex text-sm mb-2">email</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 mb-3 rounded-md"
            type="email"
            placeholder="email"
            required
            {...register("email")}
          />
          <label htmlFor="email" className="font-light flex text-sm mb-2">password</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md"
            type="password"
            required
            placeholder="password"
            {...register("password")}
          />
         
          <input type="submit" className="bg-black w-full py-2 text-white font-light text-base rounded-md" />
        </form>
        <div className="text-center">
          <h4 className="font-light text-sm mt-2 mb-2">or</h4>
          <div>
            <button className="text-black border focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            onClick={() => {
              signIn("google")
            }}
            >
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
