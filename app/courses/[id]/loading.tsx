export default function CourseLoading() {
  return (
    <section role="status" aria-live="polite" className="py-24">
      <p className="eyebrow">ONE MOMENT</p>
      <h1 className="page-title">Loading course…</h1>
      <p className="mt-5 text-slate-600">Getting the course details ready.</p>
      <div aria-hidden="true" className="mt-8 h-2 max-w-sm animate-pulse rounded-full bg-teal-200 motion-reduce:animate-none" />
    </section>
  );
}
