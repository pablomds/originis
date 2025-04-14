"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Volume2, Info } from "lucide-react"
import { CultureMenu } from "@/components/CultureMenu/CultureMenu"


export default function PhoneticPage() {
  const [activeSection, setActiveSection] = useState<string>("vowels")

  // Fonction pour jouer l'audio
  const playAudio = (audioId: string) => {
    console.log(`Playing audio: ${audioId}`)
    // Dans une vraie application, ceci jouerait un fichier audio
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Back Button and Progress */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Link href="/culture" className="flex items-center text-indigo-600 mb-4 md:mb-0">
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span>Culture</span>
          </Link>

          <div className="w-full md:w-auto flex items-center gap-2">
            <span className="text-sm text-slate-500">Phonetics Progress:</span>
            <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <span className="text-sm font-medium">30%</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-violet-600/50 z-10"></div>
          <img
            src="/Sicily-culture-banner.png"
            alt="Sicilian Phonetics"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sicilian Phonetics</h1>
            <p className="text-white/90 max-w-2xl">
              Master the unique sounds and pronunciation of the Sicilian dialect to speak with authentic flair and
              confidence.
            </p>
          </div>
        </div>

        <CultureMenu />

        {/* Main Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Sicilian Sound System</h2>
            <p className="text-slate-600">
              The Sicilian dialect has a distinctive phonetic system that differs from standard Italian in several
              important ways. Understanding these unique sounds is essential for authentic pronunciation and effective
              communication.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveSection("vowels")}
              className={activeSection === "vowels" ? "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md hover:cursor-pointer" : " px-4 py-2 border border-gray-200 rounded-md hover:cursor-pointer hover:bg-gray-200"}
            >
              Vowels
            </button>
            <button
              onClick={() => setActiveSection("consonants")}
              className={activeSection === "consonants" ? "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md hover:cursor-pointer" : " px-4 py-2 border border-gray-200 rounded-md hover:cursor-pointer hover:bg-gray-200"}
            >
              Consonants
            </button>
            <button
              onClick={() => setActiveSection("stress")}
              className={activeSection === "stress" ? "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md hover:cursor-pointer" : " px-4 py-2 border border-gray-200 rounded-md hover:cursor-pointer hover:bg-gray-200"}
            >
              Stress & Rhythm
            </button>
            <button
              onClick={() => setActiveSection("differences")}
              className={activeSection === "differences" ? "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md hover:cursor-pointer" : " px-4 py-2 border border-gray-200 rounded-md hover:cursor-pointer hover:bg-gray-200"}
            >
              Regional Differences
            </button>
          </div>

          {/* Vowels Section */}
          {activeSection === "vowels" && (
            <div>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-indigo-600" />
                  Sicilian Vowel System
                </h3>
                <p className="text-slate-700 mb-4">
                  Unlike standard Italian with its seven vowel phonemes, Sicilian has a simpler five-vowel system: /a/,
                  /ɛ/, /i/, /ɔ/, /u/. The distinction between open and closed 'e' and 'o' sounds is less prominent in
                  Sicilian.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <VowelCard
                    vowel="a"
                    ipa="/a/"
                    example="casa"
                    meaning="house"
                    audioId="vowel-a"
                    playAudio={playAudio}
                  />
                  <VowelCard
                    vowel="e"
                    ipa="/ɛ/"
                    example="petra"
                    meaning="stone"
                    audioId="vowel-e"
                    playAudio={playAudio}
                  />
                  <VowelCard
                    vowel="i"
                    ipa="/i/"
                    example="vinu"
                    meaning="wine"
                    audioId="vowel-i"
                    playAudio={playAudio}
                  />
                  <VowelCard
                    vowel="o"
                    ipa="/ɔ/"
                    example="porta"
                    meaning="door"
                    audioId="vowel-o"
                    playAudio={playAudio}
                  />
                  <VowelCard
                    vowel="u"
                    ipa="/u/"
                    example="lupu"
                    meaning="wolf"
                    audioId="vowel-u"
                    playAudio={playAudio}
                  />
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 className="font-medium mb-2">Key Differences from Italian</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        1
                      </span>
                      <span>
                        Final unstressed vowels often reduce to <strong>-u</strong> (masculine) or <strong>-a</strong>{" "}
                        (feminine)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        2
                      </span>
                      <span>
                        Italian final <strong>-e</strong> often becomes <strong>-i</strong> in Sicilian
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        3
                      </span>
                      <span>Metaphony: vowels can change quality due to influence of final vowels</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Vowel Comparison Examples</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border-gray-200">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Italian</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Sicilian</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Meaning</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Listen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ComparisonRow
                        italian="sole"
                        sicilian="suli"
                        meaning="sun"
                        audioId="comp-1"
                        playAudio={playAudio}
                      />
                      <ComparisonRow
                        italian="verde"
                        sicilian="virdi"
                        meaning="green"
                        audioId="comp-2"
                        playAudio={playAudio}
                      />
                      <ComparisonRow
                        italian="tempo"
                        sicilian="tempu"
                        meaning="time"
                        audioId="comp-3"
                        playAudio={playAudio}
                      />
                      <ComparisonRow
                        italian="fiore"
                        sicilian="ciuri"
                        meaning="flower"
                        audioId="comp-4"
                        playAudio={playAudio}
                      />
                      <ComparisonRow
                        italian="buono"
                        sicilian="bonu"
                        meaning="good"
                        audioId="comp-5"
                        playAudio={playAudio}
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Practice Exercise: Vowel Sounds</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Listen to the audio and repeat the following words, focusing on the correct vowel sounds.
                </p>

                <div className="space-y-3">
                  <PracticeItem word="pani" translation="bread" audioId="practice-1" playAudio={playAudio} />
                  <PracticeItem word="beddu" translation="beautiful" audioId="practice-2" playAudio={playAudio} />
                  <PracticeItem word="picciriddu" translation="child" audioId="practice-3" playAudio={playAudio} />
                  <PracticeItem word="jornu" translation="day" audioId="practice-4" playAudio={playAudio} />
                  <PracticeItem word="muru" translation="wall" audioId="practice-5" playAudio={playAudio} />
                </div>
              </div>
            </div>
          )}

          {/* Consonants Section */}
          {activeSection === "consonants" && (
            <div>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-indigo-600" />
                  Distinctive Consonant Features
                </h3>
                <p className="text-slate-700 mb-4">
                  Sicilian consonants have several distinctive features that set them apart from standard Italian,
                  including retroflex consonants, different treatment of Latin consonant clusters, and unique consonant
                  strengthening patterns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Retroflex Consonants</h4>
                    <p className="text-sm mb-3">
                      One of the most distinctive features of Sicilian is the retroflex or "cacuminal" pronunciation of
                      certain consonants, particularly the 'dd' sound (represented as 'ḍḍ').
                    </p>
                    <div className="space-y-2">
                      <ConsonantExample
                        sicilian="caḍḍu"
                        pronunciation="/kaɖɖu/"
                        italian="cavallo"
                        meaning="horse"
                        audioId="cons-1"
                        playAudio={playAudio}
                      />
                      <ConsonantExample
                        sicilian="beddu"
                        pronunciation="/bɛɖɖu/"
                        italian="bello"
                        meaning="beautiful"
                        audioId="cons-2"
                        playAudio={playAudio}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Consonant Clusters</h4>
                    <p className="text-sm mb-3">
                      Latin consonant clusters like 'fl', 'pl', and 'bl' became 'chi' (pronounced [kj]) in Sicilian.
                    </p>
                    <div className="space-y-2">
                      <ConsonantExample
                        sicilian="chianu"
                        pronunciation="/kjanu/"
                        italian="piano"
                        meaning="flat, level"
                        audioId="cons-3"
                        playAudio={playAudio}
                      />
                      <ConsonantExample
                        sicilian="chiantu"
                        pronunciation="/kjantu/"
                        italian="pianto"
                        meaning="crying"
                        audioId="cons-4"
                        playAudio={playAudio}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Consonant Strengthening</h4>
                    <p className="text-sm mb-3">
                      Sicilian often features gemination (doubling) of consonants, especially at the beginning of words
                      after certain particles.
                    </p>
                    <div className="space-y-2">
                      <ConsonantExample
                        sicilian="a ccasa"
                        pronunciation="/a kkaza/"
                        italian="a casa"
                        meaning="at home"
                        audioId="cons-5"
                        playAudio={playAudio}
                      />
                      <ConsonantExample
                        sicilian="tri mmisi"
                        pronunciation="/tri mmizi/"
                        italian="tre mesi"
                        meaning="three months"
                        audioId="cons-6"
                        playAudio={playAudio}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Unique Consonant Sounds</h4>
                    <p className="text-sm mb-3">
                      Some consonant sounds in Sicilian have no direct equivalent in standard Italian.
                    </p>
                    <div className="space-y-2">
                      <ConsonantExample
                        sicilian="sceccu"
                        pronunciation="/ʃekku/"
                        italian="asino"
                        meaning="donkey"
                        audioId="cons-7"
                        playAudio={playAudio}
                      />
                      <ConsonantExample
                        sicilian="nṭrizzari"
                        pronunciation="/ɳʈɽizzaɾi/"
                        italian="intrecciare"
                        meaning="to braid"
                        audioId="cons-8"
                        playAudio={playAudio}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Consonant Transformation Examples</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border-gray-200">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Italian Sound</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Sicilian Sound</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Example</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Listen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TransformationRow
                        italian="fl-, pl-, bl-"
                        sicilian="chi- [kj]"
                        example="fiore → chiuri (flower)"
                        audioId="trans-1"
                        playAudio={playAudio}
                      />
                      <TransformationRow
                        italian="-ll-"
                        sicilian="-ḍḍ- [ɖɖ]"
                        example="bello → beddu (beautiful)"
                        audioId="trans-2"
                        playAudio={playAudio}
                      />
                      <TransformationRow
                        italian="gli [ʎ]"
                        sicilian="gghi [ɟɟ]"
                        example="figlio → figghiu (son)"
                        audioId="trans-3"
                        playAudio={playAudio}
                      />
                      <TransformationRow
                        italian="initial c- + e/i"
                        sicilian="c- [ʃ]"
                        example="cento → centu [ʃɛntu] (hundred)"
                        audioId="trans-4"
                        playAudio={playAudio}
                      />
                      <TransformationRow
                        italian="-mb-"
                        sicilian="-mm-"
                        example="colomba → palumma (dove)"
                        audioId="trans-5"
                        playAudio={playAudio}
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Practice Exercise: Consonant Sounds</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Listen to the audio and practice these challenging Sicilian consonant sounds.
                </p>

                <div className="space-y-3">
                  <PracticeItem word="figghiu" translation="son" audioId="practice-c-1" playAudio={playAudio} />
                  <PracticeItem word="chiavi" translation="key" audioId="practice-c-2" playAudio={playAudio} />
                  <PracticeItem word="stidda" translation="star" audioId="practice-c-3" playAudio={playAudio} />
                  <PracticeItem word="sangu" translation="blood" audioId="practice-c-4" playAudio={playAudio} />
                  <PracticeItem word="ciauru" translation="smell" audioId="practice-c-5" playAudio={playAudio} />
                </div>

              </div>
            </div>
          )}

          {/* Stress & Rhythm Section */}
          {activeSection === "stress" && (
            <div>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-indigo-600" />
                  Stress and Rhythm Patterns
                </h3>
                <p className="text-slate-700 mb-4">
                  Sicilian has distinctive stress patterns and a rhythmic quality that gives the language its
                  characteristic musical flow. Understanding these patterns is crucial for authentic pronunciation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Word Stress</h4>
                    <p className="text-sm mb-3">
                      Like Italian, Sicilian typically stresses the penultimate (second-to-last) syllable, but there are
                      important exceptions.
                    </p>
                    <div className="space-y-2">
                      <StressExample
                        word="ca·STA"
                        meaning="house"
                        note="Stress on the last syllable"
                        audioId="stress-1"
                        playAudio={playAudio}
                      />
                      <StressExample
                        word="MAN·gia·ri"
                        meaning="to eat"
                        note="Stress on the first syllable"
                        audioId="stress-2"
                        playAudio={playAudio}
                      />
                      <StressExample
                        word="si·ci·LIA·nu"
                        meaning="Sicilian"
                        note="Standard penultimate stress"
                        audioId="stress-3"
                        playAudio={playAudio}
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Sentence Rhythm</h4>
                    <p className="text-sm mb-3">
                      Sicilian has a distinctive cadence and intonation pattern that differs from standard Italian.
                    </p>
                    <div className="space-y-2">
                      <div className="border-b pb-2">
                        <p className="text-sm font-medium">Unni vai?</p>
                        <p className="text-xs text-slate-500 italic">Where are you going?</p>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex-1 mr-2">
                            <div className="h-6 relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full bg-slate-200 h-0.5"></div>
                              </div>
                              <div className="absolute inset-y-0 left-[20%] right-[20%] flex items-center">
                                <div className="w-full bg-indigo-400 h-0.5"></div>
                              </div>
                              <div
                                className="absolute h-2 w-2 rounded-full bg-indigo-500 top-1/2 transform -translate-y-1/2"
                                style={{ left: "20%" }}
                              ></div>
                              <div
                                className="absolute h-2 w-2 rounded-full bg-indigo-500 top-1/2 transform -translate-y-1/2"
                                style={{ left: "80%" }}
                              ></div>
                            </div>
                          </div>
                          <button
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => playAudio("rhythm-1")}
                          >
                            <Volume2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="border-b border-gray-200 pb-2">
                        <p className="text-sm font-medium">Chi bedda jurnata!</p>
                        <p className="text-xs text-slate-500 italic">What a beautiful day!</p>
                        <div className="flex justify-between items-center mt-1">
                          <div className="flex-1 mr-2">
                            <div className="h-6 relative">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full bg-slate-200 h-0.5"></div>
                              </div>
                              <div className="absolute inset-y-0 left-[10%] right-[30%] flex items-center">
                                <div className="w-full bg-indigo-400 h-0.5"></div>
                              </div>
                              <div
                                className="absolute h-2 w-2 rounded-full bg-indigo-500 top-1/2 transform -translate-y-1/2"
                                style={{ left: "10%" }}
                              ></div>
                              <div
                                className="absolute h-2 w-2 rounded-full bg-indigo-500 top-1/2 transform -translate-y-1/2"
                                style={{ left: "70%" }}
                              ></div>
                            </div>
                          </div>
                          <button
                            className="h-7 w-7 p-0 rounded-full"
                            onClick={() => playAudio("rhythm-2")}
                          >
                            <Volume2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h4 className="font-medium mb-2">Intonation Patterns</h4>
                  <p className="text-sm mb-3">
                    Sicilian has distinctive intonation patterns for questions, statements, and exclamations.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Statement: "Iddu è sicilianu."</p>
                      <p className="text-xs text-slate-500 italic mb-2">He is Sicilian.</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="h-6 relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full bg-slate-200 h-0.5"></div>
                            </div>
                            <div className="absolute inset-y-0 left-[20%] w-[60%] flex items-center">
                              <div
                                className="w-full bg-indigo-400 h-0.5"
                                style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => playAudio("intonation-1")}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Question: "Iddu è sicilianu?"</p>
                      <p className="text-xs text-slate-500 italic mb-2">Is he Sicilian?</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="h-6 relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full bg-slate-200 h-0.5"></div>
                            </div>
                            <div className="absolute inset-y-0 left-[20%] w-[60%] flex items-center">
                              <div
                                className="w-full bg-indigo-400 h-0.5"
                                style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => playAudio("intonation-2")}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Exclamation: "Iddu è sicilianu!"</p>
                      <p className="text-xs text-slate-500 italic mb-2">He is Sicilian!</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="h-6 relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full bg-slate-200 h-0.5"></div>
                            </div>
                            <div className="absolute inset-y-0 left-[20%] w-[60%] flex items-center">
                              <div
                                className="w-full bg-indigo-400 h-0.5"
                                style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="h-7 w-7 p-0 rounded-full"
                          onClick={() => playAudio("intonation-3")}
                        >
                          <Volume2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h3 className="font-semibold mb-3">Practice Exercise: Stress and Intonation</h3>
                <p className="text-sm text-slate-700 mb-4">
                  Listen to and repeat these phrases, paying attention to the stress and intonation patterns.
                </p>

                <div className="space-y-3">
                  <PracticeItem
                    word="Bongiornu, comu siti?"
                    translation="Good morning, how are you?"
                    audioId="practice-s-1"
                    playAudio={playAudio}
                  />
                  <PracticeItem
                    word="Iu sugnu di Palermu"
                    translation="I am from Palermo"
                    audioId="practice-s-2"
                    playAudio={playAudio}
                  />
                  <PracticeItem
                    word="Unni vai accussì di pressa?"
                    translation="Where are you going in such a hurry?"
                    audioId="practice-s-3"
                    playAudio={playAudio}
                  />
                  <PracticeItem
                    word="Chi beddu tempu c'è oggi!"
                    translation="What beautiful weather there is today!"
                    audioId="practice-s-4"
                    playAudio={playAudio}
                  />
                </div>

              </div>
            </div>
          )}

          {/* Regional Differences Section */}
          {activeSection === "differences" && (
            <div>
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-indigo-600" />
                  Regional Phonetic Variations
                </h3>
                <p className="text-slate-700 mb-4">
                  Sicilian pronunciation varies significantly across different parts of the island, with distinct
                  regional accents and phonetic features that reflect historical influences and geographical isolation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Eastern Sicily (Catania, Messina)</h4>
                    <p className="text-sm mb-3">
                      Eastern Sicilian dialects show stronger Greek influence and have distinctive features:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>More open pronunciation of vowels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Stronger retroflex consonants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Preservation of Greek vocabulary and sounds</span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <button className="gap-1 flex justify-center items-center" onClick={() => playAudio("eastern")}>
                        <Volume2 className="h-4 w-4" />
                        Listen to Example
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Western Sicily (Palermo, Trapani)</h4>
                    <p className="text-sm mb-3">Western dialects show stronger Arabic and Norman influence:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>More nasal vowel sounds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Distinctive cadence influenced by Arabic</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Different treatment of consonant clusters</span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <button className="gap-1 flex justify-center items-center" onClick={() => playAudio("western")}>
                        <Volume2 className="h-4 w-4" />
                        Listen to Example
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Central Sicily (Enna, Caltanissetta)</h4>
                    <p className="text-sm mb-3">Central dialects are often considered the most conservative:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Preservation of older phonetic features</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>More distinct vowel sounds</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Slower, more deliberate speech rhythm</span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <button className="gap-1 flex justify-center items-center" onClick={() => playAudio("central")}>
                        <Volume2 className="h-4 w-4" />
                        Listen to Example
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <h4 className="font-medium mb-2">Southern Sicily (Agrigento, Ragusa)</h4>
                    <p className="text-sm mb-3">Southern dialects show unique characteristics:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Stronger influence from Greek in Ragusa area</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>More open vowels in Agrigento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                          •
                        </span>
                        <span>Distinctive treatment of final unstressed vowels</span>
                      </li>
                    </ul>
                    <div className="mt-3">
                      <button className="gap-1 flex justify-center items-center" onClick={() => playAudio("southern")}>
                        <Volume2 className="h-4 w-4" />
                        Listen to Example
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Regional Pronunciation Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border-gray-200">
                    <thead>
                      <tr className="bg-indigo-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">Word</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Meaning</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Palermo</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Catania</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Agrigento</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">Listen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <RegionalRow
                        word="acqua"
                        meaning="water"
                        palermo="[akwa]"
                        catania="[akkwa]"
                        agrigento="[akwa]"
                        audioId="reg-1"
                        playAudio={playAudio}
                      />
                      <RegionalRow
                        word="cane"
                        meaning="dog"
                        palermo="[kani]"
                        catania="[kani]"
                        agrigento="[keni]"
                        audioId="reg-2"
                        playAudio={playAudio}
                      />
                      <RegionalRow
                        word="bello"
                        meaning="beautiful"
                        palermo="[beddu]"
                        catania="[bɛɖɖu]"
                        agrigento="[bɛddu]"
                        audioId="reg-3"
                        playAudio={playAudio}
                      />
                      <RegionalRow
                        word="parlare"
                        meaning="to speak"
                        palermo="[parrari]"
                        catania="[parraɾi]"
                        agrigento="[parrari]"
                        audioId="reg-4"
                        playAudio={playAudio}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  )
}

