import NavbarPublic from "@/components/Header/NavbarPublic";
import FooterPublic from "@/components/Footer/FooterPublic";
import PublicLayout from "./public-layout";
import { Music, BookText, MessagesSquare, Users, MapPin, Earth, Badge  } from 'lucide-react';

const ConnectWithNativesSpeakers = [
  {
    gradientClass: "from-[#F5F3FF] to-pink-50",
    buttonClassColor: "bg-purple-500 hover:bg-purple-600",
    fullname: "Ghjiseppu C.",
    dialect: "Corsican Speaker"
  },
  {
    gradientClass: "from-[#EFF6FF] to-[#ECFDF5]",
    buttonClassColor: "bg-blue-500 hover:bg-blue-600",
    fullname: "Vincenzo B.",
    dialect: "Sicilian Speaker"
  },
  {
    gradientClass: "from-amber-50 to-[#FFF7ED]",
    buttonClassColor: "bg-amber-500 hover:bg-amber-600",
    fullname: "João S.",
    dialect: "Caipira Speaker"
  },
  {
    gradientClass: "from-[#FEF2F2] to-[#FFF7ED]",
    buttonClassColor: "bg-red-500 hover:bg-red-600",
    fullname: "Koffi L.",
    dialect: "Lingala Speaker"
  }
];

const LearningMethods = [
  {
    Icon: Music,
    IconBgColor: "bg-[#EDE9FE]",
    title: "Music",
    description: "Learn through traditional songs and music"
  },
  {
    Icon: BookText,
    IconBgColor: "bg-[#DBEAFE]",
    title: "Vocabulary",
    description: "Discover new vocabulary everyday"
  },
  {
    Icon: MessagesSquare,
    IconBgColor: "bg-[#D1FAE5]",
    title: "IA",
    description: "Learn to discuss the dialect with an IA"
  },
  {
    Icon: Users,
    IconBgColor: "bg-[#FFEDD5]",
    title: "Community",
    description: "Connect with native speakers"
  }
];

function CardConnectWithNativeSpeakers({gradientClass, buttonClassColor, fullname,  dialect } : { gradientClass: string, buttonClassColor: string, fullname: string, dialect: string }) {
  return (
    <div className={`bg-gradient-to-r ${gradientClass} flex flex-col items-center shadow-sm rounded-lg gap-y-4 px-[23px] md:px-[24px] pb-9 md:pb-[24px]`}>
      <div className="flex flex-col items-center pt-[56px] md:pt-[24px]">
        <div className="h-[85px] w-[85px] md:h-[80px] md:w-[80px] bg-[#D9D9D9] rounded-full"></div>
        <span className="font-semibold text-base md:text-lg md:pt-[11px]">{fullname}</span>
        <span className="font-medium text-base text-slate-500">
          {dialect}
        </span>
      </div>
      <a
        href="#"
        className={`${buttonClassColor} w-full rounded-[8px] py-2 text-center text-white`}
      >
        Connect
      </a>
    </div>
  );
}

