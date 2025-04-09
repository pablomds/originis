import Image from "next/image";
import NavbarPublic from "@/components/Header/NavbarPublic";
import { Music, BookText, MessagesSquare, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      <NavbarPublic />
      <main>
        <div className="bg-indigo-50 pl-[27px] pt-[42px] pb-[96px] pr-[25px] md:pr-0 text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-y-[43px]">
            <div className="flex flex-col gap-y-[13px]">
              <h2 className="text-3xl md:text-5xl font-semibold md:font-normal">
                Discover and Learn Local Dialects and Cultures
              </h2>
              <p className="text-lg md:text-[20px] text-slate-600 font-medium">
                Connect with native speakers and immerse yourself in authentic
                local languages and cultures
              </p>
              <a className="bg-indigo-600 w-[222px] h-[52px] text-white rounded-full text-center pt-[14px] pb-[15px] font-semibold text-lg">
                Start Learning Now
              </a>
            </div>
            <div className="flex justify-center ">
              <img className="md:hidden" src="/mobile-homepage-illustration.svg" alt="Homepage Illustration" />
              <img className="hidden md:block md:w-[624px] md:h-[534px]" src="/desktop-homepage-illustration.png" alt="Homepage Illustration" />
            </div>
          </div>
        </div>
        <div className="pt-[55px] px-[23px]">
          <div className="flex flex-col gap-y-[55px]">
            <h2 className="text-[28px] font-semibold text-center">
              Choose your interest
            </h2>
            <div className="flex flex-col gap-y-6 pb-[77px]">
              <div className="h-[234px] bg-pink-50 rounded-[8px]">
                <div className="pt-[70px] pb-[28px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                  <h3 className="font-semibold text-xl">Local Dialects</h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Learn the unique expressions and traditions of the local
                    dialect of your choice
                  </p>
                  <a
                    href=""
                    className="h-[42px] bg-pink-500 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="h-[234px] bg-blue-50 rounded-[8px]">
                <div className="pt-[70px] pb-[28px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                  <h3 className="font-semibold text-xl">Old Languages</h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Discover old languages and get a little bit closer of your
                    ancestors
                  </p>
                  <a
                    href=""
                    className="h-[42px] bg-blue-500 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="h-[234px] bg-amber-50 rounded-[8px]">
                <div className="pt-[70px] pb-[28px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                  <h3 className="font-semibold text-xl">Learn Cultures</h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Explore plenty of local cultures, history and languages
                  </p>
                  <a
                    href=""
                    className="h-[42px] bg-amber-500 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[65px] pl-[39px] pr-[29px] bg-indigo-50">
          <div className="flex flex-col gap-y-[56px]">
            <h2 className="text-[28px] font-bold text-center text-2xl">
              Learn Through Different Methods
            </h2>
            <div className="grid grid-cols-2 gap-y-[49px] pb-[94px]">
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#EDE9FE] p-5 w-[64px] h-[64px]">
                    <Music size={24} />
                  </div>
                  <div className="pt-[18px] flex flex-col items-center">
                    <span className="font-semibold text-lg text-center">
                      Music
                    </span>
                    <p className="font-medium text-sm text-slate-600 text-center">
                      Learn through traditional songs and music
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#DBEAFE] p-5 w-[64px] h-[64px]">
                    <BookText size={24} />
                  </div>
                  <div className="pt-[18px] flex flex-col items-center">
                    <span className="font-semibold text-lg text-center">
                      Vocabulary
                    </span>
                    <p className="font-medium text-sm text-slate-600 text-center">
                      Discover new vocabulary everyday
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#D1FAE5] p-5 w-[64px] h-[64px]">
                    <MessagesSquare size={24} />
                  </div>
                  <div className="pt-[18px] flex flex-col items-center">
                    <span className="font-semibold text-lg text-center">
                      Vocabulary
                    </span>
                    <p className="font-medium text-sm text-slate-600 text-center">
                      Learn to discuss the dialect of your choice with an AI
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-[#FFEDD5] p-5 w-[64px] h-[64px]">
                    <Users size={24} />
                  </div>
                  <div className="pt-[18px] flex flex-col items-center">
                    <span className="font-semibold text-lg text-center">
                      Community
                    </span>
                    <p className="font-medium text-sm text-slate-600 text-center">
                      Connect with native speakers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[32px] pl-[26px] pr-[25px] pb-[49px]">
          <h2 className="text-[28px] font-semibold text-center">
            Connect with Native Speakers
          </h2>
          <div className="pt-[19px] flex flex-col gap-y-[23px]">
            <div className="bg-gradient-to-r from-[#F5F3FF] to-pink-50 flex flex-col items-center rounded-lg gap-y-4 px-[23px] pb-9">
              <div className="flex flex-col items-center pt-[56px]">
                <div className="h-[85px] w-[85px] bg-[#D9D9D9] rounded-full"></div>
                <span className="font-semibold text-base">Ghjiseppu C.</span>
                <span className="font-medium text-base text-slate-500">
                  Corsican Speaker
                </span>
              </div>
              <a
                href="#"
                className="bg-purple-500 w-full rounded-[6px] py-2 text-center text-white"
              >
                Connect
              </a>
            </div>
            <div className="bg-gradient-to-r from-[#EFF6FF] to-[#ECFDF5] flex flex-col items-center rounded-lg gap-y-4 px-[23px] pb-9">
              <div className="flex flex-col items-center pt-[56px]">
                <div className="h-[85px] w-[85px] bg-[#D9D9D9] rounded-full"></div>
                <span className="font-semibold text-base">Vincenzo B.</span>
                <span className="font-medium text-base text-slate-500">
                  Sicilian Speaker
                </span>
              </div>
              <a
                href="#"
                className="bg-blue-500 w-full rounded-[6px] py-2 text-center text-white"
              >
                Connect
              </a>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-[#FFF7ED] flex flex-col items-center rounded-lg gap-y-4 px-[23px] pb-9">
              <div className="flex flex-col items-center pt-[56px]">
                <div className="h-[85px] w-[85px] bg-[#D9D9D9] rounded-full"></div>
                <span className="font-semibold text-base">João S.</span>
                <span className="font-medium text-base text-slate-500">
                  Caipira Speaker
                </span>
              </div>
              <a
                href="#"
                className="bg-amber-500 w-full rounded-[6px] py-2 text-center text-white"
              >
                Connect
              </a>
            </div>
            <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FFF7ED] flex flex-col items-center rounded-lg gap-y-4 px-[23px] pb-9">
              <div className="flex flex-col items-center pt-[56px]">
                <div className="h-[85px] w-[85px] bg-[#D9D9D9] rounded-full"></div>
                <span className="font-semibold text-base">Koffi L.</span>
                <span className="font-medium text-base text-slate-500">
                  Lingala Speaker
                </span>
              </div>
              <a
                href="#"
                className="bg-red-500 w-full rounded-[6px] py-2 text-center text-white"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 px-[14px]">
        <div className="pt-[40px] flex items-center gap-x-[6px] pb-[20px]">
          <img
            src="/logo.svg"
            alt="Originis Logo"
            className="h-[11px] w-auto"
          />
          <p className="text-[18px] text-white">Oríginis</p>
        </div>
        <p className="font-medium text-slate-400 text-sm pb-[32px]">
          Connecting communities through language and culture.
        </p>
        <span className="font-semibold text-white text-[16px]">Quick Links</span>
        <div className="pt-[32px] pb-[44px]">
          <ul>
            <li className="pb-[13px] font-medium text-sm text-slate-400">About us</li>
            <li className="pb-[13px] font-medium text-sm text-slate-400">Our Dialects</li>
            <li className="pb-[13px] font-medium text-sm text-slate-400">Community</li>
            <li className="pb-[13px] font-medium text-sm text-slate-400">Contact</li>
          </ul>
        </div>
        <span className="font-semibold text-white text-[16px]">Follow Us</span>
        <div className="flex flex-row gap-x-1 pb-[44px]">
          <span>Instragam</span>
          <span>Tiktok</span>
        </div>
        <span className="font-semibold text-white text-[16px]">Newsletter</span>
        <div className="flex flex-col pt-[13px] pb-[57px]">
          <div className="flex flex-row">
            <input type="text" className="outline-solid outline-amber-500" />
            <div className="outline-solid outline-amber-500">Subscribe</div>
          </div>

        </div>
      </footer>
    </>
  );
}
