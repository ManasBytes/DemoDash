interface CourseCardProps {
  title: string
  description: string
  progress: number
}

export function CourseCard({ title, description, progress }: CourseCardProps) {
  return (
    <div className="bg-slate-50 p-6 mb-6 rounded-md">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-purple-500">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <button className="whitespace-nowrap bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Continue Learning
        </button>
      </div>
      <div className="mt-6 space-y-1">
        <div className="flex justify-between">
          <span className="text-sm font-medium">Course Progress</span>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}
