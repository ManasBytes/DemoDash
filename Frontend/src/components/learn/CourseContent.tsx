"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, FileText, List } from "lucide-react"
import { QuizContent } from "./QuizContent"

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
    <div className={`flex items-center py-2 px-4  dark:text-white/90 hover:bg-blue-100`} onClick={onClick}>
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

function AccordionItem({ title, children, isOpen, onToggle, isCompleted, onNextModuleClick }: AccordionItemProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-2 m-2 ">
      <button className="flex items-center justify-between w-full px-4 py-3 hover:bg-slate-50 text-left  dark:text-white/90" onClick={onToggle}>
        <span>{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="py-1">
          {children}
          {isCompleted && (
            <div className="text-right p-4">
              <button className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700" onClick={onNextModuleClick}>
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
      title: "Module 1: Budgeting Without Boring Yourself to Death",
      lessons: [
        { id: 1, title: "Track That Spend Like a Netflix Binge Log", duration: "6 min", content: `Tracking your spending isn’t about being boring or obsessive — it’s about gaining power over your money. Think of it like binge-watching your finances. Every rupee you spend tells a story. Just like you track episodes, you should track where your money goes — food, subscriptions, impulse shopping, or those "just one coffee" moments that add up fast.

Start by categorizing your expenses. Use budgeting apps, spreadsheets, or even pen and paper. The key is consistency. Do it for a week, and you’ll already notice patterns. Do it for a month, and you’ll find habits you didn’t know you had — like spending ₹4,000 a month on food delivery.

Tracking doesn’t mean cutting all fun. It just helps you understand your ‘money leaks.’ You’ll feel more in control when you realize that skipping two impulse buys a week can save you enough for a concert ticket, a weekend trip, or that new gadget you’ve been eyeing. 

Also, seeing where your money goes brings clarity to what *really* matters to you. Maybe you love buying books or investing in fitness — and that’s fine! But now, you’ll be doing it consciously, not out of habit. 

Over time, tracking turns into a superpower. You can predict your spending, budget smarter, and avoid nasty surprises like an empty wallet days before payday. 

Treat your expenses like plot twists — the more you know, the more you can control the story. The goal isn’t perfection. The goal is awareness. And once you have that, budgeting doesn’t feel like punishment — it feels like strategy. It’s not about saying no to coffee, it’s about saying yes to your bigger goals. So open that app, check that spreadsheet, and let your money habits binge-watch *you* for a change.`
,
 },


        { id: 2, title: "Wants vs Needs – Yeah, That Debate", duration: "5 min", content: `Let’s settle this age-old fight: wants vs needs. It’s not about being boring or cheap — it’s about being intentional. Needs are your non-negotiables: food, rent, Wi-Fi (yes, in today’s world), electricity, transport, basic clothing. Wants are everything else — dining out, the latest phone, streaming subscriptions, impulse shopping sprees, and that extra-large frappe you didn’t need but *had* to post on your story.

Here’s the thing: both are important. Needs keep you alive and functioning. Wants make life fun. But if you don’t know the difference, your bank account will feel the burn — fast.

A smart way to balance is the 50/30/20 rule: 50% of your income for needs, 30% for wants, and 20% for savings/investments. It’s not rigid, but it gives you clarity. The next time you're about to spend, pause and ask, “Do I *need* this, or do I just *want* it right now?”

Recognizing your wants doesn’t mean cutting them out — it means planning for them. Want that weekend trip? Cool. Save for it. That way, you enjoy it without post-trip regret or credit card guilt. It’s like earning your dopamine hit — but with less financial hangover.

Also, life throws curveballs — emergencies, job changes, health issues. If you’ve got your needs and savings sorted, those curveballs hurt way less. Wants can wait, your financial safety net can’t.

The real flex isn’t blowing cash for the 'gram — it’s having control. When you master this debate, you're not depriving yourself; you're designing a lifestyle. One that’s fun, secure, and future-proof.

So next time your cart is full, do a vibe check: need or want? Your future self is watching. And they’re either saying “good call” or “bruh…” — your move.`
 },
        { id: 3, title: "Making Budgets Feel Less Like Diets", duration: "7 min", content:  `
Budgeting apps, cash envelopes, or simple spreadsheets — everyone’s got their style. The key is to find what fits your lifestyle. Some people prefer using apps like Mint or You Need A Budget, which automate expense tracking and send reminders. Others like old-school cash stuffing to physically see their money. Whatever works for you, the goal is to stop money from disappearing mysteriously each month. You’ll learn where you’re overspending, spot wasteful habits, and finally get your finances under control. Bonus: It feels awesome to crush your budget goals.
        `, },
        { id: 4, title: "Quiz: Budget Like a Boss", duration: "6 min", isQuiz: true, questions: [
          { id: 1, question: "Which app helps track expenses?", options: ["Spotify", "Money Manager", "YouTube", "Snapchat"], correctAnswer: 1 },
          { id: 2, question: "What's a 'want'?", options: ["Rent", "Electricity", "New Jordans", "Groceries"], correctAnswer: 2 },
          { id: 3, question: "How often should you check your budget?", options: ["Once a year", "Every day", "Once a month", "Never"], correctAnswer: 2 },
          { id: 4, question: "A good budget should be...", options: ["Restrictive", "Unrealistic", "Flexible", "Complicated"], correctAnswer: 2 },
          { id: 5, question: "What's the 50/30/20 rule?", options: ["All fun", "50% savings", "Needs-Wants-Savings split", "30% shopping"], correctAnswer: 2 }
        ]},
      ]
    },
    {
      title: "Module 2: Adulting With Your Bank Account",
      lessons: [
        { id: 5, title: "Salary Hits, Now What?", duration: "5 min", content: `
Saving and investing aren’t the same, but they’re both super important. Saving means putting money aside for short-term goals or emergencies, usually in safe places like savings accounts. Investing is about growing your money over time by buying stocks, mutual funds, or other assets. Investing has risks but can give bigger returns, while saving is safer but grows slower. Both work together to make sure you have cash when you need it and also build wealth for the future. The key? Know when to save and when to invest depending on your goals and risk comfort.
        `, },
        { id: 6, title: "Bank Types 101 – Savings, Current & Digital", duration: "6 min", content: `
An emergency fund is your financial safety net. It’s money you set aside specifically for unexpected events like medical bills, car repairs, or sudden job loss. Experts say aim for 3 to 6 months of living expenses in this fund. Keep it liquid and separate from your everyday money so you don’t accidentally spend it. Having this fund means you won’t have to stress or take on bad debt when life hits a curveball. It’s like an undo button that keeps your financial life from crashing — peace of mind included.
        `,},
        { id: 7, title: "UPI & Cards – Not Just Tap and Pay", duration: "7 min", content: `
Why let your savings just chill when they can grow? High-interest savings accounts or liquid mutual funds pay better interest rates than regular savings accounts. That means your money grows faster without extra effort. These options are still low risk and give you quick access to your cash if needed. It’s a smart way to beat inflation and keep your emergency fund or short-term goals growing steadily. Think of it as your money hustling for you while you focus on other stuff.
        `,},
        { id: 8, title: "Quiz: Banking Basics No One Taught You", duration: "5 min", isQuiz: true, questions: [
          { id: 1, question: "Which account type is for daily use?", options: ["Fixed Deposit", "Savings", "Current", "Loan"], correctAnswer: 1 },
          { id: 2, question: "UPI stands for?", options: ["Unified Payment Interface", "Unlimited Payment Input", "User Payment Index", "Unpaid Interface"], correctAnswer: 0 },
          { id: 3, question: "Debit card means?", options: ["Spending future money", "Loan card", "Spending your own money", "Only for ATM"], correctAnswer: 2 },
          { id: 4, question: "IFSC code is used for?", options: ["GPS tracking", "Bank transfers", "SMS OTP", "Password reset"], correctAnswer: 1 },
          { id: 5, question: "Your salary should go where first?", options: ["Spending", "SIP", "Shopping", "Emergency fund"], correctAnswer: 3 }
        ]},
      ]
    },
    {
      title: "Module 3: Save Like a Pro, Spend Like a King",
      lessons: [
        { id: 9, title: "Why Saving Early Feels Like a Cheat Code", duration: "5 min", content: `Saving early isn’t just smart — it’s literally a cheat code for life. Why? One word: **compounding**. It’s when your money earns money, and then that money earns more money. It’s the financial version of “leveling up” without grinding 24/7.

Let’s say you save ₹500/month starting at 20, and your buddy starts at 30. Even if they save double, you’ll still likely end up richer — because you gave your money more *time* to grow. Time is your biggest financial flex when you’re young.

Saving early doesn’t mean skipping all the fun. It’s about building habits. Automate it — set up a recurring deposit or SIP (Systematic Investment Plan) so it feels invisible. You won’t miss the ₹500 now, but you’ll be high-fiving yourself hard at 35 when that stash is helping you chill while others stress.

And the earlier you start, the more freedom you earn. Want to quit a toxic job someday? Savings give you options. Want to take a break and travel or study? Savings back you up. It’s not about hoarding — it’s about *choice*. And choice is power.

Start small. Even saving ₹10 a day makes a difference. Skip one overpriced coffee, and boom — future you just got richer. Bonus tip: put that saved money in a place it grows (not under your mattress). Think mutual funds, recurring deposits, or even digital gold — whatever suits your risk level.

Saving early won’t make you an overnight millionaire. But it does make sure you don’t have to work till you’re 80 just to survive. It’s peace of mind with a long-term payout.

So yeah — saving early? Total cheat code. Use it. Abuse it. Your future self will be chilling under palm trees while others hustle to break even.`
 },
        { id: 10, title: "Types of Savings Accounts – More Than One Trick Pony", duration: "6 min", content: `You probably think a savings account is just a place to dump cash and forget about it — but there’s actually a whole squad of them, each with its own vibe and perks. Not all savings accounts are created equal, and knowing which one to use is like knowing when to play which Pokémon — strategy matters.

First up, the regular savings account. It’s the basic one, good for storing your salary, making easy transactions, and earning a bit of interest (usually 2.5–4%). Great for short-term money and everyday use.

Then comes the high-yield savings account — this one gives better interest, usually offered by online or neo-banks. The catch? You might not get an ATM card or branch access. Perfect for stashing money you don’t want to touch.

There’s also the fixed deposit (FD) account. Lock your money for a fixed period — say, 1 year — and earn higher interest (up to 7–8%). It’s safe, stable, and great for your medium-term goals, like buying a laptop or planning a trip.

Recurring deposits (RDs) are another gem. You commit to saving a fixed amount every month, and at the end, you get it back with interest. It’s like forced savings with a reward — perfect for building discipline.

Want flexibility? Go for a flexi-fixed deposit or auto-sweep account — it combines savings + FD. Your balance above a limit gets converted into FD automatically. You get liquidity *and* better returns.

Moral of the story? Don’t dump all your cash into one account like it’s 2005. Mix it up depending on your needs — spending, saving, growing, or just chilling. Your money deserves a strategy, not just storage.

So yeah — savings accounts? Total underrated heroes. Use them smartly, and your money starts working harder than you do.` },
        { id: 11, title: "Quiz: Smart Savings", duration: "6 min", isQuiz: true, questions: [
          { id: 1, question: "What’s compound interest?", options: ["One-time gain", "Interest on interest", "Flat returns", "Gamble"], correctAnswer: 1 },
          { id: 2, question: "What’s a recurring deposit?", options: ["Fixed Deposit", "Auto-saving plan", "Loan", "None"], correctAnswer: 1 },
          { id: 3, question: "Which app helps save spare change?", options: ["Google Maps", "Jar", "Snapchat", "Zomato"], correctAnswer: 1 },
          { id: 4, question: "Best way to start saving?", options: ["Start big", "Skip lunch", "Start small, stay consistent", "Wait for raise"], correctAnswer: 2 },
          { id: 5, question: "Emergency fund goes where?", options: ["Wallet", "Crypto", "Low-risk account", "Under bed"], correctAnswer: 2 }
        ]},
      ]
    },
    {
      title: "Module 4: Invest Without Stress",
      lessons: [
        { id: 12, title: "SIP – Your Lazy BFF That Builds Wealth", duration: "5 min", content: `Think of a SIP (Systematic Investment Plan) like that chill friend who shows up every month, does their job quietly, and over time builds you an empire. It's not flashy, it's not risky (if done right), but it's *consistent* — and that's where the magic happens.

SIPs are a way to invest in mutual funds, where a fixed amount (as low as ₹100) gets auto-deducted from your bank account at regular intervals — usually monthly. Instead of dropping a huge chunk of money all at once, SIPs let you build wealth little by little, without even thinking about it.

The best part? You don’t have to time the market. Markets go up and down — SIPs ride that wave for you. When markets are low, you buy more units. When they’re high, you buy fewer. Over time, this “rupee cost averaging” smooths out the risks.

Also, thanks to compounding, your early investments start earning returns, and then *those* returns earn returns. Give it 5–10 years, and your money snowballs. It’s like planting a tiny money tree today that turns into a forest tomorrow — just by watering it monthly.

You can do SIPs for different goals — a vacation, emergency fund, your dream bike, or even retirement. Choose mutual funds based on your risk tolerance — equity for higher returns (and risk), debt for stability, or hybrid funds for balance.

And no, you don’t need a broker in a suit. Tons of apps let you set up SIPs with a few taps. It's financial adulting made Gen Z-friendly.

So if you’re lazy, forgetful, or just bad at saving — let SIP be your buddy. It’s the one kind of auto-pay that actually builds your future.`
},
        { id: 13, title: "Stocks vs Mutual Funds – What’s the Tea?", duration: "7 min", content: `Alright, let's spill the tea on Stocks vs Mutual Funds — two of the hottest topics in investing, but with different vibes.

Stocks are like owning a slice of your favorite brand — you become a part-owner of a company. When the company does well, your stock’s value goes up; if it tanks, your investment shrinks. It’s a rollercoaster ride: high risk, but potentially high rewards. You need to keep up with market news, company performance, and sometimes, gut feelings. Stocks give you control but require attention.

Mutual Funds, on the other hand, are like a curated playlist of stocks, bonds, or other assets managed by pros. You pool your money with other investors, and the fund manager does the heavy lifting—deciding where to invest, buying and selling based on research. It’s less hands-on, which is perfect if you don’t want to track individual stocks daily. Mutual Funds spread risk across many assets, making it generally safer than buying single stocks.

The trade-off? Mutual Funds come with management fees, while stocks don’t, but managing stocks yourself costs time and effort. If you’re just starting out or want a more passive approach, mutual funds are your best friend. But if you love the thrill and have time to research, stocks might suit your style.

Bottom line: Stocks = DIY investment with higher risk/reward. Mutual Funds = professional management and diversification for a smoother ride. Both have their place, and knowing what fits your personality and goals is key to growing your money without losing your mind.` },
        { id: 14, title: "Quiz: Invest Like a Genzillionaire", duration: "6 min", isQuiz: true, questions: [
          { id: 1, question: "SIP stands for?", options: ["Systematic Investment Plan", "Single Income Plan", "Super Investment Program", "Saving in Pockets"], correctAnswer: 0 },
          { id: 2, question: "Mutual funds are managed by?", options: ["Rappers", "Fund managers", "Government", "Banks"], correctAnswer: 1 },
          { id: 3, question: "Risk level of equity mutual funds?", options: ["Low", "Zero", "Moderate to High", "None"], correctAnswer: 2 },
          { id: 4, question: "Can SIP be automated?", options: ["Yes", "No"], correctAnswer: 0 },
          { id: 5, question: "Best age to start investing?", options: ["35", "When rich", "Now", "After retirement"], correctAnswer: 2 }
        ]},
      ]
    },
    {
      title: "Module 5: Avoiding Scams, FOMO & Financial Chaos",
      lessons: [
        { id: 15, title: "Red Flags: When It's Too Good to Be True", duration: "6 min", content: "From fake IPOs to 'crypto kings' – spot the fraud before it spots you." },
        { id: 16, title: "Quiz: Scam Proof Yourself", duration: "6 min", isQuiz: true, questions: [
          { id: 1, question: "Phishing means?", options: ["Fishing hobby", "Fake emails to steal info", "Crypto mining", "Hackathon"], correctAnswer: 1 },
          { id: 2, question: "What’s a Ponzi scheme?", options: ["Government policy", "Legit investment", "Fraud using new investors' money", "Stock trick"], correctAnswer: 2 },
          { id: 3, question: "Never share what over phone?", options: ["Name", "OTP", "Weather", "Pet's name"], correctAnswer: 1 },
          { id: 4, question: "Best response to ‘get rich quick’ ads?", options: ["Click fast", "Report & ignore", "Invest blindly", "Share with friends"], correctAnswer: 1 },
          { id: 5, question: "Crypto investments should be?", options: ["YOLO all in", "Well-researched", "Based on FOMO", "Never"], correctAnswer: 1 }
        ]}
      ]
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
      <aside className="w-72 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-y-auto ">
        <div className="p-4 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <h1 className="text-xl ">Course Modules</h1>
        </div>
        {modules.map((module, index) => {
          const isCompleted = module.lessons.every((l) => completedLessons.includes(l.id))
          return (
            <AccordionItem
              key={index}
              title={module.title}
              isOpen={index === openModuleIndex}
              onToggle={() => setOpenModuleIndex(index === openModuleIndex ? -1 : index)}
              isCompleted={isCompleted}
              onNextModuleClick={() => setOpenModuleIndex((prev) => prev + 1 < modules.length ? prev + 1 : 0)}
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