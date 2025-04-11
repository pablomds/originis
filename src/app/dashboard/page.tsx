"use client"

import { ArrowLeft, Trophy, Building2, BookOpen, MessageSquare, Music, Quote } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

interface DashboardPageProps {
    onTabChange?: (tab: string) => void
}

interface LearningCardProps {
    icon: ReactNode
    title: string
    progress: number
    bgColor: string
    iconBgColor: string
}

interface PartnerCardProps {
    name: string
    role: string
    imageSrc?: string
}

export default function DashboardPage({ onTabChange }: DashboardPageProps) {
    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string) => {
        if (onTabChange) {
            onTabChange(tab)
        }
    }

    return (
        <div className="min-h-screen bg-[#f5f7ff]">
            {/* Header */}
            <header className="flex justify-center px-6 py-3 bg-white border-b border-gray-200">
                <div className="max-w-6xl w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-indigo-600 font-bold">
                            <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">O</span>
                            Originis
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-1"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            Dictionary
                        </button>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            15
                        </div>
                        <button className="rounded-full p-1 hover:bg-slate-100">
                            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard%20Page-5wz0xbyyIKVRlHli50K0MxrHykhfXD.png"
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </button>
                    </div>
                </div>

            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {/* Back Button */}
                <div className="mb-6">
                    <button onClick={() => handleTabChange("dialectSelection")} className="flex items-center text-indigo-600">
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        <span className="text-lg">Sicilian</span>
                    </button>
                </div>

                {/* Daily Challenge */}
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-6 mb-8 text-white relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Daily Challenge</h2>
                            <p className="text-white/90">Complete today's challenge to earn extra points!</p>
                        </div>
                        <div className="bg-white/20 rounded-full p-4">
                            <Trophy className="h-8 w-8" />
                        </div>
                    </div>
                </div>

                {/* Continue Learning */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <LearningCard
                            icon={<Building2 className="h-6 w-6 text-amber-600" />}
                            title="Culture"
                            progress={40}
                            bgColor="bg-amber-100"
                            iconBgColor="bg-amber-50"
                        />
                        <LearningCard
                            icon={<BookOpen className="h-6 w-6 text-green-600" />}
                            title="Lessons"
                            progress={80}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                        />
                        <LearningCard
                            icon={<MessageSquare className="h-6 w-6 text-teal-600" />}
                            title="IA Chat"
                            progress={30}
                            bgColor="bg-teal-100"
                            iconBgColor="bg-teal-50"
                        />
                        <LearningCard
                            icon={<Music className="h-6 w-6 text-green-600" />}
                            title="Songs"
                            progress={20}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                        />
                        <LearningCard
                            icon={<Quote className="h-6 w-6 text-green-600" />}
                            title="Phonetic"
                            progress={60}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                        />
                        <LearningCard
                            icon={<Quote className="h-6 w-6 text-pink-600" />}
                            title="Social Network"
                            progress={70}
                            bgColor="bg-pink-100"
                            iconBgColor="bg-pink-50"
                        />
                    </div>
                </section>

                {/* Practice Partners */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">Practice Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PartnerCard name="Ahmed K." role="Native Speaker" imageSrc="/placeholder.svg?height=60&width=60" />
                        <PartnerCard name="Sarah M." role="Advanced Speaker" imageSrc="/placeholder.svg?height=60&width=60" />
                        <PartnerCard name="Karim L." role="Native Speaker" imageSrc="/placeholder.svg?height=60&width=60" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white py-4 px-6 border-t border-gray-200">
                <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-slate-500">© 2025 Originis. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="text-slate-500 hover:text-slate-700">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-slate-700">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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

function LearningCard({ icon, title, progress, bgColor, iconBgColor }: LearningCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`${iconBgColor} p-2 rounded-full`}>{icon}</div>
                    <h3 className="font-medium">{title}</h3>
                </div>
                <span className={`text-sm ${progress >= 60 ? "text-green-600" : "text-slate-500"}`}>{progress}% Complete</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}

function PartnerCard({ name, role, imageSrc }: PartnerCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200     p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src={imageSrc || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
                </div>
                <div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-slate-500">{role}</p>
                </div>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-full text-sm">Connect</button>
        </div>
    )
}