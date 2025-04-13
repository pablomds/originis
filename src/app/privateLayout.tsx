import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // N'oublie pas d'importer Link si utilisé dans le footer
import { HeaderDictionaryButton } from "@/components/Dictionary/header-dictionary-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oríginis",
  description: "Originis allows you to discover cultures and learn local/ancient dialects.",
};

export default function Private({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleTabChange = (tab: string) => {
    console.log(`Switching to ${tab}`); // À remplacer par ta logique réelle
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* HEADER */}
        <header className="flex items-center justify-center px-6 py-3 bg-white border-b border-gray-200">
          <div className="max-w-6xl w-full mx-auto flex justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-indigo-600 font-bold">
                <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">O</span>
                Originis
              </div>
            </div>

            <HeaderDictionaryButton />

            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  15
                </div>
                <button className="rounded-full p-1 hover:bg-slate-100" onClick={() => handleTabChange("profile")}>
                  <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                    <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* CONTENU */}
        <main className="min-h-screen">{children}</main>

        {/* FOOTER */}
        <footer className="bg-white py-4 px-6 border-t border-gray-200">
          <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="flex items-center text-indigo-600 font-bold">
                <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">O</span>
                Originis
              </div>
            </div>
            <p className="text-sm text-slate-500">© 2025 Originis. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {/* Icons */}
              {[
                "M8.29 20.251c7.547...",
                "M22 12c0-5.523...",
                "M12 2.163c3.204...",
              ].map((d, idx) => (
                <Link key={idx} href="#" className="text-slate-500 hover:text-slate-700">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
