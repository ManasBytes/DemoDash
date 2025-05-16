"use client"

import React from "react"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

interface LessonContentProps {
  title: string
  duration: string
  content: React.ReactNode
  currentLesson: number
  totalLessons: number
  onPrevious: () => void
  onNext: () => void
  onComplete: () => void
  isCompleted: boolean
}

export function LessonContent({
  title,
  duration,
  content,
  currentLesson,
  totalLessons,
  onPrevious,
  onNext,
  onComplete,
  isCompleted,
}: LessonContentProps) {
  const isFirstLesson = currentLesson === 1
  const isLastLesson = currentLesson === totalLessons

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="border-b p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div>
            Lesson {currentLesson} of {totalLessons}
          </div>

          {isCompleted ? (
            <div className="flex items-center text-green-500">
              <CheckCircle size={16} className="mr-1" />
              Completed
            </div>
          ) : (
            <button
              type="button"
              onClick={onComplete}
              className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-50"
            >
              Mark as Complete
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-none">{content}</div>
      </main>

      {/* Navigation */}
      <footer className="border-t p-4 flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          disabled={isFirstLesson}
          className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} className="mr-2" />
          Previous Lesson
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={isLastLesson}
          className="flex items-center bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Lesson
          <ArrowRight size={16} className="ml-2" />
        </button>
      </footer>
    </div>
  )
}
