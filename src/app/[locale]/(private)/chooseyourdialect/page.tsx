"use client"

import { useRouter } from "next/navigation"
import { Search, Star, Heart, Globe, Moon, Flame } from "lucide-react"
import { ReactNode } from "react"
import { useTranslations } from "next-intl"

interface DialectCardProps {
    icon: ReactNode
    name: string
    region: string
    learners: string
    onClick?: () => void
}

export default function DialectSelectionPage() {
    const t = useTranslations("ChooseYourDialectPage");
    // Fonction pour gérer le changement d'onglet
    const router = useRouter();
    
        const handleTabChange = (tab: string): void => {
            router.push(tab);
        }

    return (
        <div className="min-h-screen bg-[#f5f7ff]">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 max-w-6xl">
                {/* My Lessons */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('my_lessons.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name={t('my_lessons.sicilian.title')}
                            region={t('my_lessons.sicilian.region')}
                            learners={"12K " + t('my_lessons.learners')}
                            onClick={() => handleTabChange("dashboard")}
                        />
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name={t('my_lessons.corsican.title')}
                            region={t('my_lessons.corsican.region')}
                            learners={"12K " + t('my_lessons.learners')}
                        />
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name={t('my_lessons.algerian.title')}
                            region={t('my_lessons.algerian.region')}
                            learners={"12K " + t('my_lessons.learners')}
                        />
                    </div>
                </section>

                {/* Choose Your Dialect */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('choose_your_dialect.title')}</h2>
                    <div className="relative mb-8">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder={t('choose_your_dialect.search_input.placeholder')}
                            className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </section>

                {/* Popular Dialectes */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('choose_your_dialect.popular_dialects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Star className="h-5 w-5" />}
                            name={t('choose_your_dialect.popular_dialects.algerian.title')}
                            region={t('choose_your_dialect.popular_dialects.algerian.region')}
                            learners={"12K " + t('choose_your_dialect.popular_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Heart className="h-5 w-5" />}
                            name={t('choose_your_dialect.popular_dialects.egyptian.title')}
                            region={t('choose_your_dialect.popular_dialects.egyptian.region')}
                            learners={"15K " + t('choose_your_dialect.popular_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Globe className="h-5 w-5" />}
                            name={t('choose_your_dialect.popular_dialects.morrocan.title')}
                            region={t('choose_your_dialect.popular_dialects.morrocan.region')}
                            learners={"17K " + t('choose_your_dialect.popular_dialects.learners')}
                        />
                    </div>
                </section>

                {/* All Dialectes */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('all_dialects.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name={t('all_dialects.lebanese.title')}
                            region={t('all_dialects.lebanese.region')}
                            learners={"8K " + t('all_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Flame className="h-5 w-5" />}
                            name={t('all_dialects.tunisian.title')}
                            region={t('all_dialects.tunisian.region')}
                            learners={"6K "+ t('all_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Flame className="h-5 w-5" />}
                            name={t('all_dialects.syrian.title')}
                            region={t('all_dialects.syrian.region')}
                            learners={"7K "+ t('all_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name={t('all_dialects.morrocan.title')}
                            region={t('all_dialects.morrocan.region')}
                            learners={"8K "+ t('all_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name={t('all_dialects.algerian.title')}
                            region={t('all_dialects.algerian.region')}
                            learners={"8K "+ t('all_dialects.learners')}
                        />
                        <DialectCard
                            icon={<Moon className="h-5 w-5" />}
                            name={t('all_dialects.sicilian.title')}
                            region={t('all_dialects.sicilian.region')}
                            learners={"8K "+ t('all_dialects.learners')}
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