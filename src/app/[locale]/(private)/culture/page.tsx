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
} from "lucide-react"
import { CultureMenu } from "@/components/CultureMenu/CultureMenu";
import { useTranslations } from "next-intl";

interface CultureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function SicilianCulturePage() {
    const t = useTranslations("CulturePage");
    const quickFactsList: string[] = t.raw('sicilian_culture.quick_facts.list');

    return (
      <div className="min-h-screen bg-[#f8f7ff]">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 max-w-6xl">
          {/* Back Button and Progress */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <button className="flex items-center text-indigo-600 mb-4 md:mb-0">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Sicilian</span>
            </button>

            <div className="w-full md:w-auto flex items-center gap-2">
              <span className="text-sm text-slate-500">
                {t("progress_bar.culture_progress")}
              </span>
              <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full"
                  style={{ width: "40%" }}
                ></div>
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
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t("sicilian_culture.title")}
              </h1>
              <p className="text-white/90 max-w-2xl">
                {t("sicilian_culture.description")}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <CultureMenu />

          {/* Content */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t("sicilian_culture.the_sicilian_dialect.title")}
                </h2>
                <>
                  {t("sicilian_culture.the_sicilian_dialect.description")
                    .split("\n")
                    .map((line, idx) => (
                      <p
                        className="text-slate-600 mb-4 text-sm md:text-base"
                        key={idx}
                      >
                        {line} <br />
                      </p>
                    ))}
                </>
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <button className="bg-indigo-600 hover:bg-indigo-700 font-medium text-white rounded-md px-4 h-10">
                    {t(
                      "sicilian_culture.the_sicilian_dialect.buttons.start_learning"
                    )}
                  </button>
                  <button className="gap-1 flex justify-center items-center font-medium border-2 border-gray-200 text-gray-700 rounded-md px-3 h-10 hover:bg-slate-200">
                    <Play className="h-4 w-4" />
                    <span className="text-sm">
                      {t(
                        "sicilian_culture.the_sicilian_dialect.buttons.listen_to_examples"
                      )}
                    </span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-indigo-600" />
                    {t("sicilian_culture.quick_facts.title")}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {quickFactsList.map((item, index) => (
                      <li key={index} className="flex items-center">
                        {" "}
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                          •
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-amber-600" />
                    {t("sicilian_culture.did_you_know.title")}
                  </h3>
                  <p className="text-sm text-slate-700">
                    {t("sicilian_culture.did_you_know.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">
                {t("continue_your_cultural_journey.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <CultureCard
                  icon={<Clock className="h-5 w-5" />}
                  title={t("continue_your_cultural_journey.historical_timeline.title")}
                  description="Explore key events in Sicilian history"
                />
                <CultureCard
                  icon={<MapPin className="h-5 w-5" />}
                  title={t("continue_your_cultural_journey.regional_variations.title")}
                  description="Discover dialect differences across Sicily"
                />
                <CultureCard
                  icon={<Music className="h-5 w-5" />}
                  title={t("continue_your_cultural_journey.traditional_music.title")}
                  description="Listen to authentic Sicilian folk songs"
                />
                <CultureCard
                  icon={<Utensils className="h-5 w-5" />}
                  title={t("continue_your_cultural_journey.culinary_traditions.title")}
                  description="Learn about Sicily's famous cuisine"
                />
              </div>
            </div>
          </div>

          {/* Learning Resources */}
          <section className="mb-8 mt-6">
            <h2 className="text-lg font-semibold mb-4">{t("continue_learning.title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="h-32 md:h-40 bg-indigo-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-indigo-300" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{t("continue_learning.basic_sentence.title")}</h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Learn essential Sicilian expressions
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center flex-1 mr-2">
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-green-500 h-full rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium ml-2">25%</span>
                    </div>
                    <button className="gap-1 flex justify-center items-center text-black whitespace-nowrap">
                      <Play className="h-4 w-4" />
                      <span className="text-sm">{t("continue_learning.basic_sentence.continue")}</span>
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
                  <h3 className="font-medium mb-1">{t("continue_learning.community_forum.title")}</h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {t("continue_learning.community_forum.description")}
                  </p>
                  <button className="w-full gap-1 flex justify-center items-center text-white bg-black rounded-sm h-10">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-sm">{t("continue_learning.community_forum.buttons.join_conversation")}</span>
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
                  <h3 className="font-medium mb-1">{t("continue_learning.folk_songs.title")}</h3>
                  <p className="text-sm text-slate-500 mb-3">
                    {t("continue_learning.folk_songs.title")}
                  </p>
                  <button className="w-full gap-1 flex justify-center items-center text-black border border-gray-200 rounded-sm h-10 hover:bg-slate-200">
                    <Play className="h-4 w-4" />
                    <span className="text-sm">{t("continue_learning.folk_songs.buttons.explore_songs")}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
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