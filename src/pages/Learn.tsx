import { CourseHeader } from "../components/ui/learn/CourseHeader"
import { CourseContent } from "../components/ui/learn/CourseContent"

function Learn() {
  return (
    <div className="flex flex-col min-h-screen border rounded-lg overflow-hidden">
      <CourseHeader />
      <div className="flex flex-col md:flex-row flex-1">
        <CourseContent />
      </div>
    </div>
  )
}

export default Learn;
