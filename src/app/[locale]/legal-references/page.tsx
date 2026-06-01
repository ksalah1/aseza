import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site";

const whatsappMessage = "مرحباً، أريد مساعدة في فهم متطلبات تسجيل شركة في ASEZA. النشاط: ...";

const references = [
  {
    title: "قانون منطقة العقبة الاقتصادية الخاصة رقم 32 لسنة 2000 وتعديلاته",
    importance: "يحدد الإطار العام للمنطقة، التسجيل، الرسوم، الجمارك، والضرائب المرتبطة بالمؤسسات المسجلة.",
    pages: [
      ["تسجيل شركة", "/register-business-in-aseza"],
      ["الضرائب والجمارك", "/tax-customs-aqaba"],
    ],
    official: siteConfig.officialAsezaUrl,
  },
  {
    title: "نظام تسجيل المؤسسات في منطقة العقبة الاقتصادية الخاصة رقم 13 لسنة 2001 وتعديلاته",
    importance: "يوضح قواعد تسجيل المؤسسات، بيانات الطلب، التجديد، وتصنيف بعض الأنشطة قبل التقديم.",
    pages: [
      ["تسجيل شركة", "/register-business-in-aseza"],
      ["مراجعة النشاط", "/services/activity-review"],
    ],
    official: siteConfig.officialAsezaUrl,
  },
  {
    title: "نظام ضريبة الدخل في منطقة العقبة الاقتصادية الخاصة رقم 53 لسنة 2005 وتعديلاته",
    importance: "يساعد المستثمر على فهم ارتباط الدخل بالنشاط داخل المنطقة ومتطلبات توضيح الوضع الضريبي.",
    pages: [["الضرائب والجمارك", "/tax-customs-aqaba"]],
    official: siteConfig.officialAsezaUrl,
  },
  {
    title: "نظام ضريبة مبيعات السلع والخدمات في منطقة العقبة رقم 54 لسنة 2005 وتعديلاته",
    importance: "يرتبط بضريبة المبيعات والضريبة الخاصة عند بيع أو استهلاك بعض السلع والخدمات داخل المنطقة.",
    pages: [["الضرائب والجمارك", "/tax-customs-aqaba"]],
    official: siteConfig.officialAsezaUrl,
  },
  {
    title: "نظام تنظيم البيئة الاستثمارية وتطويرها وتعديلاته",
    importance: "يدعم فهم الأنشطة الاقتصادية، وما يحتاج منها مراجعة أو موافقة قبل التسجيل أو التشغيل.",
    pages: [["مراجعة النشاط", "/services/activity-review"]],
    official: siteConfig.officialAsezaUrl,
  },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/legal-references",
    title: "مراجع ASEZA القانونية | قوانين وأنظمة التسجيل في العقبة",
    description:
      "قائمة مختصرة بأهم القوانين والأنظمة المرتبطة بتسجيل الشركات، الرسوم، الضرائب، الجمارك، والأنشطة في منطقة العقبة الاقتصادية الخاصة.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "المراجع المعتمدة" }]} />
      </div>

      <Section width="wide">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-accent">مصادر مختصرة للمستثمر</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
            المراجع المعتمدة لمعلومات ASEZA.co
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-primary-600">
            هذه الصفحة تجمع أهم التشريعات والأنظمة التي نعتمد عليها عند شرح التسجيل، الرسوم، الضرائب، الجمارك، والأنشطة في منطقة العقبة الاقتصادية الخاصة.
          </p>
        </div>
      </Section>

      <Section width="wide" background="muted">
        <h2 className="text-2xl font-bold text-primary md:text-3xl">جدول المراجع</h2>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-primary-100 bg-white shadow-sm">
          <table className="min-w-[920px] w-full text-sm">
            <thead className="bg-primary text-background">
              <tr>
                <th className="px-5 py-4 text-start font-semibold">المرجع</th>
                <th className="px-5 py-4 text-start font-semibold">لماذا يهم المستثمر؟</th>
                <th className="px-5 py-4 text-start font-semibold">الصفحات المرتبطة داخل الموقع</th>
                <th className="px-5 py-4 text-start font-semibold">رابط رسمي إذا توفر</th>
              </tr>
            </thead>
            <tbody>
              {references.map((ref, index) => (
                <tr key={ref.title} className={index % 2 === 0 ? "bg-white" : "bg-primary-50/70"}>
                  <td className="px-5 py-4 font-semibold leading-relaxed text-primary">{ref.title}</td>
                  <td className="px-5 py-4 leading-relaxed text-primary-600">{ref.importance}</td>
                  <td className="px-5 py-4">
                    <div className="flex flex-wrap gap-2">
                      {ref.pages.map(([label, href]) => (
                        <Link key={href} href={href} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary hover:text-accent">
                          {label}
                        </Link>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <a href={ref.official} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                      الموقع الرسمي
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section width="wide">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary">ماذا يعني هذا عملياً؟</h2>
            <ul className="mt-6 space-y-3 text-primary-600">
              {[
                "التسجيل له قواعد وإجراءات.",
                "بعض الأنشطة تحتاج مراجعة قبل التقديم.",
                "الرسوم والضرائب تعتمد على النشاط.",
                "الجمارك تختلف حسب حركة البضائع.",
                "بعد التسجيل توجد متطلبات تشغيل مرتبطة بالنشاط.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-xl border border-primary-100 bg-white p-4 shadow-sm">
                  <span className="mt-1 size-2 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-primary-50 p-5 text-sm leading-relaxed text-primary-600">
              نستخدم هذه المراجع لتبسيط الطريق أمام المستثمر. عند تجهيز ملف فعلي، نراجع المتطلبات الأحدث المرتبطة بالنشاط.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary">أين تبدأ؟</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["تسجيل شركة في ASEZA", "/register-business-in-aseza"],
                ["مراجعة النشاط", "/services/activity-review"],
                ["الرسوم", "/aseza-registration-fees"],
                ["الضرائب والجمارك", "/tax-customs-aqaba"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition-colors hover:border-accent hover:text-accent">
                  {label} ←
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section width="wide" background="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">لا تريد قراءة النصوص؟</h2>
          <p className="mt-3 text-primary-100">لا تريد قراءة النصوص؟ أرسل النشاط ونوع الشركة وسنحدد لك الخدمة المناسبة.</p>
          <a
            href={whatsappLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
          >
            <MessageCircle className="size-5" aria-hidden />
            أرسل النشاط ونوع الشركة
          </a>
        </div>
      </Section>

      <Section width="wide">
        <h2 className="text-2xl font-bold text-primary">روابط مرتبطة</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["تسجيل شركة في ASEZA", "/register-business-in-aseza"],
            ["مراجعة النشاط", "/services/activity-review"],
            ["الضرائب والجمارك", "/tax-customs-aqaba"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-2xl border border-primary-100 bg-white p-5 font-semibold text-primary shadow-sm transition-colors hover:border-accent hover:text-accent">
              {label} ←
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
