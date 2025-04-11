"use client"

import { Search, Star, Heart, Globe, Moon, Flame } from "lucide-react"
import Link from "next/link"
import { ReactNode, MouseEvent } from "react"

interface DialectSelectionPageProps {
    onTabChange?: (tab: string) => void
}

interface DialectCardProps {
    icon: ReactNode
    name: string
    region: string
    learners: string
    onClick?: () => void
}

export default function DialectSelectionPage({ onTabChange }: DialectSelectionPageProps) {
    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string) => {
        if (onTabChange) {
            onTabChange(tab)
        }
    }

    return (
        <div className="min-h-screen bg-[#f5f7ff]">
            {/* Header */}
            <header className="flex items-center justify-center px-6 py-3 bg-white border-b border-gray-200">
                <div className="max-w-6xl w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-indigo-600 font-bold">
                            <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">O</span>
                            Originis
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                15
                            </div>
                            <button className="rounded-full p-1 hover:bg-slate-100">
                                <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                                    <img
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dialect%20selection%20page-2WLi31MWeF6rZ3kjatG6ZbScWHGyFZ.png"
                                        alt="Profile"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {/* My Lessons */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">My lessons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name="Sicilian"
                            region="Italian"
                            learners="12K Learners"
                            onClick={() => handleTabChange("dashboard")}
                        />
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name="Corsican"
                            region="Mediterranean"
                            learners="12K Learners"
                        />
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name="Algerian"
                            region="North African"
                            learners="12K Learners"
                        />
                    </div>
                </section>

                {/* Choose Your Dialect */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Choose Your Dialecte</h2>
                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a dialecte..."
                            className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </section>

                {/* Popular Dialectes */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Popular Dialectes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name="Algerian"
                            region="North African"
                            learners="12K Learners"
                        />
                        <DialectCard
                            icon={<Heart className="h-5 w-5" />}
                            name="Egyptian"
                            region="Middle Eastern"
                            learners="15K Learners"
                        />
                        <DialectCard
                            icon={<Globe className="h-5 w-5" />}
                            name="Moroccan"
                            region="North African"
                            learners="10K Learners"
                        />
                    </div>
                </section>

                {/* All Dialectes */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">All Dialectes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name="Lebanese"
                            region="Middle Eastern"
                            learners="8K Learners"
                        />
                        <DialectCard
                            icon={<Flame className="h-5 w-5" />}
                            name="Tunisian"
                            region="North African"
                            learners="6K Learners"
                        />
                        <DialectCard
                            icon={<Flame className="h-5 w-5" />}
                            name="Syrian"
                            region="Middle Eastern"
                            learners="7K Learners"
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name="Lebanese"
                            region="Middle Eastern"
                            learners="8K Learners"
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name="Lebanese"
                            region="Middle Eastern"
                            learners="8K Learners"
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name="Lebanese"
                            region="Middle Eastern"
                            learners="8K Learners"
                        />
                    </div>
                </section>
            </main>

            {/* Footer */}
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
                        <Link href="#" className="text-slate-500 hover:text-slate-700">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-slate-700">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-slate-700">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function DialectCard({ icon, name, region, learners, onClick }: DialectCardProps) {
    return (
        <div
            className="bg-white rounded-lg shadow-sm border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-slate-500">{region}</p>
                </div>
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full">{icon}</div>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-600">{learners}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </div>
        </div>
    )
}