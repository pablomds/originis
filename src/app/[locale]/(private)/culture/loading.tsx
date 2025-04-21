import React from 'react';
import { Skeleton } from "@/components/ui/Skeleton";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f7ff]">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Hero Section Skeleton */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <Skeleton className="w-full h-64 md:h-80" />
        </div>

        {/* Navigation Tabs Skeleton */}
        <div className="flex overflow-x-auto mb-8 pb-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-10 w-24 mr-2 rounded-full" />
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          {/* Section Title */}
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border rounded-lg p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-3" />
                <div className="flex items-center">
                  <Skeleton className="h-8 w-8 rounded-full mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Section */}
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-6" />

          {/* Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <Skeleton className="h-48 w-full mb-2 rounded-lg" />
              <Skeleton className="h-6 w-3/4 mb-1" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div>
              <Skeleton className="h-48 w-full mb-2 rounded-lg" />
              <Skeleton className="h-6 w-3/4 mb-1" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="bg-white border-t py-4 px-6 text-center">
        <Skeleton className="h-4 w-48 mx-auto" />
      </footer>
    </div>
  );
};

export default Loading;