"use client"

import { useState } from "react"
import {
    ArrowLeft,
    Globe,
    BookOpen,
    Clock,
    MapPin,
    Users,
    Music,
    Utensils,
    MessageSquare,
    Play,
    User,
} from "lucide-react"
import Button from '@mui/material/Button';
import { HeaderDictionaryButton } from "@/components/Dictionary/header-dictionary-button"

interface SicilianCulturePageProps {
    onTabChange?: (tab: string) => void;
}

interface CultureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function SicilianCulturePage({ onTabChange }: SicilianCulturePageProps): React.ReactElement {
    const [expandedSection, setExpandedSection] = useState<string | null>("history")

    const toggleSection = (section: string): void => {
        if (expandedSection === section) {
            setExpandedSection(null)
        } else {
            setExpandedSection(section)
        }
    }

    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string): void => {
        if (onTabChange) {
            onTabChange(tab)
        }
    }

    return (
        <div className="min-h-screen bg-[#f8f7ff]">
            {/* Header */}
            <header className="flex items-center justify-center px-6 py-3 bg-white border-b border-gray-200">
                <div className="max-w-6xl w-full mx-auto flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-indigo-600 font-bold">
                            <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">O</span>
                            Originis
                        </div>
                    </div>

                    <HeaderDictionaryButton/>

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

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {/* Back Button and Progress */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <button className="flex items-center text-indigo-600 mb-4 md:mb-0">
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        <span>Sicilian</span>
                    </button>

                    <div className="w-full md:w-auto flex items-center gap-2">
                        <span className="text-sm text-slate-500">Culture Progress:</span>
                        <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <span className="text-sm font-medium">40%</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-600/50 z-10"></div>
                    <img
                        src="/Sicily-culture-banner.png"
                        alt="Sicily Landscape"
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sicilian Culture</h1>
                        <p className="text-white/90 max-w-2xl">
                            Discover the rich heritage, fascinating history, and unique cultural aspects of Sicily and its distinctive
                            dialect.
                        </p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
                    <button
                        onClick={() => handleTabChange("overview")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-indigo-100 text-indigo-700 border-2 border-indigo-200 font-medium flex-shrink-0 hover:cursor-pointer"
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleTabChange("history")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-white border-2 border-gray-200 flex-shrink-0 hover:bg-amber-100 hover:text-amber-700 hover:border-amber-200 hover:cursor-pointer"
                    >
                        History
                    </button>
                    <button
                        onClick={() => handleTabChange("language")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-white border-2 border-gray-200 flex-shrink-0 hover:bg-pink-100 hover:text-pink-700 hover:border-pink-200 hover:cursor-pointer"
                    >
                        Language
                    </button>
                    <button
                        onClick={() => handleTabChange("phonetics")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-white border-2 border-gray-200 flex-shrink-0 hover:bg-violet-100 hover:text-violet-700 hover:border-violet-200 hover:cursor-pointer"
                    >
                        Phonetics
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-bold mb-4">The Sicilian Dialect</h2>
                            <p className="text-slate-600 mb-4 text-sm md:text-base">
                                Sicilian (sicilianu) is a Romance language spoken by about 5 million people in Sicily and southern
                                Calabria. Despite often being referred to as a dialect of Italian, linguistically it's considered a
                                distinct language with its own literary tradition.
                            </p>
                            <p className="text-slate-600 mb-4 text-sm md:text-base">
                                The language reflects Sicily's rich and complex history, with influences from Greek, Arabic, Norman
                                French, Occitan, Catalan, and Spanish, making it a fascinating linguistic tapestry.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                <button className="bg-indigo-600 hover:bg-indigo-700 font-medium text-white rounded-md px-4 h-10">Start Learning</button>
                                <button className="gap-1 flex justify-center items-center font-medium border-2 border-gray-200 text-gray-700 rounded-md px-3 h-10 hover:bg-slate-200">
                                    <Play className="h-4 w-4" />
                                    <span className="text-sm">Listen to Examples</span>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-indigo-50 rounded-lg p-4">
                                <h3 className="font-medium mb-2 flex items-center">
                                    <Globe className="h-5 w-5 mr-2 text-indigo-600" />
                                    Quick Facts
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start">
                                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>Spoken by approximately 5 million people</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>UNESCO recognizes Sicilian as a minority language</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>Has a rich literary tradition dating back to the 13th century</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                                            •
                                        </span>
                                        <span>Features influences from Greek, Arabic, Norman French, and Spanish</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 rounded-lg p-4">
                                <h3 className="font-medium mb-2 flex items-center">
                                    <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
                                    Did You Know?
                                </h3>
                                <p className="text-sm text-slate-700">
                                    The oldest literary text in Sicilian dates back to 1230, predating Dante's works in Italian. The
                                    Sicilian School of poetry under Frederick II influenced the development of Italian literature.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Continue Your Cultural Journey</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <CultureCard
                                icon={<Clock className="h-5 w-5" />}
                                title="Historical Timeline"
                                description="Explore key events in Sicilian history"
                            />
                            <CultureCard
                                icon={<MapPin className="h-5 w-5" />}
                                title="Regional Variations"
                                description="Discover dialect differences across Sicily"
                            />
                            <CultureCard
                                icon={<Music className="h-5 w-5" />}
                                title="Traditional Music"
                                description="Listen to authentic Sicilian folk songs"
                            />
                            <CultureCard
                                icon={<Utensils className="h-5 w-5" />}
                                title="Culinary Traditions"
                                description="Learn about Sicily's famous cuisine"
                            />
                        </div>
                    </div>
                </div>

                {/* Learning Resources */}
                <section className="mb-8 mt-6">
                    <h2 className="text-lg font-semibold mb-4">Continue Learning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <div className="h-32 md:h-40 bg-indigo-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BookOpen className="h-12 w-12 text-indigo-300" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-1">Basic Phrases</h3>
                                <p className="text-sm text-slate-500 mb-3">
                                    Learn essential Sicilian expressions
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center flex-1 mr-2">
                                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-green-500 h-full rounded-full" style={{ width: "25%" }}></div>
                                        </div>
                                        <span className="text-xs font-medium ml-2">25%</span>
                                    </div>
                                    <button className="gap-1 flex justify-center items-center text-black whitespace-nowrap">
                                        <Play className="h-4 w-4" />
                                        <span className="text-sm">Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <div className="h-32 md:h-40 bg-amber-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Users className="h-12 w-12 text-amber-300" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-1">Community Forum</h3>
                                <p className="text-sm text-slate-500 mb-3">Join discussions with other learners</p>
                                <button className="w-full gap-1 flex justify-center items-center text-white bg-black rounded-sm h-10">
                                    <MessageSquare className="h-4 w-4" />
                                    <span className="text-sm">Join Conversation</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <div className="h-32 md:h-40 bg-green-100 relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Music className="h-12 w-12 text-green-300" />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-1">Folk Songs</h3>
                                <p className="text-sm text-slate-500 mb-3">Learn Sicilian through traditional music</p>
                                <button className="w-full gap-1 flex justify-center items-center text-black border border-gray-200 rounded-sm h-10 hover:bg-slate-200">
                                    <Play className="h-4 w-4" />
                                    <span className="text-sm">Explore Songs</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-4 px-4 text-center text-sm text-slate-500">
                <p>© 2025 Originis. All rights reserved.</p>
            </footer>
        </div>
    )
}

function CultureCard({ icon, title, description }: CultureCardProps): React.ReactElement {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
                <div className="bg-indigo-100 text-indigo-600 rounded-full p-2 flex-shrink-0">{icon}</div>
                <h3 className="font-medium text-sm md:text-base">{title}</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-600">{description}</p>
        </div>
    )
}