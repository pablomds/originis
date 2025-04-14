"use client"

import type React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import {
  Lock,
  Unlock,
  Check,
  Star,
  BookOpen,
  Users,
  Utensils,
  Calendar,
  Music,
  Briefcase,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Coffee,
  GraduationCap,
  Paintbrush,
  Home,
} from "lucide-react";
import { cn } from "@/utils/utils";
import Link from "next/link";

// Define lesson type
type Lesson = {
  id: number
  title: {
    dialect: string
    translation: string
  }
  level: "Beginner" | "Intermediate" | "Advanced"
  theme: string
  icon: React.ElementType
  completed: boolean
  locked: boolean
  score?: number
  maxScore: number
  color: string
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

export default function LessonsPage() {
  // Sample chapters data
  const [chapters, setChapters] = useState<Chapter[]>([
    // Chapter 1: Conversations
    {
      id: 1,
      title: "Basic Conversations",
      description:
        "Learn essential phrases for everyday conversations in Sicilian",
      icon: MessageCircle,
      color: "from-blue-500 to-indigo-600",
      completed: false,
      locked: false,
      expanded: true,
      lessons: [
        {
          id: 101,
          title: {
            dialect: "Saluti e Presentazioni",
            translation: "Greetings and Introductions",
          },
          level: "Beginner",
          theme: "Communication",
          icon: Users,
          completed: true,
          locked: false,
          score: 85,
          maxScore: 100,
          color: "bg-blue-500",
        },
        {
          id: 102,
          title: {
            dialect: "Cumu Stai?",
            translation: "How are you?",
          },
          level: "Beginner",
          theme: "Communication",
          icon: MessageCircle,
          completed: true,
          locked: false,
          score: 92,
          maxScore: 100,
          color: "bg-blue-600",
        },
        {
          id: 103,
          title: {
            dialect: "Parlari di Tia",
            translation: "Talking About Yourself",
          },
          level: "Beginner",
          theme: "Communication",
          icon: Users,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-blue-500",
        },
        {
          id: 104,
          title: {
            dialect: "Dumanni Comuni",
            translation: "Common Questions",
          },
          level: "Intermediate",
          theme: "Communication",
          icon: MessageCircle,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-blue-600",
        },
        {
          id: 105,
          title: {
            dialect: "Cunvirsazzioni Avanzati",
            translation: "Advanced Conversations",
          },
          level: "Advanced",
          theme: "Communication",
          icon: Users,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-blue-700",
        },
      ],
    },
    // Chapter 2: At the Restaurant
    {
      id: 2,
      title: "At the Restaurant",
      description: "Master restaurant vocabulary and ordering food in Sicilian",
      icon: Coffee,
      color: "from-orange-500 to-red-600",
      completed: false,
      locked: false,
      expanded: false,
      lessons: [
        {
          id: 201,
          title: {
            dialect: "Ordinarri u Manciari",
            translation: "Ordering Food",
          },
          level: "Beginner",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-orange-500",
        },
        {
          id: 202,
          title: {
            dialect: "Piatti Tipici",
            translation: "Traditional Dishes",
          },
          level: "Beginner",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: false,
          maxScore: 100,
          color: "bg-orange-600",
        },
        {
          id: 203,
          title: {
            dialect: "Parlari cu lu Cammareri",
            translation: "Talking with the Waiter",
          },
          level: "Intermediate",
          theme: "Communication",
          icon: Coffee,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-orange-500",
        },
        {
          id: 204,
          title: {
            dialect: "Ricetti e Ingredienti",
            translation: "Recipes and Ingredients",
          },
          level: "Intermediate",
          theme: "Cuisine",
          icon: Utensils,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-orange-600",
        },
        {
          id: 205,
          title: {
            dialect: "Critichi Gastronomichi",
            translation: "Food Reviews",
          },
          level: "Advanced",
          theme: "Cuisine",
          icon: Coffee,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-orange-700",
        },
      ],
    },
    // Chapter 3: At Work
    {
      id: 3,
      title: "At Work",
      description: "Learn professional vocabulary and workplace conversations",
      icon: Briefcase,
      color: "from-green-500 to-emerald-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: 301,
          title: {
            dialect: "Professioni e Misteri",
            translation: "Professions and Trades",
          },
          level: "Beginner",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-green-500",
        },
        {
          id: 302,
          title: {
            dialect: "Nta l'Uffiziu",
            translation: "In the Office",
          },
          level: "Beginner",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-green-600",
        },
        {
          id: 303,
          title: {
            dialect: "Riunioni e Appuntamenti",
            translation: "Meetings and Appointments",
          },
          level: "Intermediate",
          theme: "Employment",
          icon: Calendar,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-green-500",
        },
        {
          id: 304,
          title: {
            dialect: "Progetti e Collaborazioni",
            translation: "Projects and Collaborations",
          },
          level: "Intermediate",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-green-600",
        },
        {
          id: 305,
          title: {
            dialect: "Negoziazioni Avanzati",
            translation: "Advanced Negotiations",
          },
          level: "Advanced",
          theme: "Employment",
          icon: Briefcase,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-green-700",
        },
      ],
    },
    // Chapter 4: At School
    {
      id: 4,
      title: "At School",
      description: "Educational vocabulary and academic conversations",
      icon: GraduationCap,
      color: "from-purple-500 to-violet-600",
      completed: false,
      locked: true,
      expanded: false,
      lessons: [
        {
          id: 401,
          title: {
            dialect: "Materii e Classi",
            translation: "Subjects and Classes",
          },
          level: "Beginner",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-500",
        },
        {
          id: 402,
          title: {
            dialect: "Parlari cu l'Insegnanti",
            translation: "Talking with Teachers",
          },
          level: "Beginner",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-600",
        },
        {
          id: 403,
          title: {
            dialect: "Esami e Compiti",
            translation: "Exams and Homework",
          },
          level: "Intermediate",
          theme: "Education",
          icon: BookOpen,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-500",
        },
        {
          id: 404,
          title: {
            dialect: "Discussioni Accademichi",
            translation: "Academic Discussions",
          },
          level: "Intermediate",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-600",
        },
        {
          id: 405,
          title: {
            dialect: "Presentazioni e Dibattiti",
            translation: "Presentations and Debates",
          },
          level: "Advanced",
          theme: "Education",
          icon: GraduationCap,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-purple-700",
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
          id: 501,
          title: {
            dialect: "Arti Visivi",
            translation: "Visual Arts",
          },
          level: "Beginner",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-500",
        },
        {
          id: 502,
          title: {
            dialect: "Musica e Balli",
            translation: "Music and Dance",
          },
          level: "Beginner",
          theme: "Arts",
          icon: Music,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-600",
        },
        {
          id: 503,
          title: {
            dialect: "Letteratura e Puisia",
            translation: "Literature and Poetry",
          },
          level: "Intermediate",
          theme: "Arts",
          icon: BookOpen,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-500",
        },
        {
          id: 504,
          title: {
            dialect: "Teatru e Cinema",
            translation: "Theater and Cinema",
          },
          level: "Intermediate",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-600",
        },
        {
          id: 505,
          title: {
            dialect: "Critichi Artistichi",
            translation: "Art Criticism",
          },
          level: "Advanced",
          theme: "Arts",
          icon: Paintbrush,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-pink-700",
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
          id: 601,
          title: {
            dialect: "Parti di la Casa",
            translation: "Parts of the House",
          },
          level: "Beginner",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-500",
        },
        {
          id: 602,
          title: {
            dialect: "Faccenni Domestichi",
            translation: "Household Chores",
          },
          level: "Beginner",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-600",
        },
        {
          id: 603,
          title: {
            dialect: "Cucinari e Ricetti",
            translation: "Cooking and Recipes",
          },
          level: "Intermediate",
          theme: "Home",
          icon: Utensils,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-500",
        },
        {
          id: 604,
          title: {
            dialect: "Arredamentu e Decorazioni",
            translation: "Furniture and Decorations",
          },
          level: "Intermediate",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-600",
        },
        {
          id: 605,
          title: {
            dialect: "Ospitari Amici e Parenti",
            translation: "Hosting Friends and Family",
          },
          level: "Advanced",
          theme: "Home",
          icon: Home,
          completed: false,
          locked: true,
          maxScore: 100,
          color: "bg-cyan-700",
        },
      ],
    },
  ]);

  // Toggle chapter expansion
  const toggleChapter = (chapterId: number) => {
    setChapters(
      chapters.map((chapter) =>
        chapter.id === chapterId
          ? { ...chapter, expanded: !chapter.expanded }
          : chapter
      )
    );
  };

  // Calculate overall progress
  const totalLessons = chapters.reduce(
    (total, chapter) => total + chapter.lessons.length,
    0
  );
  const completedLessons = chapters.reduce(
    (total, chapter) =>
      total + chapter.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  const progressPercentage = (completedLessons / totalLessons) * 100;

  // Function to handle clicking on a lesson
  const handleLessonClick = (chapterId: number, lessonId: number) => {
    // Only allow clicking on unlocked lessons
    const chapter = chapters.find((c) => c.id === chapterId);
    const lesson = chapter?.lessons.find((l) => l.id === lessonId);

    if (chapter && !chapter.locked && lesson && !lesson.locked) {
      console.log(
        `Opening lesson ${lessonId}: ${lesson.title.dialect} from chapter ${chapterId}`
      );
      // Here you would navigate to the lesson page or open a modal
      // For now, we'll just log it
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow bg-indigo-50">
        <div className="container mx-auto px-4 py-8">
          {/* Back button, title and progress */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/dashboard"
              className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <h1 className="text-2xl font-bold text-center">My Lessons</h1>

            <div className="flex flex-col items-end">
              <span className="text-sm font-medium mb-1">
                {completedLessons}/{totalLessons} completed
              </span>
              <div className="w-32">
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </div>
          </div>

          {/* Chapters */}
          <div className="space-y-6 flex flex-col items-center">
            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-200 w-2/3",
                  chapter.locked ? "opacity-60" : ""
                )}
              >
                {/* Chapter header */}
                <div
                  className={cn(
                    "bg-gradient-to-r p-5 text-white cursor-pointer",
                    chapter.locked ? "cursor-not-allowed" : "cursor-pointer",
                    chapter.color
                  )}
                  onClick={() => !chapter.locked && toggleChapter(chapter.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <chapter.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{chapter.title}</h2>
                        <p className="text-white/80 text-sm">
                          {chapter.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {/* Chapter progress */}
                      <div className="hidden md:flex items-center space-x-2">
                        <div className="w-32 bg-white/20 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-white h-full"
                            style={{
                              width: `${
                                (chapter.lessons.filter((l) => l.completed)
                                  .length /
                                  chapter.lessons.length) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm">
                          {chapter.lessons.filter((l) => l.completed).length}/
                          {chapter.lessons.length}
                        </span>
                      </div>

                      {/* Lock/Unlock status */}
                      {chapter.locked ? (
                        <Lock className="h-5 w-5" />
                      ) : chapter.expanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Chapter lessons */}
                {chapter.expanded && !chapter.locked && (
                  <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {chapter.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        onClick={() => handleLessonClick(chapter.id, lesson.id)}
                        className={cn(
                          "rounded-xl overflow-hidden transition-all duration-200",
                          lesson.locked
                            ? "opacity-60 cursor-not-allowed"
                            : "cursor-pointer hover:scale-105"
                        )}
                      >
                        <div className={`${lesson.color} p-4 text-white`}>
                          <div className="flex justify-between items-start">
                            <div className="bg-white/20 p-2 rounded-lg">
                              <lesson.icon className="h-5 w-5" />
                            </div>
                            <div>
                              {lesson.locked ? (
                                <Lock className="h-5 w-5" />
                              ) : lesson.completed ? (
                                <div className="bg-white/20 rounded-full p-1">
                                  <Check className="h-4 w-4" />
                                </div>
                              ) : (
                                <Unlock className="h-5 w-5" />
                              )}
                            </div>
                          </div>

                          <h3 className="text-lg font-bold mt-3 mb-1 line-clamp-1">
                            {lesson.title.dialect}
                          </h3>
                          <p className="text-white/80 text-sm italic mb-2 line-clamp-1">
                            {lesson.title.translation}
                          </p>

                          <div className="flex justify-between items-center mt-2">
                            <Badge
                              className={`
                                border-0 text-xs font-normal py-0.5 px-2
                                bg-white/20 text-white
                              `}
                            >
                              {lesson.level}
                            </Badge>
                            {lesson.completed && lesson.score && (
                              <div className="flex items-center bg-white/20 rounded-full px-2 py-0.5">
                                <Star className="h-3 w-3 mr-1 fill-white" />
                                <span className="text-xs font-medium">
                                  {lesson.score}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
