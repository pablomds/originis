"use client"

import { ArrowLeft, Globe, BookOpen, Clock, Users, MessageSquare, Play } from "lucide-react"
import Button from '@mui/material/Button';
import { JSX } from "react";
import { HeaderDictionaryButton } from "@/components/Dictionary/header-dictionary-button";

// Définition des interfaces pour les props
interface SicilianHistoryPageProps {
    onTabChange?: (tab: string) => void
}

interface HistoricalPeriodProps {
    year: string
    title: string
    description: string
    impact: string
}

interface LiteraryPeriodProps {
    period: string
    description: string
    notableWorks: string[]
}

export default function SicilianHistoryPage({ onTabChange }: SicilianHistoryPageProps) {
    // Fonction pour gérer le changement d'onglet
    const handleTabChange = (tab: string): void => {
        if (onTabChange) {
            onTabChange(tab)
        }
    }

    return (
        <div className="min-h-screen bg-[#f8f7ff]">
            
            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {/* Back Button and Progress */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <button
                        onClick={() => handleTabChange("overview")}
                        className="flex items-center text-indigo-600 mb-4 md:mb-0"
                    >
                        <ArrowLeft className="h-5 w-5 mr-1" />
                        <span>Culture</span>
                    </button>

                    <div className="w-full md:w-auto flex items-center gap-2">
                        <span className="text-sm text-slate-500">History Progress:</span>
                        <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-600/50 z-10"></div>
                    <img
                        src="/Sicily-culture-banner.png"
                        alt="Ancient Sicily"
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sicilian History</h1>
                        <p className="text-white/90 max-w-2xl">
                            Explore the rich tapestry of Sicily's past, from ancient civilizations to modern times, and how it shaped
                            the unique Sicilian dialect.
                        </p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex overflow-x-auto mb-6 pb-2 scrollbar-hide">
                    <button
                        onClick={() => handleTabChange("overview")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-white text-gray-700 border-2 border-gray-200 hover:bg-indigo-100 hover:text-indigo-700 hover:border-indigo-200 font-medium flex-shrink-0 hover:cursor-pointer"
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => handleTabChange("history")}
                        className="whitespace-nowrap px-4 py-2 mr-2 rounded-full bg-amber-100 border-2 border-amber-200 text-amber-700 flex-shrink-0 hover:cursor-pointer"
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

                {/* Main Content */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Historical Background</h2>
                        <p className="text-slate-600">
                            Sicily's strategic position in the Mediterranean has made it a crossroads of civilizations for millennia,
                            each leaving their mark on the island's language and culture. This historical complexity is reflected in
                            the Sicilian dialect, which contains elements from numerous languages brought by conquerors, traders, and
                            settlers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-amber-50 rounded-lg p-4">
                            <h3 className="font-medium mb-2 flex items-center">
                                <Clock className="h-5 w-5 mr-2 text-amber-600" />
                                Key Historical Periods
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Ancient Greek colonization (8th century BC)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Roman conquest (3rd century BC)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Arab domination (9th-11th century)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Norman conquest (11th century)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Spanish rule (13th-19th century)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-amber-100 text-amber-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                                        •
                                    </span>
                                    <span>Italian unification (1861)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <div className="bg-slate-50 rounded-lg p-4 h-full">
                                <h3 className="font-medium mb-3">Historical Impact on Language</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Each period of Sicily's history has contributed unique linguistic elements to the Sicilian dialect,
                                    creating a rich tapestry of vocabulary, grammar, and pronunciation:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="border border-gray-200 rounded-lg p-3">
                                        <h4 className="text-sm font-medium">Greek Influence</h4>
                                        <p className="text-xs text-slate-600">
                                            Introduced thousands of words and place names, especially in eastern Sicily
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3">
                                        <h4 className="text-sm font-medium">Latin Foundation</h4>
                                        <p className="text-xs text-slate-600">
                                            Provided the core grammatical structure and vocabulary base
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3">
                                        <h4 className="text-sm font-medium">Arabic Contributions</h4>
                                        <p className="text-xs text-slate-600">
                                            Added ~500 words related to agriculture, commerce, and science
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-3">
                                        <h4 className="text-sm font-medium">Norman French Elements</h4>
                                        <p className="text-xs text-slate-600">Introduced courtly and administrative terminology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative pl-6 ml-3 space-y-8 mb-8">
                        <h3 className="text-lg font-semibold -ml-9 mb-6">Historical Timeline</h3>

                    </div>

                    <div className="relative border-l-2 border-amber-200 pl-6 ml-3 space-y-8 mb-8">

                        <HistoricalPeriod
                            year="8th century BC"
                            title="Greek Colonization"
                            description="Greek settlers established colonies across Sicily, introducing their language and culture. Many Greek words remain in Sicilian today, especially in eastern Sicily."
                            impact="Linguistic Impact: Introduction of Greek vocabulary, especially for everyday objects, emotions, and place names."
                        />

                        <HistoricalPeriod
                            year="3rd century BC"
                            title="Roman Rule"
                            description="Sicily became Rome's first province outside the Italian peninsula. Latin gradually replaced Greek as the administrative language, forming the base of modern Sicilian."
                            impact="Linguistic Impact: Latin became the foundation of Sicilian, providing its basic grammatical structure and core vocabulary."
                        />

                        <HistoricalPeriod
                            year="9th-11th century"
                            title="Arab Domination"
                            description="Arabs ruled Sicily for over 200 years, introducing advanced agricultural techniques, new crops, and scientific knowledge."
                            impact="Linguistic Impact: Introduction of approximately 500 Arabic-derived words related to agriculture, water management, commerce, and science."
                        />

                        <HistoricalPeriod
                            year="11th-13th century"
                            title="Norman Conquest"
                            description="The Normans conquered Sicily from the Arabs, establishing a kingdom that became one of Europe's most advanced states."
                            impact="Linguistic Impact: Introduction of Norman French vocabulary and the development of the first standardized literary language in the Italian peninsula."
                        />

                        <HistoricalPeriod
                            year="19th century"
                            title="Italian Unification"
                            description="After Italian unification in 1861, standard Italian became the official language. Sicilian was discouraged in formal education."
                            impact="Linguistic Impact: Standardized Italian began to replace Sicilian in official contexts, education, and media."
                        />
                    </div>

                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-4">Literary Heritage</h3>
                        <p className="text-slate-600 mb-6">
                            Throughout its history, Sicily has produced a rich literary tradition in the Sicilian language, reflecting
                            the island's complex cultural identity and historical experiences.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <LiteraryPeriod
                                period="Medieval Period (13th-14th century)"
                                description="The Sicilian School of poetry under Frederick II produced the first literary standard in Italy, influencing Dante and Petrarch."
                                notableWorks={["Contrasto by Cielo d'Alcamo", 'Poetry of Giacomo da Lentini']}
                            />

                            <LiteraryPeriod
                                period="Renaissance (15th-16th century)"
                                description="Sicilian literature flourished with poetry, plays, and religious texts that captured local traditions and historical events."
                                notableWorks={["Poetry of Antonio Veneziano", "Works of Claudio Mario Arezzo"]}
                            />

                            <LiteraryPeriod
                                period="Modern Era (18th-21st century)"
                                description="From Giovanni Meli to modern authors, Sicilian literature has continued to evolve while preserving the language's unique character."
                                notableWorks={["Don Chisciotti e Sanciu Panza by Giovanni Meli", "Early works of Luigi Pirandello"]}
                            />
                        </div>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-5 mb-6">
                        <h3 className="font-medium mb-3">Historical Artifacts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <img
                                    src="/Palermo.png"
                                    alt="Ancient Greek Temple"
                                    className="w-full h-48 object-cover rounded-lg mb-3"
                                />
                                <h4 className="text-sm font-medium">Greek Temples of Agrigento</h4>
                                <p className="text-xs text-slate-600">
                                    The Valley of the Temples contains some of the best-preserved Greek temples outside of Greece,
                                    testifying to the profound Greek influence on Sicilian culture and language.
                                </p>
                            </div>

                            <div>
                                <img
                                    src="/Agrigento.png"
                                    alt="Norman Palace"
                                    className="w-full h-48 object-cover rounded-lg mb-3"
                                />
                                <h4 className="text-sm font-medium">Palazzo dei Normanni (Palermo)</h4>
                                <p className="text-xs text-slate-600">
                                    This royal palace showcases the unique Norman-Arab-Byzantine architectural style that developed in
                                    Sicily, reflecting the cultural fusion that also shaped the Sicilian language.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Resources */}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center text-sm text-slate-500">
                <p>© 2025 Originis. All rights reserved.</p>
            </footer>
        </div>
    )
}

function HistoricalPeriod({ year, title, description, impact }: HistoricalPeriodProps): JSX.Element {
    return (
        <div className="relative">
            <div className="absolute -left-9 mt-1 w-5 h-5 rounded-full bg-amber-500 border-4 border-white"></div>
            <div>
                <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">{year}</span>
                <h3 className="text-lg font-medium mt-1">{title}</h3>
                <p className="text-sm text-slate-600 mt-1">{description}</p>
                <p className="text-sm text-amber-700 mt-2 italic">{impact}</p>
            </div>
        </div>
    )
}

function LiteraryPeriod({ period, description, notableWorks }: LiteraryPeriodProps): JSX.Element {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h4 className="font-medium mb-2">{period}</h4>
            <p className="text-sm text-slate-600 mb-3">{description}</p>
            <div>
                <h5 className="text-xs font-medium text-slate-500 mb-1">Notable Works:</h5>
                <ul className="text-xs text-slate-600 space-y-1">
                    {notableWorks.map((work, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-amber-500 mr-1">•</span>
                            <span>{work}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}