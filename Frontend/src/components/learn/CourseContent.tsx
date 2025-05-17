"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText, List } from "lucide-react"
import { QuizContent } from "./QuizContent" // Adjust path as needed

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface LessonData {
  id: number
  title: string
  duration: string
  isQuiz?: boolean
  content?: string
  questions?: QuizQuestion[]
}

interface LessonProps {
  lesson: LessonData
  isActive: boolean
  isCompleted: boolean
  onClick: () => void
}

function Lesson({ lesson, isActive, isCompleted, onClick }: LessonProps) {
  return (
    <div
      className={`flex items-center py-2 px-4  dark:text-white/90 hover:bg-blue-100 }`}
      onClick={onClick}
    >
      <div className="mr-3 text-gray-500">
        {lesson.isQuiz ? <List size={16} /> : <FileText size={16} />}
      </div>
      <div className="flex-1">
        <p className={`text-sm ${isCompleted ? "line-through text-gray-400" : ""} my-2`}>
          {lesson.title}
        </p>
      </div>
      {isCompleted && <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />}
    </div>
  )
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  isCompleted: boolean
  onNextModuleClick: () => void
}

function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  isCompleted,
  onNextModuleClick,
}: AccordionItemProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-2 m-2 ">
      <button
        className="flex items-center justify-between w-full px-4 py-3 hover:bg-slate-50 text-left  dark:text-white/90"
        onClick={onToggle}
      >
        <span className="">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="py-1">
          {children}
          {isCompleted && (
            <div className="text-right p-4">
              <button
                className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                onClick={onNextModuleClick}
              >
                Go to Next Module
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function CourseContent() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [openModuleIndex, setOpenModuleIndex] = useState<number>(0)
  const [activeLessonId, setActiveLessonId] = useState<number | null>(null)

  const modules = [
    {
      title: "Module 1: Introduction to SIP",
      lessons: [
        {
          id: 1,
  title: "What is SIP?",
  duration: "8 min",
  content: `A Systematic Investment Plan, commonly known as SIP, is a disciplined approach to investing in mutual funds. It enables investors to contribute a fixed amount of money at regular intervals (typically monthly or quarterly) into selected mutual fund schemes. The key feature of SIPs is their systematic nature, which promotes financial discipline and long-term wealth creation.

Key Aspects of SIP:

1. Regular Investment: SIPs involve investing a fixed amount regularly, regardless of market conditions. This disciplined approach helps in averaging the purchase cost of mutual fund units over time, known as rupee cost averaging.

2. Flexible Investment Options: Investors can choose the amount they want to invest per SIP installment, making it accessible for individuals with varying financial capacities. This flexibility also extends to choosing the frequency of investments.

3. Compound Interest Benefits: By investing regularly over the long term, SIPs harness the power of compounding. The returns earned on the invested amount are reinvested into the scheme, leading to potentially higher returns over time.

4. Diversification: Mutual funds, where SIP investments are typically made, offer diversification across various asset classes (equity, debt, hybrid, etc.). This diversification helps mitigate risks associated with investing in a single asset class.

5. Long-Term Wealth Creation: SIPs are ideally suited for individuals with long-term financial goals, such as retirement planning, children's education, or buying a house. The disciplined approach ensures consistent wealth accumulation over the investment horizon.

How SIP Works:

- Initial Setup: To start a SIP, an investor needs to choose a mutual fund scheme based on their financial goals and risk appetite. They also decide the amount they want to invest per SIP installment.

- Automatic Deductions: Once set up, the SIP amount is deducted automatically from the investor's bank account on the chosen date. This automation simplifies the investment process and reduces the need for manual intervention.

- NAV and Units Allocation: The amount deducted is used to purchase units of the chosen mutual fund scheme at the prevailing Net Asset Value (NAV) on the SIP date. Over time, these units accumulate in the investor's account.

- Monitoring and Review: Investors are encouraged to monitor the performance of their SIP investments periodically. They can increase or decrease the SIP amount, pause or stop SIPs as per their changing financial circumstances.

Benefits of SIP:

- Discipline: Encourages regular saving and investing habits.
- Affordability: Allows investments with small amounts regularly.
- Risk Management: Mitigates market volatility through rupee cost averaging.
- Flexibility: Can be started and managed easily online.

In conclusion, SIPs offer a structured and disciplined way to invest in mutual funds, catering to both novice and experienced investors alike. By leveraging the benefits of regular investing and compounding, SIPs pave the way for achieving long-term financial objectives effectively.`

        },
        {
          id: 2,
          title: "Benefits of SIP",
          duration: "10 min",
          content: "SIP helps in rupee cost averaging, reduces market timing risk...",
        },
        {
          id: 3,
          title: "How to Start a SIP?",
          duration: "12 min",
          content: "To start a SIP, select a mutual fund scheme that matches your goals...",
        },
        {
          id: 4,
          title: "Quiz: SIP Basics",
          duration: "5 min",
          isQuiz: true,
          questions: [
            {
              id: 1,
              question: "What does SIP stand for?",
              options: [
                "Single Investment Plan",
                "Systematic Investment Plan",
                "Scheduled Investment Program",
                "Savings Investment Protocol",
              ],
              correctAnswer: 1,
            },
            {
              id: 2,
              question: "One benefit of SIP is...",
              options: [
                "Guaranteed returns",
                "Rupee cost averaging",
                "No risk of loss",
                "No tax",
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    {
      title: "Module 2: Advanced Strategies",
      lessons: [
        {
          id: 5,
          title: "SIP in Equity vs Debt Funds",
          duration: "10 min",
          content: "Understand the difference in using SIPs in equity and debt mutual funds...",
        },
        {
          id: 6,
          title: "Tax Implications",
          duration: "7 min",
          content: "Learn about the tax rules applicable to your SIP investments...",
        },
      ],
    },
  ]

  const handleLessonClick = (lessonId: number) => {
    setActiveLessonId(lessonId)
  }

  const handleCompleteLesson = () => {
    if (activeLessonId && !completedLessons.includes(activeLessonId)) {
      setCompletedLessons([...completedLessons, activeLessonId])
    }
  }

  const findLessonById = (id: number): LessonData | undefined => {
    return modules.flatMap((mod) => mod.lessons).find((l) => l.id === id)
  }

  const activeLesson = activeLessonId ? findLessonById(activeLessonId) : null

  const goToNextLesson = () => {
    if (!activeLessonId) return
    const allLessons = modules.flatMap((mod) => mod.lessons)
    const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId)
    const nextLesson = allLessons[currentIndex + 1]
    if (nextLesson) {
      setActiveLessonId(nextLesson.id)
    } else {
      setActiveLessonId(null)
    }
  }

  return (
    <div className="flex h-screen overflow-hidden  dark:text-white/90">
      {/* Sidebar */}
      <aside className="w-72 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-y-auto ">
        <div className="p-4 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <h1 className="text-xl ">Course Modules</h1>
        </div>
        {modules.map((module, index) => {
          const isCompleted = module.lessons.every((l) =>
            completedLessons.includes(l.id)
          )
          return (
            <AccordionItem
              key={index}
              title={module.title}
              isOpen={index === openModuleIndex}
              onToggle={() =>
                setOpenModuleIndex(index === openModuleIndex ? -1 : index)
              }
              isCompleted={isCompleted}
              onNextModuleClick={() =>
                setOpenModuleIndex((prev) =>
                  prev + 1 < modules.length ? prev + 1 : 0
                )
              }
            >
              {module.lessons.map((lesson) => (
                <Lesson
                  key={lesson.id}
                  lesson={lesson}
                  isActive={lesson.id === activeLessonId}
                  isCompleted={completedLessons.includes(lesson.id)}
                  onClick={() => handleLessonClick(lesson.id)}
                />
              ))}
            </AccordionItem>
          )
        })}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeLesson ? (
          activeLesson.isQuiz && activeLesson.questions ? (
            <QuizContent
              title={activeLesson.title}
              duration={activeLesson.duration}
              questions={activeLesson.questions}
              onComplete={(score) => {
                handleCompleteLesson()
                goToNextLesson()
              }}
              onBack={() => setActiveLessonId(null)}
            />
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-2">{activeLesson.title}</h2>
              <p className="text-base text-gray-700 whitespace-pre-line  dark:text-white/90">
                {activeLesson.content}
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleCompleteLesson}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Mark as Completed
                </button>
                <button
                  onClick={goToNextLesson}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Next Lesson
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="text-center text-gray-600">
            Select a lesson from the sidebar to begin.
          </div>
        )}
      </main>
    </div>
  )
}
