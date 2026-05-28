import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle, Phone } from "lucide-react";
import { Section, Card } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink, phoneLink, phoneDisplay } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/about",
    title: "من نحن — شركة البركات للمحاماة | ASEZA.co",
    description: "تعرّف على شركة البركات للمحاماة وفريقها القانوني المتخصص في تأسيس وتسجيل الشركات في منطقة العقبة الاقتصادية الخاصة.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[
          { label: "الرئيسية", href: "/" },
          { label: "من نحن" },
        ]} />
      </div>

      <Section width="narrow">
        <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">
          من نحن — شركة البركات للمحاماة
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
            <h2 className="text-xl font-bold text-primary">نور بركات</h2>
            <p className="mt-1 font-medium text-primary-700">محامية مرخّصة — شركة البركات للمحاماة</p>
            <p className="mt-1 text-sm text-primary-500">عضو نقابة المحامين الأردنيين</p>
            <p className="mt-0.5 text-sm text-primary-500">رقم العضوية 16872</p>
          </div>
        </Card>
      </Section>

      {/* What we do */}
      <Section width="narrow">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">ماذا نقدم؟</h2>
        <div className="mt-5 space-y-4 leading-relaxed text-primary-600">
          <p>
            شركة البركات للمحاماة خدمة قانونية خاصة متخصصة في مساعدة المستثمرين
            والشركات على تأسيس وتسجيل مؤسساتهم في منطقة العقبة الاقتصادية الخاصة.
            نقدم مراجعة قانونية للنشاط قبل التقديم، ونتابع الملف مع الجهة المختصة
            حتى صدور شهادة التسجيل، ونوضح متطلبات الترخيص ومزاولة النشاط بعد التسجيل.
          </p>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            هذا الموقع خدمة قانونية خاصة وليس الموقع الرسمي لسلطة منطقة العقبة
            الاقتصادية الخاصة.
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section width="narrow" background="muted">
        <Card className="text-center">
          <h2 className="text-xl font-bold text-primary">تواصل معنا</h2>
          <p className="mt-3 text-primary-600">
            لمراجعة نشاطك أو البدء في إجراءات التسجيل، تواصل معنا مباشرةً عبر واتساب أو الهاتف.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-primary transition-colors hover:bg-accent-500"
            >
              <MessageCircle className="size-5" aria-hidden />
              تواصل عبر واتساب
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
