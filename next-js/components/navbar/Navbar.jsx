import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-pink-500 text-white h-20 w-full flex items-center justify-between px-6 text-2xl">
      <h1>AbiVerse</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
