import React from 'react';
import { Skeleton } from "@/components/ui/Skeleton";

const Loading: React.FC = () => {
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
          {/* Historical Background */}
          <section className="mb-10">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-8" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Historical Periods */}
              <div className="bg-amber-50 rounded-xl p-6">
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

              {/* Historical Impact on Language */}
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

          {/* Historical Timeline */}
          <section className="mb-10">
            <Skeleton className="h-8 w-48 mb-6" />

            <div className="relative pl-8 border-l-2 border-amber-300">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-10 relative">
                  <Skeleton className="absolute -left-[25px] top-0 w-4 h-4 rounded-full" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              ))}
            </div>
          </section>

          {/* Historical Artifacts */}
          <section>
            <Skeleton className="h-8 w-48 mb-6" />

            <div className="bg-amber-50 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i}>
                    <Skeleton className="rounded-lg h-48 w-full mb-3" />
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-full" />
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
  );
};

export default Loading;