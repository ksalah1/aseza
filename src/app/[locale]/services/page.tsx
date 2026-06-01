import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { whatsappLink } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const services = [
  {
    title: "تسجيل شركة لأول مرة",
    for: "مستثمر يريد تأسيس شركة جديدة في العقبة",
    cta: "ابدأ التسجيل",
    href: "/services/register-new-business",
  },
  {
    title: "شركة أجنبية أو فرع أجنبي",
    for: "شركة خارج الأردن تريد دخول السوق من خلال العقبة",
    cta: "اختر المسار المناسب",
    href: "/services/register-foreign-branch",
  },
  {
    title: "مراجعة النشاط قبل التسجيل",
    for: "من يريد تحديد مسار النشاط قبل بدء ملف التسجيل",
    cta: "اعرف مسار النشاط",
    href: "/services/activity-review",
  },
  {
    title: "الترخيص بعد التسجيل",
    for: "شركة حصلت على التسجيل وتريد بدء التشغيل",
    cta: "جهّز متطلبات التشغيل",
    href: "/services/licensing-after-registration",
  },
  {
    title: "تعديل شركة قائمة",
    for: "شركة تريد تعديل نشاط، عنوان، مفوضين، أو بيانات",
    cta: "عدّل بيانات الشركة",
    href: "/services/amend-existing-company",
  },
  {
    title: "تجديد التسجيل",
    for: "شركة مسجلة تريد التجديد السنوي",
    cta: "ابدأ التجديد",
    href: "/services/renew-registration",
  },
] as const;

const selector = [
  ["أريد تسجيل شركة جديدة", "/services/register-new-business"],
  ["شركتي أجنبية", "/services/register-foreign-branch"],
  ["لست متأكداً من النشاط", "/services/activity-review"],
  ["سجلت الشركة وأريد التشغيل", "/services/licensing-after-registration"],
  ["لدي شركة وأريد تعديل بياناتها", "/services/amend-existing-company"],
  ["أريد التجديد السنوي", "/services/renew-registration"],
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/services",
    title: "خدمات تسجيل الشركات في ASEZA | تأسيس وترخيص وتجديد الشركات في العقبة",
    description:
      "خدمات استشارية لتسجيل الشركات في ASEZA، تسجيل الفروع الأجنبية، تحديد مسار النشاط، الترخيص بعد التسجيل، التعديل، والتجديد السنوي.",
    includeFirmInTitle: false,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "خدماتنا" }]} />
      </div>

      <Section width="wide">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-accent">ASEZA company registration support</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-primary md:text-5xl">
              خدمات تسجيل وترخيص الشركات في ASEZA
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-primary-600">
              اختر ما تحتاجه الآن: تسجيل شركة جديدة، تنظيم وجود شركة أجنبية، تحديد مسار نشاط، ترخيص بعد التسجيل، تعديل بيانات، أو تجديد سنوي. نبدأ بالمعلومات الأساسية ثم نحدد المسار ونقدم عرض الخدمة المناسب قبل طلب الوثائق.
            </p>
            <a
              href={whatsappLink(`مرحباً، أريد تحديد خدمة ASEZA المناسبة لحالتي.
نوع الشركة أو الحالة:
النشاط المطلوب:
ما الخطوة التي تحتاجها؟`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-4" aria-hidden />
              اختر الخدمة المناسبة وابدأ عبر واتساب
            </a>
          </div>
          <Card accent>
            <h2 className="text-xl font-semibold text-primary">ما وضعك الآن؟</h2>
            <div className="mt-4 grid gap-3">
              {selector.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm font-semibold text-primary transition hover:border-accent hover:text-accent"
                >
                  {label} ←
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.href} hoverable>
              <h2 className="text-xl font-semibold text-primary">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-primary-600">
                <span className="font-semibold text-primary">لمن: </span>
                {service.for}
              </p>
              <Link href={service.href} className="mt-5 inline-block font-semibold text-accent hover:underline">
                {service.cta}
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
