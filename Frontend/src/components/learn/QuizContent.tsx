"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizContentProps {
  title: string
  duration: string
  questions: QuizQuestion[]
  onComplete: (score: number) => void
  onBack: () => void
}

export function QuizContent({ title, duration, questions, onComplete, onBack }: QuizContentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = index
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const score = answers.reduce((total, answer, index) => {
      return answer === questions[index].correctAnswer ? total + 1 : total
    }, 0)
    onComplete(score)
  }

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      return answer === questions[index].correctAnswer ? total + 1 : total
    }, 0)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex flex-col h-full ">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {!showResults && (
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-sm">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 p-6 overflow-auto">
        {!showResults ? (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-3 rounded-md border hover:bg-slate-50 cursor-pointer ${
                    answers[currentQuestion] === index ? "border-purple-500 bg-purple-50" : ""
                  }`}
                  onClick={() => handleAnswer(index)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      answers[currentQuestion] === index ? "border-purple-500" : "border-gray-300"
                    }`}
                  >
                    {answers[currentQuestion] === index && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                  </div>
                  <label className="flex-1 cursor-pointer">{option}</label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quiz Results</h3>
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="text-5xl font-bold mb-2">
                {calculateScore()}/{questions.length}
              </div>
              <p className="text-gray-500">
                {calculateScore() === questions.length
                  ? "Perfect score! Excellent work!"
                  : calculateScore() >= questions.length / 2
                    ? "Good job! You passed the quiz."
                    : "Keep practicing. You can retake the quiz later."}
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-start gap-2">
                    {answers[index] === q.correctAnswer ? (
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    ) : (
                      <AlertCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
                    )}
                    <div>
                      <p className="font-medium">{q.question}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Your answer: {answers[index] >= 0 ? q.options[answers[index]] : "Not answered"}
                      </p>
                      {answers[index] !== q.correctAnswer && (
                        <p className="text-sm text-green-600 mt-1">Correct answer: {q.options[q.correctAnswer]}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-4 flex justify-between">
        {!showResults ? (
          <>
            <button
              className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft size={16} className="mr-2" />
              Previous
            </button>
            <button
              className="flex items-center bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={answers[currentQuestion] === -1}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
              <ArrowRight size={16} className="ml-2" />
            </button>
          </>
        ) : (
          <>
            <button
              className="flex items-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
              onClick={onBack}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Course
            </button>
            {!submitted && (
              <button
                className="flex items-center bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600"
                onClick={handleSubmit}
              >
                Submit Results
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
