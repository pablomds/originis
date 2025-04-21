"use client"
import React from 'react'
import Link from 'next/link'
import {useTranslations} from 'next-intl'

function FooterPublic() {
  const t = useTranslations('FooterPublic')
  return (
    <footer className="bg-gray-900 border-t border-[#E5E7EB] px-[14px] md:pl-[96px] md:pr-[96px]">
      <div className="md:flex md:flex-row md:justify-between">
        <div>
          <div className="pt-[40px] md:pt-[48px] flex items-center gap-x-[6px] pb-[20px]">
            <img
              src="/logo.svg"
              alt="Originis Logo"
              className="h-[11px] w-auto md:h-[30px] md:w-[24px]"
            />
            <p className="text-[18px] md:text-2xl text-white">Oríginis</p>
          </div>
          <p className="font-medium text-slate-400 text-sm md:text-[16px] pb-[32px] md:w-2/3">
            {t('connecting_communities_through_language_and_culture')}
          </p>
        </div>
        <div className="md:pt-[48px]">
          <span className="font-semibold text-white text-[16px] md:text-lg">
            {t('quick_links.title')}
          </span>
          <div className="pt-[32px] pb-[44px] md:pt-[19px]">
            <ul>
              <li className="pb-[13px]">
                <Link
                  href="/about"
                  className="font-medium text-sm md:text-[16px] text-slate-400 hover:text-slate-300"
                >
                  {t('quick_links.about_us')}
                </Link>
              </li>
              <li className="pb-[13px]">
                <Link
                  href="/dialects"
                  className="font-medium text-sm md:text-[16px]  text-slate-400 hover:text-slate-300"
                >
                  {t('quick_links.our_dialects')}
                </Link>
              </li>
              <li className="pb-[13px]">
                <Link
                  href="/community"
                  className="font-medium text-sm md:text-[16px]  text-slate-400 hover:text-slate-300"
                >
                  {t('quick_links.community')}
                </Link>
              </li>
              <li className="pb-[13px]">
                <Link
                  href="/contact"
                  className="font-medium text-sm md:text-[16px]  text-slate-400 hover:text-slate-300"
                >
                  {t('quick_links.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:pt-[48px]">
          <span className="font-semibold text-white text-[16px] md:text-lg">
            {t('follow_us')}
          </span>
          <div className="flex flex-row gap-x-4 pt-[19px] pb-[44px]">
            <img
              src="/facebook-logo.svg"
              alt="Facebook Logo"
              className="w-8 h-8"
            />
            <img src="/x-logo.svg" alt="X Logo" className="w-8 h-8" />
            <img
              src="/instagram-logo.svg"
              alt="Instagram Logo"
              className="w-8 h-8"
            />
            <img
              src="/youtube-logo.svg"
              alt="Youtube Logo"
              className="w-8 h-8"
            />
          </div>
        </div>
        <div className="md:pt-[48px]">
          <span className="font-semibold text-white text-[16px] md:text-[18px] md:text-lg">
            {t('newsletter.title')}
          </span>
          <div className="flex flex-col pt-[13px] md:pt-[19px]  pb-[57px]">
            <div className="flex flex-row">
              <div className="bg-[#374151] md:py-[10px] rounded-l-[8px]">
                <input
                  type="text"
                  placeholder={t('newsletter.email_placeholder')}
                  className="pl-[13px] md:pl-[16px] h-full w-full text-[16px] placeholder:text-[#ADAEBC] text-[#ADAEBC] outline-none"
                />
              </div>
              <button className="bg-[#4F46E5] hover:bg-[#3E35D4] flex flex-col justify-center rounded-r-[8px] px-[16px] py-[10px] text-white cursor-pointer">
                {t('newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[15px] md:gap-y-[35px] pb-[15px] md:pb-[50px]">
        <div className="border-t-2 border-[#374151]"></div>
        <span className="text-[#9CA3AF] text-[16px] md:text-center">
          {`© ${new Date().getFullYear()} Oríginis. ${t('all_rights_reserved')}`}
        </span>
      </div>
    </footer>
  );
}

export default FooterPublic