import { Skeleton } from "@/components/ui/Skeleton"
import React from "react"

export default function Loading(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24" />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Back Button and Progress */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <Skeleton className="h-6 w-24 mb-4 md:mb-0" />
          <div className="w-full md:w-auto flex items-center gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="w-48 h-2 rounded-full" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <Skeleton className="w-full h-64 md:h-80" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-8 pb-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Skeleton key={i} className="h-10 w-24 mr-2 rounded-full" />
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <div className="mb-6">
            <Skeleton className="h-7 w-48 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-md" />
            ))}
          </div>

          {/* Content Section */}
          <div>
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <Skeleton className="h-5 w-5 mr-2 rounded" />
                <Skeleton className="h-6 w-48" />
              </div>
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6 mb-4" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="bg-white rounded-lg border p-3 flex flex-col items-center">
                    <Skeleton className="h-8 w-8 rounded-full mb-1" />
                    <Skeleton className="h-4 w-8 mb-2" />
                    <Skeleton className="h-4 w-16 mb-1" />
                    <Skeleton className="h-3 w-12 mb-2" />
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg border p-4">
                <Skeleton className="h-5 w-48 mb-2" />
                <ul className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start">
                      <Skeleton className="h-5 w-5 rounded-full mr-2 mt-0.5" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <Skeleton className="h-6 w-48 mb-3" />
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-indigo-50">
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="border px-4 py-2 text-left">
                        <Skeleton className="h-5 w-24" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="border px-4 py-2">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="border px-4 py-2">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="border px-4 py-2">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="border px-4 py-2">
                          <Skeleton className="h-7 w-7 rounded-full" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4">
              <Skeleton className="h-6 w-48 mb-3" />
              <Skeleton className="h-4 w-full mb-4" />

              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-lg border p-3">
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-8 w-20 rounded-md" />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Skeleton className="h-10 w-40 rounded-md" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-24 rounded-md" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 px-6 text-center">
        <Skeleton className="h-4 w-48 mx-auto" />
      </footer>
    </div>
  )
}