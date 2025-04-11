'use client'
import Link from 'next/link'
import React from 'react'

const NavbarPublic = () => {
  return (
    <nav className="px-[25px] py-[22px] md:pl-[96px] md:pr-[27px] border-b border-[#E5E7EB] flex flex-row justify-between items-center h-[77px]">
      <div className="flex flex-row items-center gap-x-[11px]">
        <img src="/logo.svg" alt="Originis Logo" className="h-[11px] w-auto" />
        <p className="text-[18px] text-indigo-600">Originis</p>
      </div>
      <div className="flex gap-x-[17px] items-center">
        <Link
          className="text-slate-600 hover:text-slate-800 text-[15px] font-semibold"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="bg-indigo-600 hover:bg-indigo-800 text-[15px] py-2 px-3 rounded-[4px] h-[41px] font-semibold text-white"
          href={"/signup"}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default NavbarPublic