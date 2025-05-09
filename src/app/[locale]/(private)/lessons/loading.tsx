export default function LessonsLoading() {
  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b sticky top-0 z-10">
        <div className="h-6 w-24 bg-slate-200 rounded animate-pulse"></div>
        <div className="hidden md:flex items-center space-x-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 w-16 bg-slate-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse"></div>
      </header>

      {/* Main Content Skeleton */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="h-8 w-48 bg-slate-200 rounded animate-pulse mb-6"></div>

        {/* Search Skeleton */}
        <div className="h-10 w-full bg-slate-200 rounded animate-pulse mb-6"></div>

        {/* Filters Skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-8 w-20 bg-slate-200 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Lessons Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-5 w-16 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-5 w-16 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 w-3/4 bg-slate-200 rounded animate-pulse mb-1"></div>
                  <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse mb-3"></div>

                  <div className="flex items-center gap-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-4 w-16 bg-slate-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-24 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-5 w-5 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