// Composant pour afficher une carte de voyelle
function VowelCard({ vowel, ipa, example, meaning, audioId, playAudio } : {vowel: string, ipa: string, example: string, meaning: string, audioId: string, playAudio: (audioId: string) => void}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col items-center">
      <div className="text-2xl font-bold text-indigo-600 mb-1">{vowel}</div>
      <div className="text-sm text-slate-500 mb-2">{ipa}</div>
      <div className="text-sm mb-1">{example}</div>
      <div className="text-xs text-slate-500 italic mb-2">({meaning})</div>
      <button className="h-7 w-7 p-0 rounded-full flex justify-center items-center" onClick={() => playAudio(audioId)}>
        <Volume2 className="h-3 w-3" />
      </button>
    </div>
  )
}

// Composant pour afficher une ligne de comparaison
function ComparisonRow({ italian, sicilian, meaning, audioId, playAudio } : { italian: string, sicilian: string, meaning: string, audioId: string, playAudio: (audioId: string) => void }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border border-gray-200 px-4 py-2">{italian}</td>
      <td className="border border-gray-200 px-4 py-2 font-medium">{sicilian}</td>
      <td className="border border-gray-200 px-4 py-2 text-slate-600">{meaning}</td>
      <td className="border border-gray-200 px-4 py-2">
        <button className="h-7 w-7 p-0 rounded-full" onClick={() => playAudio(audioId)}>
          <Volume2 className="h-3 w-3" />
        </button>
      </td>
    </tr>
  )
}

