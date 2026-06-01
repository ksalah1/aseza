import { MessageCircle } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { whatsappLink, siteConfig } from "@/lib/site";

const EN_WHATSAPP_MSG =
  `Hello, I would like to register a company in ASEZA.
Activity:
New or existing company?
Any foreign partners?
Import/export, services, or manufacturing?`;

const CARDS = [
  {
    title: "New Registration",
    body: "Starting a new company in ASEZA? Send basic details first; we identify the right service path, quote the scope, then request documents after engagement is clear.",
    cta: "Start on WhatsApp →",
    href: whatsappLink(EN_WHATSAPP_MSG),
    external: true,
  },
  {
    title: "Foreign Investor",
    body: "Registering from outside Jordan? We identify the right foreign-investor path first, then clarify parent-company documents, attestations, and remote setup after scope is agreed.",
    cta: "Foreign Investor Guide →",
    href: "/ar/foreign-investors",
    external: false,
    note: "Guide in Arabic",
  },
  {
    title: "Existing Company",
    body: "Amendment, renewal, or post-registration compliance? We manage ongoing ASEZA obligations.",
    cta: "Request Service →",
    href: whatsappLink(EN_WHATSAPP_MSG),
    external: true,
  },
] as const;

export function EnLanding() {
  return (
    <>
      <Section width="narrow" background="primary">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-background md:text-4xl lg:text-5xl">
            Register Your Company in the Aqaba Special Economic Zone
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-100">
            Private legal service by Al-Barakat Law Firm — licensed attorney,
            clear fees, basic situation review before any document request.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(EN_WHATSAPP_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-primary transition-colors hover:bg-accent-500"
          >
            <MessageCircle className="size-5" aria-hidden />
            Contact us on WhatsApp — English or Arabic
          </a>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <Card key={card.title} hoverable>
              <h2 className="text-lg font-bold text-primary">{card.title}</h2>
              <p className="mt-3 leading-relaxed text-primary-600">{card.body}</p>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:underline"
              >
                {card.cta}
              </a>
              {"note" in card && card.note && (
                <p className="mt-1 text-xs text-primary-400">{card.note}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Attorney block */}
      <Section width="narrow" background="muted">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-start">
          <div
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-accent"
            aria-hidden
          >
            NB
          </div>
          <p className="text-primary-700">
            Your matter is supervised by{" "}
            <strong className="text-primary">Nour Barakat</strong>, Licensed Attorney,
            Jordan Bar Association — Membership No. 16872
          </p>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section width="narrow">
        <p className="text-center text-xs text-primary-400">
          aseza.co is a private legal service by Al-Barakat Law Firm. It is not the
          official website of the Aqaba Special Economic Zone Authority. Official
          site:{" "}
          <a
            href={siteConfig.officialAsezaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            aseza.jo
          </a>
        </p>
      </Section>
    </>
  );
}
