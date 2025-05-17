import { CourseHeader } from "../components/learn/CourseHeader"
import { CourseContent } from "../components/learn/CourseContent"

function Learn() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
      <CourseHeader />
      <div className="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-900 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <CourseContent />
      </div>
    </div>
  )
}

export default Learn;
