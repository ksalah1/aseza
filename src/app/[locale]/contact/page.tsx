import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { Check, Clock, Info, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
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
  const t = useTranslations("contact");
  const td = useTranslations("disclaimer");
  const isAr = useLocale() === "ar";
  const trust = t.raw("trust") as string[];

  return (
    <Section width="wide">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-primary-500">{t("subtitle")}</p>
      </header>

      <p className="mx-auto mt-8 flex max-w-2xl items-start gap-2.5 rounded-xl border border-primary-100 bg-primary-50 p-4 text-sm leading-relaxed text-primary-600">
        <Info className="mt-0.5 size-4 shrink-0 text-accent-600" aria-hidden />
        <span>{td("long")}</span>
      </p>

      <div className="mx-auto mt-12 max-w-5xl">
        {/* Side: WhatsApp + trust signals */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              {t("whatsappButton")}
            </a>

            <p className="mt-4 flex items-center gap-2 text-sm text-primary-500">
              <Clock className="size-4 shrink-0 text-accent" aria-hidden />
              {t("responseTime")}
            </p>
          </div>



          <div className="rounded-xl border border-primary-100 bg-white p-4 text-sm text-primary-600">
            <h3 className="font-semibold text-primary">{isAr ? "سرية الوثائق" : "Document confidentiality"}</h3>
            <p className="mt-2">{isAr ? "نتعامل مع وثائق الهوية والشركات بسرية، ولا نطلب أصول المستندات أو نسخاً مصدقة إلا عند الحاجة الفعلية للإجراء. سيتم توضيح الوثائق المطلوبة قبل البدء." : "We handle identity and company documents confidentially and only request originals/certified copies when necessary."}</p>
            <p className="mt-2">{isAr ? "يمكنك إرسال وصف مختصر للنشاط أولاً دون مشاركة وثائق حساسة. نخبرك بعدها ما إذا كانت الوثائق مطلوبة." : "You can first share a brief activity description without sensitive documents; we will then confirm what is needed."}</p>
          </div>

          <ul className="space-y-3">
            {trust.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-primary-600"
              >
                <Check
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
