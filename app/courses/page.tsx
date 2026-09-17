import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section aria-labelledby="courses-heading" className="py-14 sm:py-20">
      <p className="eyebrow">THE COURSE COLLECTION</p>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div><h1 id="courses-heading" className="page-title">Build your next skill.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">From your first component to a secure backend. Explore the courses that connect the modern web.</p></div>
        <span className="text-sm text-slate-500">{courses.length} courses · Advanced Web Technologies</span>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} credits={course.credits} likes={course.likes} />)}
      </div>
    </section>
  );
}
