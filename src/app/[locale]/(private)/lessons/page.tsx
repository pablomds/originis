"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type React from "react"
import { Badge } from "@/components/ui/Badge"
import { Progress } from "@/components/ui/Progress"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import {
  ArrowLeft,
  BookOpen,
  Users,
  Utensils,
  Calendar,
  Music,
  Briefcase,
  MessageCircle,
  Coffee,
  GraduationCap,
  Paintbrush,
  Home,
  Clock,
  ChevronRight,
  Search,
} from "lucide-react"

// Define lesson type
type Lesson = {
  id: string
  title: string
  description: string
  level: string
  duration: string
  progress: number
  category: string
  theme?: string
  icon?: React.ElementType
  completed?: boolean
  locked?: boolean
  score?: number
  maxScore?: number
  color?: string
  dialect?: string
  translation?: string
}

// Define chapter type
type Chapter = {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
  lessons: Lesson[]
  completed: boolean
  locked: boolean
  expanded?: boolean
}

export default function LessonsPage({ onTabChange }: { onTabChange?: (tab: string) => void }) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Sample chapters data
  const [chapters, setChapters] = useState<Chapter[]>([
    // Chapter 1: Conversations
    {
      id: 1,
      title: "Basic Conversations",
      description: "Learn essential phrases for everyday conversations in Sicilian",
      icon: MessageCircle,
      color: "from-blue-500 to-indigo-600",
      completed: false,
      locked: false,
      expanded: true,
      lessons: [
        {
          id: "101",
          title: "Greetings and Introductions",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: Users,
          completed: true,
          locked: false,
          score: 85,
          maxScore: 100,
          color: "bg-blue-500",
          dialect: "Saluti e Presentazioni",
          translation: "Greetings and Introductions",
        },
        {
          id: "102",
          title: "How are you?",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: MessageCircle,
          completed: true,
          locked: false,
          score: 92,
          maxScore: 100,
          color: "bg-blue-600",
          dialect: "Cumu Stai?",
          translation: "How are you?",
        },
        {
          id: "103",
          title: "Talking About Yourself",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: Users,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-blue-500",
          dialect: "Parlari di Tia",
          translation: "Talking About Yourself",
        },
        {
          id: "104",
          title: "Common Questions",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: MessageCircle,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-blue-600",
          dialect: "Dumanni Comuni",
          translation: "Common Questions",
        },
        {
          id: "105",
          title: "Advanced Conversations",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: Users,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-blue-700",
          dialect: "Cunvirsazzioni Avanzati",
          translation: "Advanced Conversations",
        },
      ],
    },
    // Chapter 2: At the Restaurant
    {
      id: 2,
      title: "At the Restaurant",
      description: "Master restaurant vocabulary and ordering food in Sicilian",
      icon: Coffee,
      color: "from-purple-500 to-violet-600",
      completed: false,
      locked: false,
      expanded: false,
      lessons: [
        {
          id: "201",
          title: "Ordering Food",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-purple-500",
          dialect: "Ordinarri u Manciari",
          translation: "Ordering Food",
        },
        {
          id: "202",
          title: "Traditional Dishes",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-purple-600",
          dialect: "Piatti Tipici",
          translation: "Traditional Dishes",
        },
        {
          id: "203",
          title: "Talking with the Waiter",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Communication",
          icon: Coffee,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-500",
          dialect: "Parlari cu lu Cammareri",
          translation: "Talking with the Waiter",
        },
        {
          id: "204",
          title: "Recipes and Ingredients",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-600",
          dialect: "Ricetti e Ingredienti",
          translation: "Recipes and Ingredients",
        },
        {
          id: "205",
          title: "Food Reviews",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Cuisine",
          icon: Coffee,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-700",
          dialect: "Critichi Gastronomichi",
          translation: "Food Reviews",
        },
      ],
    },
    // Chapter 3: At Work
    {
      id: 3,
      title: "At Work",
      description: "Learn professional vocabulary and workplace conversations",
      icon: Briefcase,
      color: "from-indigo-500 to-blue-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: "301",
          title: "Professions and Trades",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-indigo-500",
          dialect: "Professioni e Misteri",
          translation: "Professions and Trades",
        },
        {
          id: "302",
          title: "In the Office",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-indigo-600",
          dialect: "Nta l'Uffiziu",
          translation: "In the Office",
        },
        {
          id: "303",
          title: "Meetings and Appointments",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Employment",
          icon: Calendar,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-indigo-500",
          dialect: "Riunioni e Appuntamenti",
          translation: "Meetings and Appointments",
        },
        {
          id: "304",
          title: "Projects and Collaborations",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-indigo-600",
          dialect: "Progetti e Collaborazioni",
          translation: "Projects and Collaborations",
        },
        {
          id: "305",
          title: "Advanced Negotiations",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-indigo-700",
          dialect: "Negoziazioni Avanzati",
          translation: "Advanced Negotiations",
        },
      ],
    },
    // Chapter 4: At School
    {
      id: 4,
      title: "At School",
      description: "Educational vocabulary and academic conversations",
      icon: GraduationCap,
      color: "from-violet-500 to-purple-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: "401",
          title: "Subjects and Classes",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-violet-500",
          dialect: "Materii e Classi",
          translation: "Subjects and Classes",
        },
        {
          id: "402",
          title: "Talking with Teachers",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-violet-600",
          dialect: "Parlari cu l'Insegnanti",
          translation: "Talking with Teachers",
        },
        {
          id: "403",
          title: "Exams and Homework",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Education",
          icon: BookOpen,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-violet-500",
          dialect: "Esami e Compiti",
          translation: "Exams and Homework",
        },
        {
          id: "404",
          title: "Academic Discussions",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-violet-600",
          dialect: "Discussioni Accademichi",
          translation: "Academic Discussions",
        },
        {
          id: "405",
          title: "Presentations and Debates",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-violet-700",
          dialect: "Presentazioni e Dibattiti",
          translation: "Presentations and Debates",
        },
      ],
    },
    // Chapter 5: Talk about Art
    {
      id: 5,
      title: "Talk about Art",
      description: "Discuss art, culture and creative expressions in Sicilian",
      icon: Paintbrush,
      color: "from-pink-500 to-rose-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: "501",
          title: "Visual Arts",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-500",
          dialect: "Arti Visivi",
          translation: "Visual Arts",
        },
        {
          id: "502",
          title: "Music and Dance",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Arts",
          icon: Music,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-600",
          dialect: "Musica e Balli",
          translation: "Music and Dance",
        },
        {
          id: "503",
          title: "Literature and Poetry",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Arts",
          icon: BookOpen,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-500",
          dialect: "Letteratura e Puisia",
          translation: "Literature and Poetry",
        },
        {
          id: "504",
          title: "Theater and Cinema",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-600",
          dialect: "Teatru e Cinema",
          translation: "Theater and Cinema",
        },
        {
          id: "505",
          title: "Art Criticism",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-700",
          dialect: "Critichi Artistichi",
          translation: "Art Criticism",
        },
      ],
    },
    // Chapter 6: At Home
    {
      id: 6,
      title: "At Home",
      description: "Vocabulary and phrases for home life and daily activities",
      icon: Home,
      color: "from-cyan-500 to-teal-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: "601",
          title: "Parts of the House",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "15 min",
          progress: 0,
          category: "Essential",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-500",
          dialect: "Parti di la Casa",
          translation: "Parts of the House",
        },
        {
          id: "602",
          title: "Household Chores",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Débutant",
          duration: "20 min",
          progress: 0,
          category: "Essential",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-600",
          dialect: "Faccenni Domestichi",
          translation: "Household Chores",
        },
        {
          id: "603",
          title: "Cooking and Recipes",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Home",
          icon: Utensils,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-500",
          dialect: "Cucinari e Ricetti",
          translation: "Cooking and Recipes",
        },
        {
          id: "604",
          title: "Furniture and Decorations",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Intermédiaire",
          duration: "30 min",
          progress: 0,
          category: "Essential",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-600",
          dialect: "Arredamentu e Decorazioni",
          translation: "Furniture and Decorations",
        },
        {
          id: "605",
          title: "Hosting Friends and Family",
          description: "Learn how to introduce yourself and greet someone in Sicilian.",
          level: "Avancé",
          duration: "25 min",
          progress: 0,
          category: "Essential",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-700",
          dialect: "Ospitari Amici e Parenti",
          translation: "Hosting Friends and Family",
        },
      ],
    },
  ])

  // Toggle chapter expansion
  const toggleChapter = (chapterId: number) => {
    setChapters(
      chapters.map((chapter) => (chapter.id === chapterId ? { ...chapter, expanded: !chapter.expanded } : chapter)),
    )
  }

  // Calculate overall progress
  const totalLessons = chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)
  const completedLessons = chapters.reduce(
    (total, chapter) => total + chapter.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const progressPercentage = (completedLessons / totalLessons) * 100

  // Function to handle clicking on a lesson
  const handleLessonClick = (lessonId: string) => {
    router.push(`/lessons/${lessonId}`)
  }

  const filteredLessons = chapters
    .flatMap((chapter) => chapter.lessons)
    .filter(
      (lesson) =>
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lesson.description?.toLowerCase()?.includes(searchQuery.toLowerCase()) ?? false),
    )

  const handleTabChange = (tab: string) => {
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f7ff]">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="flex items-center">
            <button
              onClick={() => handleTabChange("lessons")}
              className="flex items-center text-indigo-600 mb-4 md:mb-0 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
            </button>
          </div>
          <h1 className="text-2xl font-bold ">Leçons de Sicilien</h1>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Rechercher des leçons..."
            className="pl-10 bg-white border border-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm" className="rounded-full bg-white border-gray-200">
            Tous
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-indigo-50 text-indigo-700 border-indigo-200">
            Débutant
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-white border-gray-200">
            Intermédiaire
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-white border-gray-200">
            Avancé
          </Button>
        </div>

        {/* Lessons */}
        <div className="space-y-4">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-xl p-4 shadow-sm border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleLessonClick(lesson.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-0">
                      {lesson.level}
                    </Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-0">
                      {lesson.category}
                    </Badge>
                  </div>
                  <h2 className="font-semibold text-lg">{lesson.title}</h2>
                  <p className="text-slate-600 text-sm mt-1">{lesson.description}</p>

                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span>{lesson.level}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Leçon {lesson.id}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {lesson.progress > 0 ? (
                    <div className="flex items-center gap-2">
                      <Progress value={lesson.progress} className="w-24 h-2" />
                      <span className="text-xs font-medium">{lesson.progress}%</span>
                    </div>
                  ) : (
                    <Badge className="bg-amber-100 text-amber-700 border-0">Nouveau</Badge>
                  )}
                  <ChevronRight className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
