"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function CultureMenu() {
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const current = pathname.split("/").pop();
    setActiveTab(current || "culture");
  }, [pathname]);

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
    router.push(tab);
  };

  const tabs = [
    { name: "culture", label: "Overview", color: "indigo" },
    { name: "history", label: "History", color: "amber" },
    { name: "language", label: "Language", color: "pink" },
    { name: "phonetics", label: "Phonetics", color: "violet" },
  ];

  const tabStyles: Record<string, any> = {
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-700",
      border: "border-indigo-200",
      hoverBg: "hover:bg-indigo-100",
      hoverText: "hover:text-indigo-700",
      hoverBorder: "hover:border-indigo-200",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      border: "border-amber-200",
      hoverBg: "hover:bg-amber-100",
      hoverText: "hover:text-amber-700",
      hoverBorder: "hover:border-amber-200",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      border: "border-pink-200",
      hoverBg: "hover:bg-pink-100",
      hoverText: "hover:text-pink-700",
      hoverBorder: "hover:border-pink-200",
    },
    violet: {
      bg: "bg-violet-100",
      text: "text-violet-700",
      border: "border-violet-200",
      hoverBg: "hover:bg-violet-100",
      hoverText: "hover:text-violet-700",
      hoverBorder: "hover:border-violet-200",
    },
  };

  return (
    <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        const styles = tabStyles[tab.color];

        return (
          <button
            key={tab.name}
            onClick={() => handleTabChange(tab.name)}
            className={`whitespace-nowrap px-4 py-2 mr-2 rounded-full border-2 flex-shrink-0 font-medium transition-colors duration-200
              ${isActive
                ? `${styles.bg} ${styles.text} ${styles.border}`
                : `bg-white text-gray-700 border-gray-200 ${styles.hoverBg} ${styles.hoverText} ${styles.hoverBorder} hover:cursor-pointer`
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
  