function Card({ Icon, IconBgColor, title, description} : { Icon: React.ElementType, IconBgColor: string, title: string, description: string}) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <div className={`rounded-full ${IconBgColor} p-5 w-[64px] h-[64px]`}>
          <Icon size={24}/>
        </div>
        <div className="pt-[18px] flex flex-col items-center">
          <span className="font-semibold text-lg md:text-xl text-center md:pb-[16px]">{title}</span>
          <p className="font-medium text-sm md:text-base text-slate-600 text-center w-11/12">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PublicLayout>
      <div className="bg-indigo-50 pl-[27px] pt-[42px] pb-[96px] md:pl-[96px] md:pb-0 pr-[25px] md:pr-0 text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-y-[43px] md:gap-x-[95px]">
          <div className="flex flex-col gap-y-[13px] md:w-1/3">
            <h2 className="text-3xl md:text-5xl md:pb-[17px] font-semibold md:font-normal">
              Discover and Learn Local Dialects and Cultures
            </h2>
            <p className="text-lg md:text-[20px] md:pb-[38px] text-slate-600 font-medium">
              Connect with native speakers and immerse yourself in authentic
              local languages and cultures
            </p>
            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 w-[222px] py-4 text-white rounded-[8px] text-center font-semibold text-lg"
            >
              Start Learning Now
            </a>
          </div>
          <div className="flex justify-center md:w-2/3 md:justify-end">
            <img
              className="md:hidden"
              src="/mobile-homepage-illustration.svg"
              alt="Homepage Illustration"
            />
            <img
              className="hidden md:block md:w-[624px] md:h-[534px] md:rounded-tl-[8px]"
              src="/desktop-homepage-illustration.png"
              alt="Homepage Illustration"
            />
          </div>
        </div>
      </div>
      <div className="pt-[55px] md:pt-[64px] px-[23px] md:px-[80px] pb-[77px]">
        <div className="flex flex-col gap-y-[55px]">
          <h2 className="text-[28px] md:text-3xl font-semibold text-center">
            Choose Your Interest
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center gap-y-6 md:gap-x-[32px]">
            <div className="bg-gradient-to-r from-[#FDF2F8] to-[#F5F3FF] shadow-md rounded-[8px] md:w-[26rem]">
              <div className="pt-[70px] md:pt-[24px] pb-[28px] md:pb-[24px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                <div className="flex flex-row items-center gap-x-2">
                  <MapPin size={24} />
                  <h3 className="font-semibold text-xl">Local Dialects</h3>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-normal">
                  Learn the unique expressions and traditions of the local
                  dialect of your choice
                </p>
                <a
                  href="#"
                  className="h-[42px] bg-pink-500 hover:bg-pink-600 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                >
                  View
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#EFF6FF] to-[#ECFDF5] shadow-md rounded-[8px] md:w-[26rem]">
              <div className="pt-[70px] md:pt-[24px] pb-[28px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                <div className="flex flex-row items-center gap-x-2">
                  <Earth size={24} />
                  <h3 className="font-semibold text-xl">Old Languages</h3>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-medium md:w-11/12">
                  Discover old languages and get a little bit closer of your
                  ancestors
                </p>
                <a
                  href=""
                  className="h-[42px] bg-blue-500 hover:bg-blue-600 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                >
                  View
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#FFFBEB] to-[#FFF7ED] shadow-md rounded-[8px] md:w-[26rem]">
              <div className="pt-[70px] md:pt-[24px] pb-[28px] pl-[24px] pr-[27px] flex flex-col gap-y-[17px]">
                <div className="flex flex-row items-center gap-x-2">
                  <Badge size={24} />
                  <h3 className="font-semibold text-xl">Learn Cultures</h3>
                </div>
                <p className="text-slate-600 text-sm md:text-base font-medium md:w-11/12">
                  Explore plenty of local cultures, history and languages
                </p>
                <a
                  href=""
                  className="h-[42px] bg-amber-500 hover:bg-amber-600 rounded-[6px] text-white flex items-center justify-center text-lg font-semibold"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[65px] pl-[39px] pr-[29px] md:px-[96px] bg-indigo-50">
        <div className="flex flex-col gap-y-[56px] md:gap-y-[43px]">
          <h2 className="text-[28px] font-bold text-center text-2xl">
            Learn Through Different Methods
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[49px] md:gap-x-[32px] pb-[94px] md:pb-[45px]">
            {LearningMethods.map((item, index) => (
              <Card
                key={index}
                Icon={item.Icon}
                IconBgColor={item.IconBgColor}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-[32px] md:pt-[64px] pl-[26px] pr-[25px] md:px-[96px] pb-[49px]">
        <h2 className="text-[28px] font-semibold text-center">
          Connect with Native Speakers
        </h2>
        <div className="pt-[19px] md:pt-[46px] grid grid-cols-1 md:grid-cols-4 gap-y-[23px] md:gap-x-[24px]">
          {ConnectWithNativesSpeakers.map((item, index) => (
            <CardConnectWithNativeSpeakers
              key={index}
              gradientClass={item.gradientClass}
              buttonClassColor={item.buttonClassColor}
              fullname={item.fullname}
              dialect={item.dialect}
            />
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