// Composant pour afficher un élément de pratique
function PracticeItem({ word, translation, audioId, playAudio } : { word: string, translation: string, audioId: string, playAudio: (audioId: string) => void }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-3">
      <div>
        <p className="font-medium">{word}</p>
        <p className="text-xs text-slate-500 italic">{translation}</p>
      </div>
      <button className="gap-1 flex justify-center items-center" onClick={() => playAudio(audioId)}>
        <Volume2 className="h-4 w-4" />
        Listen
      </button>
    </div>
  )
}

// Composant pour afficher un exemple de consonne
function ConsonantExample({ sicilian, pronunciation, italian, meaning, audioId, playAudio } : { sicilian: string, pronunciation: string, italian: string, meaning: string, audioId: string, playAudio: (audioId: string) => void  }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-1">
          <span className="font-medium">{sicilian}</span>
          <span className="text-xs text-slate-500">{pronunciation}</span>
        </div>
        <div className="text-xs">
          <span className="text-slate-500">It: {italian}</span>
          <span className="mx-1">•</span>
          <span className="italic">{meaning}</span>
        </div>
      </div>
      <button className="h-7 w-7 p-0 rounded-full" onClick={() => playAudio(audioId)}>
        <Volume2 className="h-3 w-3" />
      </button>
    </div>
  )
}

