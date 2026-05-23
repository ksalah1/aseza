import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

const HEADING_ID = "about-attorney-heading";

export function AboutAttorney() {
  const t = useTranslations("aboutAttorney");
  const locale = useLocale();
  const credentials = t.raw("credentials") as string[];

  return (
    <Section width="wide" aria-labelledby={HEADING_ID}>
      {/* Image first in the DOM: stacks on top on mobile, and the grid's
          inline axis follows text direction — image sits at the start edge
          (left in LTR, right in RTL) with no hardcoded left/right. */}
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,400px)_1fr] md:gap-14">
        <div className="mx-auto w-full max-w-[400px]">
          <Image
            src={`/images/attorney-monogram-${locale}.svg`}
            alt={t("imageAlt")}
            width={800}
            height={1000}
            priority={false}
            sizes="(min-width: 768px) 400px, 100vw"
            className="w-full rounded-2xl border border-primary-100 shadow-sm"
          />
        </div>

        <div>
          <h2
            id={HEADING_ID}
            className="text-3xl font-bold text-primary md:text-4xl"
          >
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg font-semibold text-accent-600">
            {t("nameTitle")}
          </p>
          <p className="mt-5 text-pretty leading-relaxed text-primary-600">
            {t("bio")}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600"
              >
                {credential}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("cta")}
          </a>
        </div>
      </div>
    </Section>
  );
}
