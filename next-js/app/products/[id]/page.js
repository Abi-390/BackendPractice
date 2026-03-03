"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>{params.id}'s page</h1>
    </div>
  );
};

export default page;
