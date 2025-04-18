import { Skeleton } from "@/components/ui/Skeleton"
import React from "react"

export default function Loading(): React.ReactElement {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 sm:py-6 max-w-5xl">
        {/* Back Button and Progress */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <Skeleton className="h-6 w-24 mb-3 sm:mb-0" />
          <div className="w-full sm:w-auto flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="w-32 sm:w-48 h-2 rounded-full" />
            <Skeleton className="h-4 w-8" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-6">
          <Skeleton className="w-full h-40 sm:h-56 md:h-64" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto mb-6 pb-1">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24 mr-2 rounded-full" />
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border">
          {/* Language Overview */}
          <section className="mb-10">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Language Features */}
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-5 w-5 rounded" />
                  <Skeleton className="h-6 w-48" />
                </div>

                <ul className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start">
                      <Skeleton className="h-4 w-4 mr-2 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Linguistic Classification */}
              <div>
                <Skeleton className="h-6 w-64 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Phonetics and Pronunciation */}
          <section className="mb-10">
            <Skeleton className="h-8 w-64 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm">
                  <Skeleton className="h-6 w-48 mb-4" />

                  <div className="space-y-4">
                    {[1, 2].map((j) => (
                      <div key={j} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <Skeleton className="w-8 h-8 rounded-full mr-2" />
                          <Skeleton className="h-5 w-32" />
                        </div>
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-5/6 mb-2" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 shadow-sm">
              <Skeleton className="h-6 w-48 mb-4" />

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="text-left py-2 px-3">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="text-left py-2 px-3">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="text-left py-2 px-3">
                        <Skeleton className="h-5 w-24" />
                      </th>
                      <th className="text-left py-2 px-3">
                        <Skeleton className="h-5 w-24" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {[1, 2, 3, 4].map((i) => (
                      <tr key={i}>
                        <td className="py-2 px-3">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="py-2 px-3">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="py-2 px-3">
                          <Skeleton className="h-4 w-16" />
                        </td>
                        <td className="py-2 px-3">
                          <Skeleton className="h-4 w-16" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Vocabulary and Expressions */}
          <section>
            <Skeleton className="h-8 w-48 mb-6" />

            <div className="mb-8">
              <Skeleton className="h-6 w-64 mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border">
                    <div className="p-4">
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-48 mb-4" />

                      <ul className="space-y-4">
                        {[1, 2, 3].map((j) => (
                          <li key={j}>
                            <div className="flex items-center">
                              <Skeleton className="w-8 h-8 rounded-full mr-3" />
                              <div>
                                <Skeleton className="h-5 w-24 mb-1" />
                                <Skeleton className="h-4 w-32 mb-1" />
                                <Skeleton className="h-3 w-40" />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-4 px-6 text-center mt-8">
        <Skeleton className="h-4 w-48 mx-auto" />
      </footer>
    </div>
  )
}