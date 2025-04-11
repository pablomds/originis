import React from 'react'

function FooterPublic() {
  return (
    <footer className="bg-gray-900 border-t border-[#E5E7EB] px-[14px] md:pl-[96px] md:pr-[52px]">
      <div className="md:flex md:flex-row">
        <div>
          <div className="pt-[40px] md:pt-[48px] flex items-center gap-x-[6px] pb-[20px]">
            <img
              src="/logo.svg"
              alt="Originis Logo"
              className="h-[11px] w-auto"
            />
            <p className="text-[18px] md:text-2xl text-white">Oríginis</p>
          </div>
          <p className="font-medium text-slate-400 text-sm md:text-[16px] pb-[32px] md:w-2/3">
            Connecting communities through language and culture.
          </p>
        </div>
        <div className="md:pt-[48px]">
          <span className="font-semibold text-white text-[16px] md:text-lg">
            Quick Links
          </span>
          <div className="pt-[32px] pb-[44px] md:pt-[19px]">
            <ul>
              <li className="pb-[13px] font-medium text-sm md:text-[16px] text-slate-400">
                About us
              </li>
              <li className="pb-[13px] font-medium text-sm md:text-[16px] text-slate-400">
                Our Dialects
              </li>
              <li className="pb-[13px] font-medium text-sm md:text-[16px] text-slate-400">
                Community
              </li>
              <li className="pb-[13px] font-medium text-sm md:text-[16px] text-slate-400">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="md:pt-[48px] md:pl-[226px]">
          <span className="font-semibold text-white text-[16px] md:text-lg">
            Follow Us
          </span>
          <div className="flex flex-row gap-x-1 pb-[44px]">
            <span>Instragam</span>
            <span>Tiktok</span>
          </div>
        </div>
        <div className="md:pt-[48px] md:pl-[192px]">
          <span className="font-semibold text-white text-[16px] md:text-[18px] md:text-lg">
            Newsletter
          </span>
          <div className="flex flex-col pt-[13px] md:pt-[19px]  pb-[57px]">
            <div className="flex flex-row">
              <div className="bg-[#374151] md:py-[10px] rounded-l-[8px]">
                <input
                  type="text"
                  placeholder="Your email"
                  className="pl-[13px] md:pl-[16px] h-full w-full text-[16px] placeholder:text-[#ADAEBC] text-[#ADAEBC] outline-none"
                />
              </div>
              <div className="bg-[#4F46E5] flex flex-col justify-center rounded-r-[8px] px-[16px] py-[10px] text-white">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[15px] md:gap-y-[35px] pb-[15px] md:pb-[50px]">
        <div className="border-t-2 border-[#374151]"></div>
        <span className="text-[#9CA3AF] md:text-center">
          © 2025 Oríginis. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default FooterPublic