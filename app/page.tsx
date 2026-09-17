import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.25fr_0.75fr]" aria-labelledby="home-heading">
      <div>
        <p className="eyebrow">LEARN THE WEB. BUILD WHAT’S NEXT.</p>
        <h1 id="home-heading" className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-7xl">Your next chapter<br />starts <span className="text-teal-800">here.</span></h1>
        <p className="mt-7 max-w-lg text-lg leading-8 text-slate-600">Welcome to Course Catalog. Discover the subjects, tools and ideas that bring modern web applications to life.</p>
        <Link href="/courses" className="primary-link mt-9">Explore courses <span aria-hidden="true">→</span></Link>
        <p className="mt-6 text-sm text-slate-500">Frontend · Backend · Beyond</p>
      </div>
      <aside aria-label="Learning path" className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-teal-300">THE LEARNING PATH</p>
        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight">From interface<br />to infrastructure.</h2>
        <ol className="mt-9 divide-y divide-slate-700">
          <li className="flex gap-4 py-5"><span className="text-sm text-teal-300">01</span><div><h3 className="font-medium">Build the experience</h3><p className="mt-1 text-sm text-slate-400">Modern Frontend</p></div></li>
          <li className="flex gap-4 py-5"><span className="text-sm text-teal-300">02</span><div><h3 className="font-medium">Connect the pieces</h3><p className="mt-1 text-sm text-slate-400">Backend & Databases</p></div></li>
          <li className="flex gap-4 py-5"><span className="text-sm text-teal-300">03</span><div><h3 className="font-medium">Go further</h3><p className="mt-1 text-sm text-slate-400">APIs, Security & AI</p></div></li>
        </ol>
      </aside>
    </section>
  );
}
