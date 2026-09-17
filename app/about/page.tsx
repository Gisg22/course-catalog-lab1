export default function AboutPage() {
  return (
    <section className="max-w-3xl py-16 sm:py-24" aria-labelledby="about-heading">
      <p className="eyebrow">ABOUT THE PROJECT</p>
      <h1 id="about-heading" className="page-title">A foundation for<br />what comes next.</h1>
      <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">
        <p>Course Catalog brings six subjects in modern web development together, with a clear overview of each course and its credits.</p>
        <p>This project was built for Lab 1 of the Advanced Web Technologies course, using Next.js, TypeScript and the App Router.</p>
        <p>The catalog currently uses sample course data and local likes, and will grow throughout the semester as new features are introduced.</p>
      </div>
    </section>
  );
}
