"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, BookOpen, Volume2, X, Info, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"

export default function LessonPage({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  const [activeLesson, setActiveLesson] = useState(1)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  // Détecter si l'appareil est mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Fermer le tooltip quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Fonction pour gérer le changement d'onglet
  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  // Fonction pour afficher le tooltip
  const handleVerbClick = (verbId: string) => {
    if (isMobile) {
      setShowTooltip(showTooltip === verbId ? null : verbId)
    }
  }

  // Fonction pour jouer l'audio
  const playAudio = (audioId: string) => {
    console.log(`Playing audio: ${audioId}`)
    // Ici, vous pourriez implémenter la lecture audio réelle
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Back Button and Progress */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <button
            onClick={() => handleTabChange("lessons")}
            className="flex items-center text-indigo-600 mb-4 md:mb-0 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Back to menu</span>
          </button>

          <div className="w-full md:w-auto flex items-center gap-2">
            <span className="text-sm text-slate-500">Course progress:</span>
            <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "15%" }}></div>
            </div>
            <span className="text-sm font-medium">15%</span>
          </div>
        </div>

        {/* Lesson Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-indigo-100 text-indigo-700 border-0">Niveau 1</Badge>
                <Badge className="bg-green-100 text-green-700 border-0">Débutant</Badge>
              </div>
              <h1 className="text-2xl font-bold mb-1">Lesson {activeLesson}: Greetings and Introductions</h1>
              <p className="text-slate-600">Learn how to introduce yourself and greet someone in Sicilian.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1 border border-gray-200">
                <BookOpen className="h-4 w-4" />
                Vocabulary
              </Button>
              <Button className="gap-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Volume2 className="h-4 w-4" />
                Listen
              </Button>
            </div>
          </div>
        </div>

        {/* Conversation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 bg-indigo-50 border-b border-gray-200">
            <h2 className="font-semibold text-indigo-700 flex items-center gap-2">
              <Info className="h-5 w-5" />A meeting in a café
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              {/* Message 1 */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="bg-indigo-50 rounded-lg p-3 relative">
                    <p className="text-slate-800">
                      Bongiornu! Comu{" "}
                      <VerbTooltip
                        verb="siti"
                        verbId="siti"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Essiri (To be)",
                          tense: "Present",
                          conjugation: [
                            "Iu sugnu - I am",
                            "Tu sì - You are (singular)",
                            "Iddu/Idda è - He/She is",
                            "Nuatri semu - We are",
                            "Vuatri siti - You are (plural)",
                            "Iddi sunnu - They are",
                          ],
                        }}
                      />
                      ?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">Good morning! How are you?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-1")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex gap-4 justify-end">
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-lg p-3 relative ml-auto max-w-[80%]">
                    <p className="text-slate-800">
                      Bongiornu! Iu{" "}
                      <VerbTooltip
                        verb="sugnu"
                        verbId="sugnu"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Essiri (To be)",
                          tense: "Present",
                          conjugation: [
                            "Iu sugnu - I am",
                            "Tu sì - You are (singular)",
                            "Iddu/Idda è - He/She is",
                            "Nuatri semu - We are",
                            "Vuatri siti - You are (plural)",
                            "Iddi sunnu - They are",
                          ],
                        }}
                      />{" "}
                      bonu, grazie. E vui?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">Good morning! I'm fine, thank you. And you?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-2")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600 font-bold">
                  L
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="bg-indigo-50 rounded-lg p-3 relative">
                    <p className="text-slate-800">
                      Iu{" "}
                      <VerbTooltip
                        verb="staiu"
                        verbId="staiu"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Stari (To be, to stay)",
                          tense: "Present",
                          conjugation: [
                            "Iu staiu - I am",
                            "Tu stai - You are (singular)",
                            "Iddu/Idda sta - He/She is",
                            "Nuatri stamu - We are",
                            "Vuatri stati - You are (plural)",
                            "Iddi stannu - They are",
                          ],
                        }}
                      />{" "}
                      bonu puru. Comu vi{" "}
                      <VerbTooltip
                        verb="chiamati"
                        verbId="chiamati"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Chiamari (To call)",
                          tense: "Present",
                          conjugation: [
                            "Iu chiamu - I call",
                            "Tu chiami - You call (singular)",
                            "Iddu/Idda chiama - He/She calls",
                            "Nuatri chiamamu - We call",
                            "Vuatri chiamati - You call (plural)",
                            "Iddi chiamanu - They call",
                          ],
                        }}
                      />
                      ?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">I'm fine too. What is your name?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-3")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Message 4 */}
              <div className="flex gap-4 justify-end">
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-lg p-3 relative ml-auto max-w-[80%]">
                    <p className="text-slate-800">
                      Iu mi{" "}
                      <VerbTooltip
                        verb="chiamu"
                        verbId="chiamu"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Chiamari (To call)",
                          tense: "Present",
                          conjugation: [
                            "Iu chiamu - I call",
                            "Tu chiami - You call (singular)",
                            "Iddu/Idda chiama - He/She calls",
                            "Nuatri chiamamu - We call",
                            "Vuatri chiamati - You call (plural)",
                            "Iddi chiamanu - They call",
                          ],
                        }}
                      />{" "}
                      Lucia. E vui?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">My name is Lucia. And you?</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-4")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600 font-bold">
                  L
                </div>
              </div>

              {/* Message 5 */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="bg-indigo-50 rounded-lg p-3 relative">
                    <p className="text-slate-800">
                      Piaciri, Lucia. Iu mi{" "}
                      <VerbTooltip
                        verb="chiamu"
                        verbId="chiamu2"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Chiamari (To call)",
                          tense: "Present",
                          conjugation: [
                            "Iu chiamu - I call",
                            "Tu chiami - You call (singular)",
                            "Iddu/Idda chiama - He/She calls",
                            "Nuatri chiamamu - We call",
                            "Vuatri chiamati - You call (plural)",
                            "Iddi chiamanu - They call",
                          ],
                        }}
                      />{" "}
                      Marco. Di unni{" "}
                      <VerbTooltip
                        verb="siti"
                        verbId="siti2"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Essiri (To be)",
                          tense: "Present",
                          conjugation: [
                            "Iu sugnu - I am",
                            "Tu sì - You are (singular)",
                            "Iddu/Idda è - He/She is",
                            "Nuatri semu - We are",
                            "Vuatri siti - You are (plural)",
                            "Iddi sunnu - They are",
                          ],
                        }}
                      />
                      ?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">
                      Nice to meet you, Lucia. My name is Marco. Where are you from?
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-5")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Message 6 */}
              <div className="flex gap-4 justify-end">
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-lg p-3 relative ml-auto max-w-[80%]">
                    <p className="text-slate-800">
                      Iu{" "}
                      <VerbTooltip
                        verb="sugnu"
                        verbId="sugnu2"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Essiri (To be)",
                          tense: "Present",
                          conjugation: [
                            "Iu sugnu - I am",
                            "Tu sì - You are (singular)",
                            "Iddu/Idda è - He/She is",
                            "Nuatri semu - We are",
                            "Vuatri siti - You are (plural)",
                            "Iddi sunnu - They are",
                          ],
                        }}
                      />{" "}
                      di Catania. E vui, di unni{" "}
                      <VerbTooltip
                        verb="viniti"
                        verbId="viniti"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Vèniri (To come)",
                          tense: "Present",
                          conjugation: [
                            "Iu vegnu - I come",
                            "Tu veni - You come (singular)",
                            "Iddu/Idda veni - He/She comes",
                            "Nuatri vinemu - We come",
                            "Vuatri viniti - You come (plural)",
                            "Iddi vennu - They come",
                          ],
                        }}
                      />
                      ?
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">
                      I am from Catania. And you, where are you from?
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-6")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600 font-bold">
                  L
                </div>
              </div>

              {/* Message 7 */}
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="bg-indigo-50 rounded-lg p-3 relative">
                    <p className="text-slate-800">
                      Iu{" "}
                      <VerbTooltip
                        verb="sugnu"
                        verbId="sugnu3"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Essiri (To be)",
                          tense: "Present",
                          conjugation: [
                            "Iu sugnu - I am",
                            "Tu sì - You are (singular)",
                            "Iddu/Idda è - He/She is",
                            "Nuatri semu - We are",
                            "Vuatri siti - You are (plural)",
                            "Iddi sunnu - They are",
                          ],
                        }}
                      />{" "}
                      di Palermu.{" "}
                      <VerbTooltip
                        verb="Parrati"
                        verbId="parrati"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Parrari (To speak)",
                          tense: "Present",
                          conjugation: [
                            "Iu parru - I speak",
                            "Tu parri - You speak (singular)",
                            "Iddu/Idda parra - He/She speaks",
                            "Nuatri parramu - We speak",
                            "Vuatri parrati - You speak (plural)",
                            "Iddi parranu - They speak",
                          ],
                        }}
                      />{" "}
                      bonu u sicilianu!
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">I am from Palermo. You speak Sicilian well!</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-7")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Message 8 */}
              <div className="flex gap-4 justify-end">
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-lg p-3 relative ml-auto max-w-[80%]">
                    <p className="text-slate-800">
                      Grazie! Iu{" "}
                      <VerbTooltip
                        verb="studiu"
                        verbId="studiu"
                        showTooltip={showTooltip}
                        setShowTooltip={setShowTooltip}
                        handleVerbClick={handleVerbClick}
                        tooltipRef={tooltipRef}
                        isMobile={isMobile}
                        conjugation={{
                          infinitive: "Studiari (To study)",
                          tense: "Present",
                          conjugation: [
                            "Iu studiu - I study",
                            "Tu studii - You study (singular)",
                            "Iddu/Idda studia - He/She studies",
                            "Nuatri studiamu - We study",
                            "Vuatri studiate - You study (plural)",
                            "Iddi studianu - They study",
                          ],
                        }}
                      />{" "}
                      u sicilianu di dui anni.
                    </p>
                    <p className="text-sm text-slate-500 italic mt-1">
                      Thank you! I've been studying Sicilian for two years.
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                      onClick={() => playAudio("audio-8")}
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center text-green-600 font-bold">
                  L
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 bg-amber-50 border-b border-gray-200">
            <h2 className="font-semibold text-amber-700 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Key Vocabulary
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Bongiornu</p>
                <p className="text-sm text-slate-600 italic">Good morning</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Comu siti?</p>
                <p className="text-sm text-slate-600 italic">How are you?</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Iu sugnu bonu</p>
                <p className="text-sm text-slate-600 italic">I am fine</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Comu vi chiamati?</p>
                <p className="text-sm text-slate-600 italic">What is your name?</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Di unni siti?</p>
                <p className="text-sm text-slate-600 italic">Where are you from?</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium">Piaciri</p>
                <p className="text-sm text-slate-600 italic">Nice to meet you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="gap-1 border border-gray-200"
            onClick={() => setActiveLesson(Math.max(1, activeLesson - 1))}
            disabled={activeLesson === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Previous Lesson
          </Button>
          <Button className="gap-1 bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setActiveLesson(activeLesson + 1)}>
            Next Lesson
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Exercise Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-8">
          <div className="p-4 bg-green-50 border-b border-gray-200">
            <h2 className="font-semibold text-green-700 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Practice Exercise
            </h2>
          </div>

          <div className="p-6">
            <p className="text-slate-700 mb-4">Complete the following sentences using the appropriate verbs:</p>

            <div className="space-y-4">
              <ExerciseQuestion
                id="1"
                question="Iu _____ di Palermu. (to be)"
                options={["sugnu", "siti", "è"]}
                correctAnswer="sugnu"
              />

              <ExerciseQuestion
                id="2"
                question="Comu vi _____? (to call)"
                options={["chiamu", "chiamati", "chiama"]}
                correctAnswer="chiamati"
              />

              <ExerciseQuestion
                id="3"
                question="Vui _____ bonu u sicilianu. (to speak)"
                options={["parru", "parrati", "parramu"]}
                correctAnswer="parrati"
              />
            </div>

            <div className="mt-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => {
                  document.dispatchEvent(new CustomEvent("checkAllAnswers"))
                }}
              >
                Check my answers
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Composant pour les verbes avec tooltip
interface VerbTooltipProps {
  verb: string
  verbId: string
  showTooltip: string | null
  setShowTooltip: (id: string | null) => void
  handleVerbClick: (id: string) => void
  tooltipRef: React.RefObject<HTMLDivElement>
  isMobile: boolean
  conjugation: {
    infinitive: string
    tense: string
    conjugation: string[]
  }
}