// Composant pour afficher une ligne de transformation
function TransformationRow({ italian, sicilian, example, audioId, playAudio } : { italian: string, sicilian: string, example: string, audioId: string, playAudio: (audioId: string) => void  }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border border-gray-200 px-4 py-2">{italian}</td>
      <td className="border border-gray-200 px-4 py-2">{sicilian}</td>
      <td className="border border-gray-200 px-4 py-2">{example}</td>
      <td className="border border-gray-200 px-4 py-2">
        <button className="h-7 w-7 p-0 rounded-full" onClick={() => playAudio(audioId)}>
          <Volume2 className="h-3 w-3" />
        </button>
      </td>
    </tr>
  )
}

// Composant pour afficher un exemple d'accentuation
function StressExample({ word, meaning, note, audioId, playAudio } : { word: string, meaning: string, note: string, audioId: string, playAudio: (audioId: string) => void  }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="font-medium">{word}</div>
        <div className="text-xs text-slate-500">{meaning}</div>
        <div className="text-xs text-indigo-600 italic">{note}</div>
      </div>
      <button className="h-7 w-7 p-0 rounded-full" onClick={() => playAudio(audioId)}>
        <Volume2 className="h-3 w-3" />
      </button>
    </div>
  )
}

// Composant pour afficher une ligne de comparaison régionale
function RegionalRow({ word, meaning, palermo, catania, agrigento, audioId, playAudio } : { word: string, meaning: string, palermo: string, catania: string, agrigento: string, audioId: string, playAudio: (audioId: string) => void  }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border border-gray-200  px-4 py-2 font-medium">{word}</td>
      <td className="border border-gray-200 px-4 py-2 text-slate-600">{meaning}</td>
      <td className="border border-gray-200 px-4 py-2">{palermo}</td>
      <td className="border border-gray-200 px-4 py-2">{catania}</td>
      <td className="border border-gray-200 px-4 py-2">{agrigento}</td>
      <td className="border border-gray-200 px-4 py-2">
        <button className="h-7 w-7 p-0 rounded-full" onClick={() => playAudio(audioId)}>
          <Volume2 className="h-3 w-3" />
        </button>
      </td>
    </tr>
  )
}
