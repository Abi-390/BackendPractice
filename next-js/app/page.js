"use client";

import React from "react";
import recipe from "../public/recipe.webp";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <h1>Home</h1>
      <Image width={80} src={recipe} alt="Not found" />
    </div>
  );
};

export default page;
