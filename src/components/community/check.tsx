"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FC } from "react";
type check = { verify: string };
type data = {
  id: string;
  name: string;
  createdAt: string;
  updateAt: string;
  creatorId: string;
};
const Check: FC<check> = ({ verify }) => {
  useEffect(() => {
    verifyParams(verify);
  }, [verify]);

  const verifyParams = async (url: string) => {
    try {
      let a = await axios.get("/api/community/verify");
      let arr = a.data.msg;

      const val = arr.map((values: data) => {
        console.log("valuez", values.name);
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  return <div></div>;
};
export default Check;
