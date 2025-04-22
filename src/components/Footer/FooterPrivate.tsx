"use client"
import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

function FooterPrivate() {
  const t = useTranslations("FooterPrivate")
  return (
    <footer className="bg-white py-4 px-6 border-t border-gray-200">
    <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <div className="flex items-center text-indigo-600 font-bold">
          <span className="bg-black text-white text-xs px-1.5 py-0.5 rounded mr-1">
            O
          </span>
          Originis
        </div>
      </div>
      <p className="text-sm text-slate-500">
        {`© ${new Date().getFullYear()} Oríginis. ${t('all_rights_reserved')}`}
      </p>
      <div className="flex gap-4 mt-4 md:mt-0">
        {/* Icons */}
        {[
          "M8.29 20.251c7.547...",
          "M22 12c0-5.523...",
          "M12 2.163c3.204...",
        ].map((d, idx) => (
          <Link
            key={idx}
            href="#"
            className="text-slate-500 hover:text-slate-700"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d={d} />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  </footer>
  )
}

export default FooterPrivate