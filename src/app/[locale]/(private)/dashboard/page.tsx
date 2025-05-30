"use client"

import { ArrowLeft, Trophy, Building2, BookOpen, MessageSquare, Music, Quote } from "lucide-react"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import { useTranslations } from "next-intl"

interface LearningCardProps {
    complete: string
    icon: ReactNode
    title: string
    progress: number
    bgColor: string
    iconBgColor: string
    tab: string
}

interface PartnerCardProps {
    name: string
    role: string
    imageSrc?: string
}

export default function DashboardPage() {
    const t = useTranslations("DashboardPage");
    const router = useRouter();

    const handleTabChange = (tab: string): void => {
        router.push(tab);
    }
    
    return (
        <div className="min-h-screen bg-[#f5f7ff]">
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
                            <h2 className="text-2xl font-bold mb-1">{t('daily_challenge.title')}</h2>
                            <p className="text-white/90">{t('daily_challenge.description')}</p>
                        </div>
                        <div className="bg-white/20 rounded-full p-4">
                            <Trophy className="h-8 w-8" />
                        </div>
                    </div>
                </div>

                {/* Continue Learning */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('continue_learning.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <LearningCard
                            icon={<Building2 className="h-6 w-6 text-amber-600" />}
                            title={t('continue_learning.culture')}
                            progress={40}
                            bgColor="bg-amber-100"
                            iconBgColor="bg-amber-50"
                            tab="culture"
                            complete={t('continue_learning.complete')}
                        />
                        <LearningCard
                            icon={<BookOpen className="h-6 w-6 text-green-600" />}
                            title={t('continue_learning.lessons')}
                            progress={80}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                            tab="lessons"
                            complete={t('continue_learning.complete')}
                        />
                        <LearningCard
                            icon={<MessageSquare className="h-6 w-6 text-teal-600" />}
                            title={t('continue_learning.ia_chat')}
                            progress={30}
                            bgColor="bg-teal-100"
                            iconBgColor="bg-teal-50"
                            tab=""
                            complete={t('continue_learning.complete')}
                        />
                        <LearningCard
                            icon={<Music className="h-6 w-6 text-green-600" />}
                            title={t('continue_learning.songs')}
                            progress={20}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                            tab=""
                            complete={t('continue_learning.complete')}
                        />
                        <LearningCard
                            icon={<Quote className="h-6 w-6 text-green-600" />}
                            title={t('continue_learning.phonetic')}
                            progress={60}
                            bgColor="bg-green-100"
                            iconBgColor="bg-green-50"
                            tab=""
                            complete={t('continue_learning.complete')}
                        />
                        <LearningCard
                            icon={<Quote className="h-6 w-6 text-pink-600" />}
                            title={t('continue_learning.social_network')}
                            progress={70}
                            bgColor="bg-pink-100"
                            iconBgColor="bg-pink-50"
                            tab=""
                            complete={t('continue_learning.complete')}
                        />
                    </div>
                </section>

                {/* Practice Partners */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-6">{t('pratice_partners.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PartnerCard name="Ahmed K." role={t('pratice_partners.native_speaker')} imageSrc="/placeholder.svg?height=60&width=60" />
                        <PartnerCard name="Sarah M." role={t('pratice_partners.advanced_speaker')} imageSrc="/placeholder.svg?height=60&width=60" />
                        <PartnerCard name="Karim L." role={t('pratice_partners.native_speaker')} imageSrc="/placeholder.svg?height=60&width=60" />
                    </div>
                </section>
            </main>
        </div>
    )
}

function LearningCard({ icon, title, progress, iconBgColor, tab, complete }: LearningCardProps) {
    const router = useRouter();

    const handleTabChange = (tab: string): void => {
        router.push(tab);
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => handleTabChange(tab)}>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className={`${iconBgColor} p-2 rounded-full`}>{icon}</div>
                    <h3 className="font-medium">{title}</h3>
                </div>
                <span className={`text-sm ${progress >= 60 ? "text-green-600" : "text-slate-500"}`}>{progress}% {complete}</span>
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