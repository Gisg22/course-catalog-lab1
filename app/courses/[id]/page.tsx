import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) notFound();

  return (
    <article className="py-14 sm:py-20">
      <Link href="/courses" className="text-sm font-semibold text-teal-800 hover:underline">← All courses</Link>
      <div className="mt-9 grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <p className="eyebrow">{course.isElective ? "ELECTIVE COURSE" : "CORE COURSE"}</p>
          <h1 className="page-title max-w-3xl">{course.title}</h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">{course.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-8">
            <LikeButton key={course.id} initialLikes={course.likes} />
            <p className="text-sm text-slate-500">Interested? Give this course a like.</p>
          </div>
        </div>
        <aside aria-label="Course information" className="h-fit rounded-2xl bg-slate-950 p-8 text-white">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal-300">AT A GLANCE</p>
          <p className="mt-6 text-6xl font-semibold tracking-tight">{course.credits}</p>
          <p className="mt-1 text-slate-300">Academic credits</p>
          <dl className="mt-8 space-y-4 border-t border-slate-700 pt-6 text-sm">
            <div className="flex justify-between gap-3"><dt className="text-slate-400">Type</dt><dd>{course.isElective ? "Elective" : "Core"}</dd></div>
            <div><dt className="text-slate-400">Program</dt><dd className="mt-2">Advanced Web Technologies</dd></div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
