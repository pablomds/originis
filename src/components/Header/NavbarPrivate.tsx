"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { HeaderDictionaryButton } from "@/components/Dictionary/header-dictionary-button";

function NavbarPrivate() {

  const router = useRouter();

  return (
    <header className="flex items-center justify-center px-6 py-3 bg-white border-b border-gray-200">
      <div className="max-w-6xl w-full mx-auto flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-indigo-600 font-bold">
            <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">
              O
            </span>
            Originis
          </div>
        </div>

        <HeaderDictionaryButton />

        <div className="flex items-center gap-4">
          <div className="relative flex gap-4">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center items-center object-cover">
                <img src="/Flamme.svg" alt="Profile" className="" />
              </div>
              15
            </div>
            <button className="rounded-full p-1 hover:bg-slate-100">
              <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden cursor-pointer" onClick={() => router.push('my-profile')}>
                <img
                  src="/avatarImg.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavbarPrivate;
