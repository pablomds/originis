import React from 'react';
import Link from "next/link"; 
import { cookies } from 'next/headers';
import { auth as adminAuth } from '@/utils/auth/firebase-admin';
import { redirect } from 'next/navigation';
import { HeaderDictionaryButton } from "@/components/Dictionary/header-dictionary-button";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');

  if (!session) {
    redirect('/login'); 
  }
  
  try {
    const decoded = await (await adminAuth).verifySessionCookie(session.value, true);
    return (
      <>
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
                  <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
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
        <main className="min-h-screen">{children}</main>
        <footer className="bg-white py-4 px-6 border-t border-gray-200">
          <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex items-center text-indigo-600 font-bold">
                <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">
                  O
                </span>
                Originis
              </div>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 Originis. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {/* Icons */}
              {[
                "M8.29 20.251c7.547...",
                "M22 12c0-5.523...",
                "M12 2.163c3.204...",
              ].map((d, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-slate-500 hover:text-slate-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={d} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </>
    );
  } catch (error) {
    console.error('Invalid session:', error);
    redirect('/login');
  }
}