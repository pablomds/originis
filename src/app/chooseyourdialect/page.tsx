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