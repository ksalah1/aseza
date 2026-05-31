import { MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

type RelatedLink = {
  href: string;
  label: string;
};

type NamedList = {
  title: string;
  items: string[];
};

type AsezaBusinessGuideProps = {
  locale: string;
  badge: string;
  title: string;
  hero: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  whatsappMessage: string;
  valueTitle: string;
  valueBody: string;
  mainTitle: string;
  mainIntro?: string;
  mainItems: NamedList[];
  needsTitle: string;
  needs: string[];
  helpTitle: string;
  help: string[];
  stepsTitle: string;
  steps: string[];
  noteTitle?: string;
  noteBody?: string;
  finalCta: string;
  related: RelatedLink[];
  currentLabel: string;
};

export function AsezaBusinessGuide({
  badge,
  title,
  hero,
  primaryCta,
  secondaryCta,
  secondaryHref,
  whatsappMessage,
  valueTitle,
  valueBody,
  mainTitle,
  mainIntro,
  mainItems,
  needsTitle,
  needs,
  helpTitle,
  help,
  stepsTitle,
  steps,
  noteTitle,
  noteBody,
  finalCta,
  related,
  currentLabel,
}: AsezaBusinessGuideProps) {
  const safeRelated = related.slice(0, 3);

  return (
    <main className="bg-background text-primary" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "تسجيل الشركات", href: "/register-business-in-aseza" },
            { label: currentLabel },
          ]}
        />
      </div>

      <section className="bg-primary text-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold text-accent">{badge}</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-primary-100 md:text-lg">
            {hero}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
            >
              <MessageCircle className="size-5" aria-hidden />
              {primaryCta}
            </a>
            <Link
              href={secondaryHref}
              className="rounded-xl border border-primary-200 px-6 py-3 font-bold text-background transition-colors hover:border-accent hover:text-accent"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <Section width="wide">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card accent className="h-full">
            <h2 className="text-2xl font-bold text-primary">{valueTitle}</h2>
            <p className="mt-4 leading-8 text-primary-600">{valueBody}</p>
          </Card>
          <div>
            <h2 className="text-2xl font-bold text-primary">{mainTitle}</h2>
            {mainIntro ? (
              <p className="mt-3 leading-7 text-primary-600">{mainIntro}</p>
            ) : null}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {mainItems.map((group) => (
                <Card key={group.title} hoverable>
                  <h3 className="text-lg font-semibold text-primary">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-primary-600">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-primary">{needsTitle}</h2>
            <ul className="mt-5 grid gap-3 text-primary-600 sm:grid-cols-2">
              {needs.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-bold text-primary">{helpTitle}</h2>
            <ul className="mt-5 space-y-3 text-primary-600">
              {help.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          {stepsTitle}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step} className="relative overflow-hidden">
              <span className="text-4xl font-bold text-accent/50">
                {index + 1}
              </span>
              <p className="mt-3 font-semibold leading-7 text-primary">
                {step}
              </p>
            </Card>
          ))}
        </div>
        {noteTitle && noteBody ? (
          <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/10 p-6">
            <h3 className="text-lg font-bold text-primary">{noteTitle}</h3>
            <p className="mt-3 leading-8 text-primary-600">{noteBody}</p>
          </div>
        ) : null}
      </Section>

      <Section width="wide" background="primary">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{finalCta}</h2>
            <p className="mt-3 text-primary-100">
              أرسل التفاصيل الأساسية عبر واتساب، وسنوضح لك المسار والخطوة
              التالية بوضوح.
            </p>
          </div>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
          >
            <MessageCircle className="size-5" aria-hidden />
            تواصل عبر واتساب
          </a>
        </div>
      </Section>

      <Section width="wide" className="py-10 md:py-14">
        <h2 className="text-xl font-bold text-primary">روابط مرتبطة</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {safeRelated.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-primary-100 bg-white px-4 py-3 font-semibold text-primary transition-colors hover:border-accent hover:text-accent-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
