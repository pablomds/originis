export default function LessonDetailLoading() {
    return (
      <div className="min-h-screen bg-[#f8f7ff] p-6">
        <div className="max-w-4xl mx-auto">
          <div className="h-8 w-32 bg-slate-200 rounded animate-pulse mb-6"></div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-gray-200 mb-6">
            <div className="h-6 w-24 bg-slate-200 rounded animate-pulse mb-4"></div>
            <div className="h-8 w-3/4 bg-slate-200 rounded animate-pulse mb-3"></div>
            <div className="h-4 w-1/2 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border-gray-200 overflow-hidden mb-6">
            <div className="p-4 bg-slate-100 border-b border-gray-200">
              <div className="h-6 w-48 bg-slate-200 rounded animate-pulse"></div>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-lg p-3">
                      <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse mb-2"></div>
                      <div className="h-3 w-1/2 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  