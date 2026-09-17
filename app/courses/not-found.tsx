import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="py-24">
      <p className="eyebrow">404 / COURSE NOT FOUND</p>
      <h1 className="page-title">Course not found</h1>
      <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">We couldn’t find that course in the catalog. Explore the collection to find your next subject.</p>
      <Link href="/courses" className="primary-link mt-8">Back to courses <span aria-hidden="true">→</span></Link>
    </section>
  );
}
