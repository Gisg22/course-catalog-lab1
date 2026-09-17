# Course Catalog

Lab 1 for Advanced Web Technologies: a course catalog built with Next.js 16 App Router, React 19, TypeScript and Tailwind CSS. The project was initialized with create-next-app, ESLint, the `@/*` alias and no `src` directory.

## Getting started

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal, normally http://localhost:3000.

```sh
npm run lint
npm run build
npm start
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Welcome page with a link to the catalog |
| `/about` | Static project description |
| `/courses` | Six course cards rendered on the server |
| `/courses/[id]` | Course details and an interactive like button |
| `/courses/does-not-exist` | Custom course-not-found screen |

## Implementation

- `lib/courses.ts` contains the supplied `Course` type, six mock records and async helpers with a 300 ms delay.
- `CourseCard` is a Server Component with explicitly typed props. Each whole card is a `next/link` link.
- The course list calls `await getCourses()` directly in its Server Component.
- The course detail page awaits `params: Promise<{ id: string }>`, calls `getCourse(id)` and uses `notFound()` for missing courses.
- `generateStaticParams()` builds routes for all six courses.
- `app/courses/[id]/loading.tsx` supplies the loading fallback; `app/courses/not-found.tsx` supplies the missing-course screen.
- `LikeButton.tsx` is the only Client Component. It uses `useState<number>(initialLikes)` and increments the current count by one on every click. Likes are local to the mounted component and reset on a full reload; they are not saved to a backend.
- The shared layout provides Home, Courses and About navigation using `next/link`. Tailwind handles responsive layouts, spacing, hover and keyboard-focus states.

## Loading behavior

Course-card links disable prefetching so development navigation can expose the loading fallback during the mock delay. Production course pages are prerendered, so cached or prerendered pages may open immediately. To observe loading, use development mode and open an unvisited course. The delay remains exactly 300 ms.

## Verification

- Production build and TypeScript validation pass; all six course-detail paths are generated.
- ESLint passes.
- Home, About, the catalog and course details open in the browser.
- Repeated likes increase the count; a reload restores the original count.
- An unknown course displays the custom not-found page with a working return link.
- The streamed development response includes the loading fallback before the completed course content.

## Structure

```text
app/
  layout.tsx
  globals.css
  page.tsx
  about/page.tsx
  courses/
    page.tsx
    not-found.tsx
    [id]/
      page.tsx
      loading.tsx
components/
  CourseCard.tsx
  LikeButton.tsx
lib/
  courses.ts
```

No external backend, authentication, persistent likes or optional bonus tasks are included in this lab.
