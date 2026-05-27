import Link from "next/link";
import { whatsappLink } from "@/lib/site";

export default function GlobalNotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-4 text-primary-600">This page may have moved or the link may be incorrect. You can return home or contact us for help.</p>
      <p className="mt-3 text-sm text-primary-500">Private legal service support for ASEZA procedures; final approvals remain with the competent authority.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/ar" className="rounded-lg bg-primary px-4 py-2 text-background">Return home</Link>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-primary px-4 py-2 text-primary">Contact via WhatsApp</a>
      </div>
    </main>
  );
}
