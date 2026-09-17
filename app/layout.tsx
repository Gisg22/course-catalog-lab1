import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog | Advanced Web Technologies",
  description: "Explore six courses in modern frontend, backend, databases, security and API development.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-950 antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4">Skip to content</a>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-6">
            <Link href="/" className="flex items-center gap-3 text-lg font-bold tracking-tight"><span aria-hidden="true" className="grid size-9 place-items-center rounded-lg bg-teal-800 text-white">C</span>course catalog<span className="text-teal-700">.</span></Link>
            <nav aria-label="Main navigation" className="flex items-center gap-2 text-sm font-medium">
              <Link href="/" className="rounded-lg px-3 py-2 transition hover:bg-teal-50 hover:text-teal-800">Home</Link>
              <Link href="/courses" className="rounded-lg px-3 py-2 transition hover:bg-teal-50 hover:text-teal-800">Courses</Link>
              <Link href="/about" className="rounded-lg px-3 py-2 transition hover:bg-teal-50 hover:text-teal-800">About</Link>
            </nav>
          </div>
        </header>
        <main id="main-content" className="mx-auto w-full max-w-6xl flex-1 px-6">{children}</main>
        <footer className="border-t border-slate-200"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6 py-7 text-sm text-slate-500"><p>Advanced Web Technologies</p><p>Lab 1 · A foundation for the semester.</p></div></footer>
      </body>
    </html>
  );
}
