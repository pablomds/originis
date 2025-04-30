"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { ArrowLeft, Camera, Earth, BookOpen, User, Pencil, ChartNoAxesColumn, Lock, Eye, Trash, Goal  } from 'lucide-react';
import DropdownButton from '@/components/Dropdown/MyProfile/DropdownButton';
import ToggleButton from '@/components/ToogleButton/MyProfile/ToggleButton';


function LearningStatistics() {
  return (
    <div className="lg:w-[352px] px-[35px] py-[30px] bg-white border-1 border-gray-200 rounded-[8px] flex flex-col gap-y-[29px]">
      <div className="flex items-end">
        <ChartNoAxesColumn size={35} className="text-indigo-700 mr-[8px]" />
        <h2 className="text-[20px] font-semibold">Learning Statistics</h2>
      </div>
      <div className="flex flex-col gap-y-[21px] pb-[22px]">
        <div className="flex justify-between bg-indigo-50 pl-[21px] pr-[8px] pt-[8px] pb-[33px] rounded-[6px]">
          <span className="font-semibold text-[14px]">Vocabulary</span>
          <span className="font-semibold text-[14px]">240 words</span>
        </div>
        <div className="flex flex-col bg-purple-50 pl-[21px] pr-[8px] pt-[8px] pb-[13px] rounded-[6px]">
          <div className="flex justify-between pb-[14px]">
            <span className="font-medium text-[14px]">Grammar</span>
            <span className="font-medium text-[14px]">58%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col bg-green-50 pl-[21px] pr-[8px] pt-[8px] pb-[13px] rounded-[6px]">
          <div className="flex justify-between pb-[14px]">
            <span className="font-semibold text-[14px]">Listening</span>
            <span className="font-semibold text-[14px]">69%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full"
              style={{ width: "69%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col bg-amber-50 pl-[21px] pr-[8px] pt-[8px] pb-[13px] rounded-[6px]">
          <div className="flex justify-between pb-[14px]">
            <span className="font-semibold text-[14px]">Speaking</span>
            <span className="font-semibold text-[14px]">24%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full"
              style={{ width: "24%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex justify-between pt-[9px] pb-[11px]">
          <span className="text-gray-500">Learning streak</span>
          <span className="text-indigo-700 font-semibold">12 days</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Weekly study time</span>
          <span className="text-indigo-700 font-semibold">4.5 hours</span>
        </div>
      </div>
    </div>
  );
}


interface TabProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  defaultActiveTab?: string;
  className?: string;
}

const TabComponent: React.FC<TabProps> = ({ 
  tabs, 
  defaultActiveTab,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab || (tabs.length > 0 ? tabs[0].id : ''));

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className={`lg:flex lg:flex-col w-full ${className} h-full lg:gap-y-[18px]`}>
      {/* Tab Navigation */}
      <div className="flex flex-nowrap lg:flex-wrap lg:h-[40px] w-full bg-gray-200 border-b border-gray-200 py-[4px] px-[5px] rounded-[8px] mb-[18px] lg:mb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-1 text-sm font-medium
              transition-colors duration-200 ease-in-out
              focus:outline-none cursor-pointer
              ${activeTab === tab.id
                ? 'bg-indigo-100 text-indigo-500 font-semibold'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }
            `}
            aria-selected={activeTab === tab.id}
            role="tab"
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-grow w-full">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'} w-full h-full`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            id={`tabpanel-${tab.id}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};


function page() {

  const TabPersonInfo = () => {

    const [isEditing, setIsEditing] = useState(false); // Replace with your editing state logic

    return (
      <div className="flex flex-col gap-y-[28px]">
        <div className={`p-4 ${isEditing ? "lg:h-full" : "lg:h-[337px]" }  bg-white border border-gray-200 rounded-[8px]`}>
          <div className="flex justify-between">
            <div className="flex justify-start">
              <User size={24} className="text-indigo-700 mr-[8px]" />
              <h2 className="text-lg font-semibold mb-4">
                {" "}
                Personal Information
              </h2>
            </div>
            <div className="flex items-center p-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="border border-indigo-200 flex flex-row items-center px-[14px] py-[11px] rounded-[6px] gap-x-[2px] cursor-pointer"
              > 
                <Pencil size={16} className="text-blue-700" />
                <span className="text-[15px] font-medium text-indigo-700">
                  Edit
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-[29px]">
            <div className={`grid ${isEditing ? 'grid-cols-1 gap-y-[29px] lg:gap-y-0 lg:grid-cols-2' : 'grid-cols-2'}`}>
              <div>
                <p className="font-medium text-[15px] text-gray-700">
                  Full Name
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    className="border border-indigo-200 w-2/3 rounded-[6px] p-2 outline-none"
                    defaultValue="Maria Rossi"
                  />
                ) : (
                  <p className="font-medium text-[15px] text-gray-700">
                    Maria Rossi
                  </p>
                )}
              </div>
              <div>
                <p className="font-medium text-[15px] text-gray-700">
                  Email Address
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    className="border border-indigo-200 w-2/3 rounded-[6px] p-2 outline-none"
                    defaultValue="maria.rossi@gmail.com"
                  />
                ) : (
                  <p className="font-medium text-[15px] text-gray-700">
                    maria.rossi@gmail.com
                  </p>
                )}
              </div>
            </div>
            <div className={`grid ${isEditing ? 'grid-cols-1 gap-y-[29px] lg:gap-y-0 lg:grid-cols-2' : 'grid-cols-2'}`}>
              <div className="w-full">
                <p className="font-medium text-[15px] text-gray-700">
                  Native Language
                </p>
                {
                  isEditing ? (
                    <input
                      type="text"
                      className="border border-indigo-200 w-2/3 rounded-[6px] p-2 outline-none"
                      defaultValue="Italian"
                    />
                  ) : (
                    <p className="font-medium text-[15px] text-gray-700">
                      Italian
                    </p>
                  )
                }
              </div>
              <div className="w-full">
                <p className="font-medium text-[15px] text-gray-700">
                  Location
                </p>
                {
                  isEditing ? (
                    <input
                      type="text"
                      className="border border-indigo-200 w-2/3 rounded-[6px] p-2 outline-none"
                      defaultValue="Rome, Italy"
                    />
                  ) : (
                    <p className="font-medium text-[15px] text-gray-700">
                      Rome, Italy
                    </p>
                  )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-full">
                <p className="font-medium text-[15px] text-gray-700">Bio</p>
                {
                  isEditing ? (
                    <textarea
                      className="border border-indigo-200 w-full rounded-[6px] p-2 outline-none"
                      defaultValue="Language enthusiast passionate about Sicilian dialect and culture. I love learning through traditional songs and connecting with native speakers."
                    />
                  ) : (
                    <p className="font-medium text-[15px] text-gray-700">
                      Language enthusiast passionate about Sicilian dialect and
                      culture. I love learning through traditional songs and
                      connecting with native speakers.
                    </p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-full border border-gray-200 bg-white rounded-[8px] px-[24px] py-[20px] flex flex-col gap-y-[29px] max-h-fit">
          <div className="flex items-center">
            <Lock className="text-indigo-700 mr-[8px] h-7 w-7" />
            <h2 className="text-[20px] font-semibold">Change Password</h2>
          </div>
          <div>
            <label
              htmlFor="currentPassword"
              className="font-medium text-[14px] text-gray-700 mb-[6px]"
            >
              Current Password
            </label>
            <div className="flex flex-row border border-indigo-200 w-full rounded-[6px] p-2">
              <input type="text" className="w-full outline-none" />
              <Eye className="text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-[29px] lg:gap-y-[0px] lg:justify-between lg:gap-x-[34px]">
            <div className="lg:w-1/2">
              <label
                htmlFor="newPassword"
                className="font-medium text-[14px] text-gray-700 mb-[6px]"
              >
                New Password
              </label>
              <div className="flex flex-row border border-indigo-200 w-full rounded-[6px] p-2">
                <input type="text" className="w-full outline-none" />
                <Eye className="text-gray-500" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <label
                htmlFor="newPassword"
                className="font-medium text-[14px] text-gray-700 mb-[6px]"
              >
                Confirm Password
              </label>
              <div className="flex flex-row border border-indigo-200 w-full rounded-[6px] p-2">
                <input type="text" className="w-full outline-none" />
                <Eye className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white px-[14px] py-[11px] rounded-[6px] flex items-center gap-x-[2px] cursor-pointer transition-colors duration-200 ease-in-out">
              <span className="text-[15px] font-medium">Change Password</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const TabLearningDialects = () => {

    const dialectsOptions = [ 
      { id: 'advanced', label: 'Advanced' },
      { id: 'beginner', label: 'Beginner' },
      { id: 'intermediate', label: 'Intermediate' },
    ];

    const dailyStudyingTimeOptions = [
      { id: '30', label: '30 minutes' },
      { id: '60', label: '60 minutes' },
      { id: '90', label: '90 minutes' }
    ];

    const weeklyVocabularyOptions = [
      { id: '50', label: '50 words' },
      { id: '100', label: '100 words' },
      { id: '150', label: '150 words' }
    ]

    return (
      <div className="flex flex-col gap-y-[27px]">
        <div className="p-4 bg-white border border-gray-200 rounded-[8px] relative h-full w-full flex flex-col gap-y-[19px]">
          <div className="flex flex-row justify-start">
            <BookOpen size={24} className="text-indigo-700 mr-[8px]" />
            <h2 className="text-lg font-semibold mb-4">Learning Dialects</h2>
          </div>
          <div className="flex flex-col gap-y-[19px]">
            <div className="bg-slate-50 border border-gray-200 rounded-[8px] px-[25px] pt-[14px] pb-[24px]">
              <div className="flex flex-row justify-between mb-[11px]">
                <div className="flex items-center gap-x-[12px]">
                  <span className="text-[16px] font-semibold">Sicilian</span>
                  <div className="bg-green-100 rounded-[20px] py-[3px] px-[6px] flex items-center">
                    <span className="text-[12px] text-green-700 font-semibold">
                      Advanced
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[13px]">
                  <DropdownButton defaultOption={dialectsOptions[0].id} options={dialectsOptions} />
                  <Trash size={24} className="text-red-500 cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-nowrap justify-between items-center mb-[20px]">
                <div>
                  <span>Progress :</span>
                </div>
                <div className="w-4/6 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#22C55E] rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span>85%</span>
              </div>
              <div className="grid grid-cols-4 gap-x-[9px]">
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">Vocabulary</span>
                  <span className="text-[12px] font-semibold">212 words</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">Lessons</span>
                  <span className="text-[12px] font-semibold">2 completed</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">
                    Practice Time
                  </span>
                  <span className="text-[12px] font-semibold">8 minutes</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">
                    Last Activity
                  </span>
                  <span className="text-[12px] font-semibold">2 days ago</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 border border-gray-200 rounded-[8px] px-[25px] pt-[14px] pb-[24px]">
              <div className="flex flex-row justify-between mb-[11px]">
                <div className="flex items-center gap-x-[12px]">
                  <span className="text-[16px] font-semibold">Sicilian</span>
                  <div className="bg-green-100 rounded-[20px] py-[3px] px-[6px] flex items-center">
                    <span className="text-[12px] text-green-700 font-semibold">
                      Advanced
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-[13px]">
                  <DropdownButton defaultOption={dialectsOptions[0].id} options={dialectsOptions} />
                  <Trash size={24} className="text-red-500" />
                </div>
              </div>
              <div className="flex flex-nowrap justify-between items-center mb-[20px]">
                <div>
                  <span>Progress :</span>
                </div>
                <div className="w-4/6 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#22C55E] rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span>85%</span>
              </div>
              <div className="grid grid-cols-4 gap-x-[9px]">
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">Vocabulary</span>
                  <span className="text-[12px] font-semibold">212 words</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">Lessons</span>
                  <span className="text-[12px] font-semibold">2 completed</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">
                    Practice Time
                  </span>
                  <span className="text-[12px] font-semibold">8 minutes</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-[4px] pt-[10px] pl-[10px] pb-[7px] flex flex-col gap-y-[2px]">
                  <span className="text-slate-600 font-medium">
                    Last Activity
                  </span>
                  <span className="text-[12px] font-semibold">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-[8px]">
          <div className="flex flex-row justify-start mb-[12px]">
            <Goal size={24} className="text-indigo-700 mr-[8px]" />
            <h2 className="text-lg font-semibold mb-4">Learning Goals</h2>
          </div>
          <div className="flex flex-col gap-y-[26px]">
            <div className="bg-indigo-50 border border-slate-200 rounded-[6px] px-[33px] pt-[21px] pb-[33px]">
              <div className="flex flex-row justify-between items-center mb-[6px]">
                <span className="text-[14px] font-semibold">
                  Daily Study Time
                </span>
                <DropdownButton defaultOption={dailyStudyingTimeOptions[0].id} options={dailyStudyingTimeOptions} />
              </div>
              <div>
                <div className="text-[14px] text-slate-500 font-semibold pb-[9px]">
                  Study at least 30 minutes every day
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-800 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 border border-slate-200 rounded-[6px] px-[33px] pt-[21px] pb-[33px]">
              <div className="flex flex-row justify-between items-center mb-[6px]">
                <span className="text-[14px] font-semibold">
                  Weekly Vocabulary
                </span>
                <DropdownButton defaultOption={weeklyVocabularyOptions[0].id} options={weeklyVocabularyOptions} />
              </div>
              <div>
                <div className="text-[14px] text-slate-500 font-semibold pb-[9px]">
                  Learn 50 new words every week
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-800 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TabSettings = () => {
    return (
      <div className="flex flex-col gap-y-[28px]">
        <div className="p-4 lg:h-[337px] bg-white border border-gray-200 rounded-[8px] w-full flex flex-col gap-y-[19px]">
          <div className="flex flex-row justify-start">
            <User size={24} className="text-indigo-700 mr-[8px]" />
            <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          </div>
          <div className="flex flex-col gap-y-[17px]">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="font-medium text-[16px]">Email Notifications</p>
                <p className="text-[16px] text-slate-600">
                  Receive updates and reminders via email
                </p>
              </div>
              <div>
                <ToggleButton />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center border-t border-gray-200">
              <div className="pt-[17px]">
                <p className="font-medium text-[16px]">App Notifications</p>
                <p className="text-[16px] text-slate-600">
                  Receive in-app notifications
                </p>
              </div>
              <div>
                <ToggleButton />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center border-t border-gray-200">
              <div className="pt-[17px]">
                <p className="font-medium text-[16px]">
                  Weekly Progress Report
                </p>
                <p className="text-[16px] text-slate-600">
                  Receive a weekly summary of your learning progress
                </p>
              </div>
              <div>
                <ToggleButton />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-red-500 pt-[12px] pb-[13px] px-[19px] rounded-[8px] flex gap-x-[5px] cursor-pointer hover:bg-red-600 transition-colors duration-200 ease-in-out">
            <Trash color="white" />
            <span className="text-white font-semibold">Delete Account</span>
          </button>
        </div>
      </div>
    );
  };

  const tabData = [
    {
      id: "personal",
      label: "Personal Info",
      content: (
        <TabPersonInfo />
      ),
    },
    {
      id: "learning",
      label: "Learning Dialects",
      content: (
        <TabLearningDialects />
      ),
    },
    {
      id: "settings",
      label: "Settings",
      content: (
        <TabSettings />
      ),
    },
  ];

  function AvatarUser() {
    return (
      <div className="h-[156px] w-[156px] rounded-full  flex items-center justify-center mx-auto mb-[10px] p-2 shadow-[0_1px_2px_rgba(0,0,0,0.25)] relative">
        <div className="bg-gray-200 rounded-full h-full w-full"></div>
        <div className="flex items-center justify-center bg-indigo-500 h-10 w-10 rounded-full absolute top-[110px] right-[0px] p-2">
          <Camera size={24} color="white" />
        </div>
      </div>
    );
  };

  function CardUser() {
    return (
      <div className="flex flex-col items-center lg:w-[352px] lg:h-[395px] bg-white border-1 border-gray-200 px-[24px] py-[20px] rounded-[18px]">
        <AvatarUser />
        <h2 className="text-[24px] font-semibold mb-[4xp]">Maria Rossi</h2>
        <span className="text-[14px] font-semibold text-gray-500 mb-2">
          maria.rossi@example.com
        </span>
        <div className="flex flex-row mb-8">
          <div className="flex items-center bg-indigo-100 rounded-[20px] px-[14px] py-[4px] mr-[7px]">
            <span className="text-[11px] font-semibold text-indigo-500">
              Advanced learner
            </span>
          </div>
          <div className="flex items-center bg-amber-100 rounded-[20px] px-[14px] py-[4px] gap-x-1">
            <Earth className="h-3 w-3 text-amber-700" />
            <span className="text-[11px] text-amber-700 font-semibold">
              Italian
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col mb-[19px]">
          <div className="w-full md:w-auto flex items-center justify-between gap-2 mb-1">
            <span className="text-sm text-slate-500">Overall Progress</span>
            <span className="text-sm font-medium">35%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-800 rounded-full"
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 text-gray-500 mr-[7px]" />
          <span className="text-[14px] text-gray-500 font-medium">Member since January 2023</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-indigo-50">
      <div className="container mx-auto px-4 py-4 sm:py-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <Link
            href="/culture"
            className="flex items-center text-indigo-600 mb-3 sm:mb-0"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to menu</span>
          </Link>
        </div>
        <h1 className="text-[32px] font-semibold mb-[50px]">My Profile</h1>
        <div className="lg:flex lg:gap-x-[28px]">
          <div className="lg:w-1/3 flex flex-col gap-y-[28px] mb-[28px] lg:mb-0">
            <CardUser />
            <LearningStatistics />
          </div>
          <div className="lg:w-2/3">
            <TabComponent defaultActiveTab='personal' tabs={tabData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page