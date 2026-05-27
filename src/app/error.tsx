"use client";

import Link from "next/link";
import { useEffect } from "react";
import { whatsappLink } from "@/lib/site";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-primary">Unexpected error</h1>
      <p className="mt-4 text-primary-600">Something went wrong while loading this page. Please try again or contact us.</p>
      <p className="mt-3 text-sm text-primary-500">Private legal service support for ASEZA procedures; final approvals remain with the competent authority.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={reset} className="rounded-lg bg-primary px-4 py-2 text-background">Try again</button>
        <Link href="/ar" className="rounded-lg border border-primary px-4 py-2 text-primary">Return home</Link>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-primary px-4 py-2 text-primary">Contact via WhatsApp</a>
      </div>
    </main>
  );
}
