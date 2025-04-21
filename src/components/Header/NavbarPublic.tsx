'use client'
import Link from 'next/link'
import React from 'react'
import {useTranslations} from 'next-intl';

const NavbarPublic = () => {
  const t = useTranslations('NavbarPublic')
  return (
    <nav className="px-[25px] py-[22px] md:pl-[96px] md:pr-[27px] border-b-2 border-[#E5E7EB] flex flex-row justify-between items-center h-[77px]">
      <div className="flex flex-row items-center gap-x-[11px]">
        <img src="/logo.svg" alt="Originis Logo" className="h-[11px] w-auto md:h-[37px] md:w-[30px]" />
        <p className="text-[18px] md:text-[24px] text-indigo-600">Oríginis</p>
      </div>
      <div className="flex gap-x-[17px] items-center">
        <Link
          className="text-[#6369E9] hover:text-[#4147C7] text-[15px] font-semibold"
          href={"/login"}
        >
          {t('login')}
        </Link>
        <Link
          className="bg-indigo-600 hover:bg-indigo-700 text-[15px] py-2 px-3 rounded-[4px] h-[41px] font-semibold text-white"
          href={"/signup"}
        >
          {t('signup')}
        </Link>
      </div>
    </nav>
  );
}

export default NavbarPublic