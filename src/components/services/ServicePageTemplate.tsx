import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

export type ServiceRelatedLink = {
  label: string;
  href: string;
};

export type ServicePageContent = {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  whatsappMessage: string;
  secondaryCta?: { label: string; href: string };
  whatWeDo: string[];
  forWho: string[];
  coreTitle: string;
  coreIntro?: string;
  coreItems: string[];
  needsTitle?: string;
  needs: string[];
  steps: string[];
  afterTitle?: string;
  after?: string[];
  related: ServiceRelatedLink[];
};

export function ServicePageTemplate({
  content,
  locale,
}: {
  content: ServicePageContent;
  locale: string;
}) {
  const ar = locale === "ar";
  const ui = {
    home: ar ? "الرئيسية" : "Home",
    services: ar ? "خدماتنا" : "Our Services",
    whatWeDo: ar ? "ماذا سنفعل لك؟" : "What we will do for you",
    forWho: ar ? "لمن هذه الخدمة؟" : "Who is this service for?",
    needs: ar ? "ماذا نحتاج منك؟" : "What we need from you",
    steps: ar ? "خطوات العمل" : "How it works",
    after: ar ? "بعد ذلك" : "After that",
    ctaTitle: ar ? "ابدأ بخطوة واضحة" : "Start with a clear step",
    ctaBody: ar
      ? "أرسل ملخصاً قصيراً عن وضعك الحالي، وسنحدد لك المسار والخطوة التالية. نطلب الوثائق بعد تحديد نطاق الخدمة والاتفاق على المتابعة."
      : "Send a short summary of your current situation and we will map out the path and your next step. We request documents only after the scope of work is defined and engagement is agreed.",
    related: ar ? "خدمات مرتبطة" : "Related services",
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb
          items={[
            { label: ui.home, href: "/" },
            { label: ui.services, href: "/services" },
            { label: content.title },
          ]}
        />
      </div>

      <Section width="wide" className="pb-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold text-accent">{content.label}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(content.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1DA851]"
              >
                <MessageCircle className="size-4" aria-hidden />
                {content.ctaLabel}
              </a>
              {content.secondaryCta ? (
                <a
                  href={content.secondaryCta.href}
                  className="inline-flex items-center rounded-lg border border-primary-200 px-5 py-3 font-semibold text-primary transition hover:border-accent hover:text-accent"
                >
                  {content.secondaryCta.label}
                </a>
              ) : null}
            </div>
          </div>

          <Card accent className="bg-primary text-background">
            <h2 className="text-xl font-semibold">{ui.whatWeDo}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-primary-100">
              {content.whatWeDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="requirements" width="wide" background="muted" className="py-12 md:py-16">
        <div className="grid gap-5 lg:grid-cols-2">
          <ListCard title={ui.forWho} items={content.forWho} />
          <ListCard
            title={content.coreTitle}
            intro={content.coreIntro}
            items={content.coreItems}
          />
          <ListCard
            title={content.needsTitle ?? ui.needs}
            items={content.needs}
          />
          <ListCard title={ui.steps} items={content.steps} ordered />
        </div>
      </Section>

      {content.after?.length ? (
        <Section width="default" className="py-12 md:py-16">
          <ListCard title={content.afterTitle ?? ui.after} items={content.after} />
        </Section>
      ) : null}

      <Section width="default" background="muted" className="py-12 md:py-16">
        <Card accent>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-primary">{ui.ctaTitle}</h2>
              <p className="mt-3 text-primary-600">{ui.ctaBody}</p>
            </div>
            <a
              href={whatsappLink(content.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-4" aria-hidden />
              {content.ctaLabel}
            </a>
          </div>
        </Card>
      </Section>

      <Section width="default" className="py-12 md:py-16">
        <h2 className="text-2xl font-semibold text-primary">{ui.related}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {content.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function ListCard({
  title,
  intro,
  items,
  ordered,
}: {
  title: string;
  intro?: string;
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Card>
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      {intro ? <p className="mt-3 text-sm leading-7 text-primary-600">{intro}</p> : null}
      <Tag className="mt-4 space-y-3 text-sm leading-7 text-primary-600">
        {items.map((item, index) => (
          <li key={item} className="flex gap-2">
            <span className="mt-0.5 font-semibold text-accent">
              {ordered ? `${index + 1}.` : "•"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </Card>
  );
}
