import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} prefetch={false} className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal-600 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
      <div className="mb-7 flex items-center justify-between text-sm text-slate-500">
        <span className="rounded-full bg-teal-50 px-3 py-1 font-medium text-teal-800">{credits} credits</span>
        <span aria-label={`${likes} likes`}><span aria-hidden="true">♡</span> {likes}</span>
      </div>
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <p className="mb-8 leading-7 text-slate-600">{description}</p>
      <span className="mt-auto text-sm font-semibold text-teal-800">Explore course <span className="ml-2 inline-block transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
    </Link>
  );
}
