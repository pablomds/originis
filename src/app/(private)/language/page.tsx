"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { useRouter } from 'next/navigation'; // ✅ Correct pour /app
import { CultureMenu } from "@/components/CultureMenu/CultureMenu"
// Define necessary types
type LanguageFeature = {
    text: string;
}

type LinguisticCategory = {
    title: string;
    description: string;
}

type PronunciationComparison = {
    italianWord: string;
    sicilianWord: string;
    meaning: string;
    phoneticFeature: string;
}

type VerbSystem = {
    title: string;
    description: string;
}

type DefiniteArticle = {
    type: string;
    value: string;
}

type NounFeature = {
    title: string;
    description: string;
}

type VocabularyOrigin = {
    word: string;
    meaning: string;
    origin: string;
}

type SicilianExpression = {
    expression: string;
    meaning: string;
    usage: string;
    initial: string;
}

export default function SicilianLanguagePage() {
    
    const router = useRouter();

    const languageFeatures: LanguageFeature[] = [
        { text: "Distinct phonological system with unique consonant sounds" },
        { text: "Retention of Latin final vowels lost in standard Italian" },
        { text: "Rich vocabulary with Greek, Arabic, Norman, and Spanish influences" },
        { text: "Unique verb tenses and grammatical structures" },
        { text: "Regional variations across different parts of Sicily" },
        { text: "UNESCO recognition as a heritage language" }
    ];

    const linguisticCategories: LinguisticCategory[] = [
        { title: "Phonological Differences", description: "Distinctive consonant clusters and vowel sounds not found in standard Italian" },
        { title: "Grammatical Structure", description: "Unique verb conjugations and noun declensions with Greek and Arabic influences" },
        { title: "Lexical Richness", description: "Thousands of words with non-Italian origins reflecting Sicily's multicultural history" },
        { title: "Literary Tradition", description: "Rich literary history dating back to the 13th century Sicilian School of Poetry" }
    ];

    // Pronunciation comparison data
    const pronunciationComparisons: PronunciationComparison[] = [
        { italianWord: "bello", sicilianWord: "beddu", meaning: "beautiful", phoneticFeature: "Retroflex dd" },
        { italianWord: "piangere", sicilianWord: "chianciri", meaning: "to cry", phoneticFeature: "Preserved Latin cluster" },
        { italianWord: "casa", sicilianWord: "cas'", meaning: "house", phoneticFeature: "Final vowel reduction" },
        { italianWord: "figlio", sicilianWord: "figghiu", meaning: "son", phoneticFeature: "Palatalization" }
    ];

    // Verb system data
    const verbSystemFeatures: VerbSystem[] = [
        { title: "Preterite Tense", description: "Preserved from Latin but lost in northern Italian dialects" },
        { title: "Future Tense", description: "Distinctive formation with \"-irò\" endings" },
        { title: "Conditional Forms", description: "Influenced by Norman French" }
    ];

    // Definite articles data
    const definiteArticles: DefiniteArticle[] = [
        { type: "Masculine", value: "u" },
        { type: "Feminine", value: "a" },
        { type: "Masc. Plural", value: "i" },
        { type: "Fem. Plural", value: "li" }
    ];

    // Noun features data
    const nounFeatures: NounFeature[] = [
        { title: "Plural Formation", description: "Often with vowel changes rather than endings" },
        { title: "Latin Neuter", description: "Retention of the Latin neuter gender in some words" }
    ];

    // Sicilian expressions data
    const sicilianExpressions: SicilianExpression[] = [
        { expression: "Amunì!", meaning: "Let's go! / Come on!", usage: "Used to encourage someone to join an activity", initial: "A" },
        { expression: "Chi si dici?", meaning: "What's up? / How are you?", usage: "Common greeting in everyday conversation", initial: "C" },
        { expression: "Nun mi rumpiri i cabbasisi", meaning: "Don't bother me", usage: "Literally: \"Don't break my pumpkins\"", initial: "N" },
        { expression: "Fari vento", meaning: "To disappear/leave quickly", usage: "Literally: \"To make wind\"", initial: "F" }
    ];

    return (
        <div className="min-h-screen bg-indigo-50">

            {/* Main Content */}
            <main className="container mx-auto px-4 py-4 sm:py-6 max-w-6xl">
                {/* Back Button and Progress */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
                    <Link href="/culture" className="flex items-center text-indigo-600 mb-3 sm:mb-0">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        <span>Sicilian</span>
                    </Link>

                    <div className="w-full md:w-auto flex items-center gap-2">
                        <span className="text-sm text-slate-500">Language Progress:</span>
                        <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-pink-500 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative rounded-xl overflow-hidden mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/50 z-10"></div>
                    <img
                        src="/Sicily-culture-banner.png"
                        alt="Sicilian Language"
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">Sicilian Language</h1>
                        <p className="text-white/90 text-sm sm:text-base max-w-2xl">
                            Discover the rich linguistic heritage of Sicily, with its unique vocabulary, grammar, and pronunciation
                            shaped by centuries of cultural exchange.
                        </p>
                    </div>
                </div>

                <CultureMenu />

                {/* Content */}
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
                    {/* Language Overview */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Language Overview</h2>
                        <p className="text-slate-700 text-lg leading-relaxed mb-8">
                            Sicilian (Sicilianu) is a Romance language spoken by approximately 5 million people, primarily in Sicily
                            and southern Italy. Despite often being classified as an Italian dialect, linguists recognize Sicilian as
                            a distinct language with its own grammatical structure, vocabulary, and phonological system that evolved
                            separately from standard Italian.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                            {/* Key Language Features */}
                            <div className="bg-indigo-50 rounded-xl p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <MessageSquare className="h-5 w-5 text-indigo-500" />
                                    <h3 className="text-xl font-bold">Key Language Features</h3>
                                </div>

                                <ul className="space-y-4">
                                    {languageFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-indigo-500 mr-2 text-lg">•</span>
                                            <span className="text-slate-700">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Linguistic Classification */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Linguistic Classification</h3>
                                <p className="text-slate-700 mb-6">
                                    Sicilian belongs to the Italo-Romance branch of Romance languages, with several distinctive features
                                    that set it apart from other Italian dialects:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {linguisticCategories.map((category, index) => (
                                        <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                                            <h4 className="font-semibold mb-2">{category.title}</h4>
                                            <p className="text-slate-600 text-sm">
                                                {category.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Phonetics and Pronunciation */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-6">Phonetics and Pronunciation</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-blue-800 mb-4">Consonant Features</h3>

                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                                                DD
                                            </span>
                                            <h4 className="font-semibold">Retroflex Consonants</h4>
                                        </div>
                                        <p className="text-slate-700 text-sm">
                                            Sicilian features the distinctive retroflex "dd" sound (similar to an English "d" but with the
                                            tongue curled back).
                                        </p>
                                        <p className="text-blue-600 italic text-sm mt-2">
                                            Example: "beddu" (beautiful) vs. Italian "bello"
                                        </p>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-2">
                                                CL
                                            </span>
                                            <h4 className="font-semibold">Preserved Latin Clusters</h4>
                                        </div>
                                        <p className="text-slate-700 text-sm">
                                            Sicilian preserves many Latin consonant clusters that were simplified in Italian.
                                        </p>
                                        <p className="text-blue-600 italic text-sm mt-2">
                                            Example: Latin "pl" in Sicilian "chianciri" vs. Italian "piangere" (to cry)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-purple-800 mb-4">Vowel System</h3>

                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-2">
                                                5V
                                            </span>
                                            <h4 className="font-semibold">Five-Vowel System</h4>
                                        </div>
                                        <p className="text-slate-700 text-sm">
                                            Sicilian has a five-vowel system (a, e, i, o, u) with no distinction between open and closed
                                            vowels as in standard Italian.
                                        </p>
                                        <div className="flex justify-center mt-3 space-x-3">
                                            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                                                A
                                            </span>
                                            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                                                E
                                            </span>
                                            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                                                I
                                            </span>
                                            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                                                O
                                            </span>
                                            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold">
                                                U
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <div className="flex items-center mb-2">
                                            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold mr-2">
                                                ST
                                            </span>
                                            <h4 className="font-semibold">Distinctive Stress Patterns</h4>
                                        </div>
                                        <p className="text-slate-700 text-sm">
                                            Sicilian often places stress on different syllables than Italian, particularly in verb
                                            conjugations.
                                        </p>
                                        <p className="text-purple-600 italic text-sm mt-2">
                                            Example: Italian "parlerò" becomes Sicilian "parlirò" (I will speak)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-amber-800 mb-4">Pronunciation Comparison</h3>

                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="text-amber-800">Italian Word</TableCell>
                                            <TableCell className="text-amber-800">Sicilian Word</TableCell>
                                            <TableCell className="text-amber-800">Meaning</TableCell>
                                            <TableCell className="text-amber-800">Phonetic Feature</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {pronunciationComparisons.map((comparison, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{comparison.italianWord}</TableCell>
                                                <TableCell className="font-medium">{comparison.sicilianWord}</TableCell>
                                                <TableCell>{comparison.meaning}</TableCell>
                                                <TableCell>{comparison.phoneticFeature}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </section>

                    {/* Grammar and Structure */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-6">Grammar and Structure</h2>

                        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-teal-800 text-center mb-6">Sicilian Grammar Highlights</h3>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                        <div className="bg-teal-600 text-white py-3 px-4">
                                            <h4 className="font-bold text-lg">Verb System</h4>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-slate-700 mb-4">
                                                Sicilian verbs follow a conjugation system that differs from standard Italian, with unique
                                                endings and tense formations.
                                            </p>

                                            <div className="space-y-3">
                                                {verbSystemFeatures.map((feature, index) => (
                                                    <div key={index} className="flex items-start">
                                                        <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xs">
                                                            {index + 1}
                                                        </div>
                                                        <div>
                                                            <h5 className="font-medium text-teal-700">{feature.title}</h5>
                                                            <p className="text-sm text-slate-600">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 p-3 bg-teal-50 rounded-lg border border-teal-100">
                                                <p className="text-sm italic">
                                                    <span className="font-medium">Example:</span> "Parlari" (to speak)
                                                    <br />
                                                    Present: Parlu, parli, parla, parlamu, parlati, parlanu
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                        <div className="bg-green-600 text-white py-3 px-4">
                                            <h4 className="font-bold text-lg">Noun and Article System</h4>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-slate-700 mb-4">
                                                Sicilian nouns and articles have distinctive forms and usage patterns that differ from standard
                                                Italian.
                                            </p>

                                            <div className="mb-4">
                                                <h5 className="font-medium text-green-700 mb-2">Definite Articles</h5>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    {definiteArticles.map((article, index) => (
                                                        <div key={index} className="bg-green-50 p-2 rounded border border-green-100">
                                                            <span className="font-medium">{article.type}:</span> {article.value}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {nounFeatures.map((feature, index) => (
                                                    <div key={index} className="flex items-start">
                                                        <div className="mt-1 mr-3 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">
                                                            {index + 1}
                                                        </div>
                                                        <div>
                                                            <h5 className="font-medium text-green-700">{feature.title}</h5>
                                                            <p className="text-sm text-slate-600">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vocabulary and Expressions */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Vocabulary and Expressions</h2>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-6 flex justify-center">Multicultural Vocabulary Origins</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Greek Origins */}
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-blue-100">
                                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
                                        <h4 className="font-bold text-lg">Greek Origins</h4>
                                        <p className="text-sm text-blue-100">8th century BC influence</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-4">
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium mr-3">
                                                        B
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">babbiari</div>
                                                        <div className="text-sm text-slate-600">to joke</div>
                                                        <div className="text-xs text-blue-500 italic mt-1">from Greek βαμβαίνω (bambaino)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium mr-3">
                                                        Z
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">zimmari</div>
                                                        <div className="text-sm text-slate-600">goat</div>
                                                        <div className="text-xs text-blue-500 italic mt-1">from Greek χίμαρος (chimaros)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-medium mr-3">
                                                        C
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">cirasa</div>
                                                        <div className="text-sm text-slate-600">cherry</div>
                                                        <div className="text-xs text-blue-500 italic mt-1">from Greek κεράσιον (kerasion)</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Arabic Origins */}
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-amber-100">
                                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
                                        <h4 className="font-bold text-lg">Arabic Origins</h4>
                                        <p className="text-sm text-amber-100">9th-11th century influence</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-4">
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium mr-3">
                                                        Z
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">zaffarana</div>
                                                        <div className="text-sm text-slate-600">saffron</div>
                                                        <div className="text-xs text-amber-500 italic mt-1">from Arabic زَعْفَرَان (za'farān)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium mr-3">
                                                        G
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">gebbia</div>
                                                        <div className="text-sm text-slate-600">water tank</div>
                                                        <div className="text-xs text-amber-500 italic mt-1">from Arabic جابية (jābiya)</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-medium mr-3">
                                                        T
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">taliari</div>
                                                        <div className="text-sm text-slate-600">to look</div>
                                                        <div className="text-xs text-amber-500 italic mt-1">from Arabic طلع (ṭalaʿa)</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Norman Origins */}
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-red-100">
                                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4">
                                        <h4 className="font-bold text-lg">Norman Origins</h4>
                                        <p className="text-sm text-red-100">11th century influence</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="space-y-4">
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-medium mr-3">
                                                        A
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">accattari</div>
                                                        <div className="text-sm text-slate-600">to buy</div>
                                                        <div className="text-xs text-red-500 italic mt-1">from Norman French acater</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-medium mr-3">
                                                        C
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">custureri</div>
                                                        <div className="text-sm text-slate-600">tailor</div>
                                                        <div className="text-xs text-red-500 italic mt-1">from Norman French cousturier</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-medium mr-3">
                                                        R
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">racina</div>
                                                        <div className="text-sm text-slate-600">grape</div>
                                                        <div className="text-xs text-red-500 italic mt-1">from Norman French raisin</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-orange-800 mb-6 text-center">Common Sicilian Expressions</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {sicilianExpressions.map((expression, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                                        <div className="bg-orange-100 p-3 border-b border-orange-200">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mr-3">
                                                    <span className="text-orange-600 font-bold">{expression.initial}</span>
                                                </div>
                                                <h4 className="font-bold text-orange-800">{expression.expression}</h4>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-slate-700">{expression.meaning}</p>
                                            <p className="text-sm text-orange-600 mt-2 italic">{expression.usage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Learning Resources */}
            </main>
        </div>
    )
}