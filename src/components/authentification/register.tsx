'use client'
import React from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { AiOutlineClose } from "react-icons/ai";

type formData = {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Register({ closeModal }: { closeModal: () => void }) {
  const { register, handleSubmit } = useForm<formData>();
  //   const onSubmit = (data: formData) => console.log(data);

  const addUser = async (data: formData) => {
    const { firstName, email, password, confirmPassword } = data;

    try {
      const res: AxiosResponse<any, any> = await axios.post("/api/user", {
        name: firstName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      console.log(res)
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
        <div className="bg-white rounded-lg w-[500px] h-[500px] border border-gray-200">
          <div className="text-start p-2 border-b">
            <div className="flex justify-between">
              <h3 className="font-light">Register</h3>
              <AiOutlineClose onClick={closeModal} />
            </div>
            <p className="font-light text-xs max-w-[80%] p-1">
              By continuing, you are creating a Qoak account and agreeing to our{" "}
              <span className="text-[#4285F4]">Terms of Service</span> and
              Privacy Policy.
            </p>
          </div>
          <form
            className="max-w-[90%] m-auto mt-10"
            onSubmit={handleSubmit(addUser)}
          >
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md"
              placeholder="username"
              {...register("firstName")}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 mb-3 rounded-md"
              type="email"
              placeholder="email"
              {...register("email")}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md"
              type="password"
              placeholder="password"
              {...register("password")}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  block w-full p-2.5 mb-3 rounded-md"
              type="password"
              placeholder="confirm password"
              {...register("confirmPassword")}
            />
            <input
              type="submit"
              className="bg-black w-full py-2 text-white font-light text-base rounded-md mb-6"
              required
            />
          </form>
        </div>
      </div>
    </div>
  );
}
