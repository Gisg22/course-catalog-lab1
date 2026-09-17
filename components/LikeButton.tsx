"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button type="button" onClick={() => setLikes((current) => current + 1)} aria-label={`Like this course. ${likes} likes`} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-rose-200 bg-rose-50 px-6 py-3 font-semibold text-rose-800 transition hover:border-rose-400 hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-700">
      <span aria-hidden="true">❤</span><span aria-live="polite" aria-atomic="true">{likes}</span>
    </button>
  );
}
