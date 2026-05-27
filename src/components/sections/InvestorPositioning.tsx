import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";

export function InvestorPositioning() {
  const t = useTranslations("investor");
  const benefits = t.raw("benefits.cards") as { title: string; text: string }[];
  const sectors = t.raw("suitable.sectors") as string[];
  const facts = t.raw("snapshot.items") as string[];
  const comparison = t.raw("comparison.options") as {
    title: string;
    bestFor: string;
    limitation: string;
  }[];
  const activityCards = t.raw("activityCheck.cards") as { title: string; text: string }[];
  const legalAlerts = t.raw("legalAlerts.items") as string[];
  const officialRefs = t.raw("officialRefs.items") as { title: string; description: string; url: string }[];

  return (
    <>
      <Section id="why-aqaba" width="wide" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">{t("benefits.title")}</h2>
          <p className="mt-4 text-lg text-primary-500">{t("benefits.subtitle")}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((card) => (
            <Card key={card.title} hoverable>
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-600">{card.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("suitable.title")}</h2>
            <ul className="mt-6 space-y-3">
              {sectors.map((sector) => (
                <li key={sector} className="flex items-start gap-3 text-primary-600">
                  <span className="mt-2 size-1.5 rounded-full bg-accent" aria-hidden />
                  <span>{sector}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-primary-500">{t("suitable.note")}</p>
          </Card>

          <Card>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("snapshot.title")}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact} className="rounded-xl border border-primary-100 bg-primary-50 p-4 text-sm font-medium text-primary-700">
                  {fact}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-primary-500">{t("snapshot.note")}</p>
          </Card>
        </div>
      </Section>

      <Section width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">{t("comparison.title")}</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-3">
          {comparison.map((option) => (
            <Card key={option.title}>
              <h3 className="text-lg font-semibold text-primary">{option.title}</h3>
              <p className="mt-4 text-sm text-primary-500">{t("comparison.bestForLabel")}</p>
              <p className="mt-1 leading-relaxed text-primary-700">{option.bestFor}</p>
              <p className="mt-4 text-sm text-primary-500">{t("comparison.limitationLabel")}</p>
              <p className="mt-1 leading-relaxed text-primary-700">{option.limitation}</p>
            </Card>
          ))}
        </div>
      </Section>


      <Section width="wide" background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">{t("activityCheck.title")}</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3">
          {activityCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-600">{card.text}</p>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-sm text-primary-500">{t("activityCheck.note")}</p>
      </Section>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-primary">ملاحظات ضريبية</h3>
            <p className="mt-3 leading-relaxed text-primary-600">{t("taxNote")}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-primary">ملاحظات جمركية</h3>
            <p className="mt-3 leading-relaxed text-primary-600">{t("customsNote")}</p>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <Card>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("officialRefs.title")}</h2>
          <p className="mt-3 text-primary-500">{t("officialRefs.intro")}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {officialRefs.map((ref) => (
              <a key={ref.title} href={ref.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-primary-100 bg-primary-50 p-4 hover:bg-primary-100/40">
                <h3 className="font-semibold text-primary">{ref.title}</h3>
                <p className="mt-2 text-sm text-primary-600">{ref.description}</p>
              </a>
            ))}
          </div>
        </Card>
      </Section>

      <Section width="wide">
        <Card>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("legalAlerts.title")}</h2>
          <ul className="mt-5 space-y-3">
            {legalAlerts.map((item) => (
              <li key={item} className="flex items-start gap-3 text-primary-600">
                <span className="mt-2 size-1.5 rounded-full bg-accent" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
      <Section width="narrow" background="muted">
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-primary md:text-3xl">{t("international.title")}</h2>
          <p className="mt-4 leading-relaxed text-primary-600">{t("international.body")}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
          >
            <MessageCircle className="size-5" aria-hidden />
            {t("international.cta")}
          </a>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-background transition-colors hover:bg-primary-700"
            >
              {t("ctaPrimary")}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </Card>
      </Section>
    </>
  );
}
