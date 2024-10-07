"use client";
import React from "react";
import { useRouter } from "next/navigation";
import NavLogo from "@/svg/NavLogo";
import { UserSetting } from "./UserSetting";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className=" p-3 flex items-center justify-between border-b-2 border-zinc-400 ">
      <span
        className="text-2xl uppercase font-semibold cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <NavLogo />
      </span>
      <UserSetting />
    </header>
  );
}
