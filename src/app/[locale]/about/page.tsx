import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle, Phone } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink, phoneLink, phoneDisplay } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return buildMetadata({
    locale,
    path: "/about",
    title: isAr
      ? "من نحن — شركة البركات للمحاماة | ASEZA.co"
      : "About — Al-Barakat Law Firm | ASEZA.co",
    description: isAr
      ? "تعرّف على شركة البركات للمحاماة وفريقها القانوني المتخصص في تأسيس وتسجيل الشركات في منطقة العقبة الاقتصادية الخاصة."
      : "Learn about Al-Barakat Law Firm and our legal team specialising in company formation and registration in the Aqaba Special Economic Zone.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isAr = locale === "ar";

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[
          { label: isAr ? "الرئيسية" : "Home", href: "/" },
          { label: isAr ? "من نحن" : "About" },
        ]} />
      </div>

      <Section width="narrow">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">
          {isAr ? "من نحن — شركة البركات للمحاماة" : "About — Al-Barakat Law Firm"}
        </h1>
      </Section>

      {/* Attorney profile */}
      <Section width="narrow" background="muted">
        <Card className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-start">
          <div
            className="flex size-28 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-accent"
            aria-hidden
          >
            ن.ب
          </div>
          <div className="mt-4 sm:me-6 sm:mt-0">
            <h2 className="text-xl font-bold text-primary">{isAr ? "نور بركات" : "Nour Barakat"}</h2>
            <p className="mt-1 font-medium text-primary-700">
              {isAr ? "محامية مرخّصة — شركة البركات للمحاماة" : "Licensed Attorney — Al-Barakat Law Firm"}
            </p>
            <p className="mt-1 text-sm text-primary-500">
              {isAr ? "عضو نقابة المحامين الأردنيين" : "Member, Jordan Bar Association"}
            </p>
            <p className="mt-0.5 text-sm text-primary-500">
              {isAr ? "رقم العضوية 16872" : "Membership No. 16872"}
            </p>
          </div>
        </Card>
      </Section>

      {/* What we do */}
      <Section width="narrow">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">
          {isAr ? "ماذا نقدم؟" : "What we do"}
        </h2>
        <div className="mt-5 space-y-4 leading-relaxed text-primary-600">
          <p>
            {isAr
              ? "شركة البركات للمحاماة خدمة قانونية خاصة متخصصة في مساعدة المستثمرين والشركات على تأسيس وتسجيل مؤسساتهم في منطقة العقبة الاقتصادية الخاصة. نبدأ بفهم النشاط ووضع الشركة، ثم نحدد الخدمة المناسبة ونتابع الملف مع الجهة المختصة بعد الاتفاق على نطاق العمل."
              : "Al-Barakat Law Firm is a private legal service specialising in helping investors and companies form and register their businesses in the Aqaba Special Economic Zone. We provide legal activity review before filing, follow the file with the relevant authority until the registration certificate is issued, and clarify licensing and post-registration requirements."}
          </p>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            {isAr
              ? "هذا الموقع خدمة قانونية خاصة وليس الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة."
              : "This website is a private legal service and is not the official website of the Aqaba Special Economic Zone Authority."}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section width="narrow" background="muted">
        <Card className="text-center">
          <h2 className="text-xl font-bold text-primary">
            {isAr ? "تواصل معنا" : "Get in touch"}
          </h2>
          <p className="mt-3 text-primary-600">
            {isAr
              ? "لمراجعة نشاطك أو البدء في إجراءات التسجيل، تواصل معنا مباشرةً عبر واتساب أو الهاتف."
              : "To identify the right service path or start the registration process, reach us directly via WhatsApp or phone."}
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
            >
              <MessageCircle className="size-5" aria-hidden />
              {isAr ? "تواصل عبر واتساب" : "Contact on WhatsApp"}
            </a>
            <a
              href={phoneLink()}
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
            >
              <Phone className="size-5" aria-hidden />
              <span dir="ltr">{phoneDisplay()}</span>
            </a>
          </div>
        </Card>
      </Section>
    </>
  );
}