function VerbTooltip({
  verb,
  verbId,
  showTooltip,
  setShowTooltip,
  handleVerbClick,
  tooltipRef,
  isMobile,
  conjugation,
}: VerbTooltipProps) {
  if (isMobile) {
    return (
      <>
        <strong className="font-bold text-indigo-700 cursor-pointer" onClick={() => handleVerbClick(verbId)}>
          {verb}
        </strong>

        {showTooltip === verbId && (
          <div
            ref={tooltipRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowTooltip(null)}
          >
            <div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-xs w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-indigo-700">{conjugation.infinitive}</h3>
                <button className="text-slate-400 hover:text-slate-600" onClick={() => setShowTooltip(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-slate-500 mb-2">Temps: {conjugation.tense}</p>
              <ul className="space-y-1">
                {conjugation.conjugation.map((conj, index) => (
                  <li key={index} className="text-sm">
                    {conj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <strong className="font-bold text-indigo-700 cursor-pointer">{verb}</strong>
        </TooltipTrigger>
        <TooltipContent className="p-3 max-w-xs">
          <h3 className="font-bold text-indigo-700">{conjugation.infinitive}</h3>
          <p className="text-xs text-slate-500 mb-1">Temps: {conjugation.tense}</p>
          <ul className="space-y-0.5">
            {conjugation.conjugation.map((conj, index) => (
              <li key={index} className="text-xs">
                {conj}
              </li>
            ))}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

// Exercise Question Component
interface ExerciseQuestionProps {
  id: string
  question: string
  options: string[]
  correctAnswer: string
}

function ExerciseQuestion({ id, question, options, correctAnswer }: ExerciseQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // Split the question to get the parts before and after the blank
  const parts = question.split("_____")

  useEffect(() => {
    // Listen for the check all answers event
    const checkAnswersHandler = () => {
      setIsChecked(true)
      setIsCorrect(selectedAnswer === correctAnswer)
    }

    document.addEventListener("checkAllAnswers", checkAnswersHandler)

    return () => {
      document.removeEventListener("checkAllAnswers", checkAnswersHandler)
    }
  }, [selectedAnswer, correctAnswer])

  return (
    <div
      className={`border rounded-lg p-4 ${
        isChecked ? (isCorrect ? "border-green-500 border-2" : "border-red-500 border-2") : "border-gray-200"
      }`}
    >
      <p className="mb-2">
        {parts[0]}
        <span
          className={`font-bold px-1 ${
            isChecked ? (isCorrect ? "text-green-600" : "text-red-600") : "text-indigo-600"
          }`}
        >
          {selectedAnswer || "_____"}
        </span>
        {parts[1]}
      </p>
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => (
          <Button
            key={option}
            variant="outline"
            size="sm"
            disabled={isChecked}
            className={`border cursor-pointer hover:shadow-md ${
              selectedAnswer === option
                ? isChecked
                  ? (isCorrect ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300")
                  : "bg-indigo-50 border-indigo-300"
                : "border-gray-200"
            }`}
            onClick={() => {
              setSelectedAnswer(option)
              setIsChecked(false)
            }}
          >
            {option}
          </Button>
        ))}
      </div>
      {isChecked && (
        <p className={`mt-2 text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? "Correct!" : `Incorrect. The correct answer is "${correctAnswer}".`}
        </p>
      )}
    </div>
  )
}
