import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Clock, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { whatsappLink } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return buildMetadata({
    locale,
    path: "/contact",
    title: t("title"),
    description: t("description"),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const isAr = useLocale() === "ar";

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }]} />
      </div>
      <Section width="narrow">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">
          {isAr ? "تواصل معنا" : "Contact Us"}
        </h1>
        <p className="mt-4 text-lg text-primary-500">
          {isAr
            ? "أسرع طريقة للتواصل معنا هي عبر واتساب. أرسل لنا وصفاً مختصراً لنشاطك وسنرد عليك في أقرب وقت."
            : "The fastest way to reach us is via WhatsApp. Send us a brief description of your activity and we'll respond shortly."}
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-xl font-semibold text-white transition-colors hover:bg-[#1DA851]"
        >
          <MessageCircle className="size-6" aria-hidden />
          {isAr ? "تواصل معنا عبر واتساب" : "Contact us via WhatsApp"}
        </a>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-500">
          <Clock className="size-4 shrink-0 text-accent" aria-hidden />
          {isAr ? "الأحد – الخميس · الرد خلال ساعات عمل" : "Sun – Thu · Response during business hours"}
        </p>
      </div>
    </Section>
    </>
  );
}
