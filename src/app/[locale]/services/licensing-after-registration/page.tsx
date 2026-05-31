import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";

  return buildMetadata({
    locale,
    path: "/services/licensing-after-registration",
    title: ar
      ? "الترخيص ومزاولة النشاط بعد التسجيل في ASEZA"
      : "Post-Registration Licensing and Operating in ASEZA",
    description: ar
      ? "شرح متطلبات ما بعد تسجيل الشركة في منطقة العقبة الاقتصادية الخاصة، مثل الصحة العامة والسلامة العامة والموافقة البيئية وتصريح مباشرة العمل."
      : "Guidance on post-registration operating requirements in ASEZA, including health, safety, environmental approvals, site inspections, and work commencement permits.",
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
        <Breadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "خدماتنا", href: "/services" },
            { label: "الترخيص بعد التسجيل" },
          ]}
        />
      </div>
      <ServicePageTemplate
        content={{
          title: "متطلبات الترخيص ومزاولة النشاط بعد التسجيل",
          description:
            "تسجيل الشركة لا يعني تلقائياً جاهزية التشغيل. نشرح الشهادات والموافقات المطلوبة حسب النشاط مثل الصحة والسلامة والبيئة وتصريح مباشرة العمل.",
          forWho: ["الشركات المسجلة حديثاً", "الشركات قبل بدء التشغيل"],
          result: ["خريطة متطلبات التشغيل", "تحديد الموافقات حسب النشاط"],
          beforeApply: ["نسخة التسجيل", "تفاصيل الموقع", "وصف التشغيل"],
          documents: [
            "شهادة التسجيل",
            "عقد الموقع عند الحاجة",
            "مخططات أو بيانات فنية بحسب النشاط",
          ],
          fees: {
            legal: "بحسب نطاق المتابعة.",
            gov: "رسوم حكومية منفصلة لكل شهادة/موافقة.",
            cert: "حسب الحاجة.",
            extra: "موافقات قطاعية أو كشف موقعي حسب النشاط.",
          },
          steps: [
            "تحديد الموافقات المطلوبة.",
            "تجهيز الملف لكل جهة.",
            "متابعة الكشف/الملاحظات.",
            "استلام الموافقات حيث تنطبق.",
          ],
          expectedTime:
            "قد تكون المدة قصيرة أو ممتدة حسب عدد الموافقات والجهات المعنية.",
          delivery: [
            "البوابة الرسمية حيث ينطبق",
            "مراجعة الجهة المختصة عند الحاجة",
            "متابعة من المكتب القانوني",
          ],
          online:
            "قد تتوفر بعض الخطوات عبر البوابة الرسمية، بينما قد تتطلب حالات أخرى حضوراً أو وثائق أصلية.",
          mistakes: [
            "بدء التشغيل قبل اكتمال المتطلبات",
            "إغفال موافقة بيئية أو صحية",
            "عدم جاهزية الموقع للكشف",
          ],
          after: [
            "جاهزية أكبر لمزاولة النشاط وفق الشروط القانونية.",
            "متابعة التجديدات الدورية للشهادات.",
          ],
          startInfo: {
            title: "قبل أن تبدأ، جهّز معلومات التشغيل",
            intro:
              "لأن هذه الخدمة تأتي بعد التسجيل، نركز أولاً على النشاط الفعلي والموقع ومتطلبات التشغيل بدلاً من تكرار بيانات التأسيس.",
            items: [
              "رقم شهادة التسجيل أو نسخة الشهادة إن وجدت",
              "وصف مختصر لما ستقوم به الشركة فعلياً عند التشغيل",
              "عنوان الموقع أو المستودع أو المكتب داخل العقبة عند توفره",
              "حالة عقد الإيجار أو إثبات إشغال الموقع عند الحاجة",
              "عدد الموظفين المتوقع وطبيعة ساعات العمل أو التشغيل",
              "أي مواد أو بضائع أو معدات قد تؤثر على الصحة أو السلامة أو البيئة",
              "الموافقات أو الشهادات التي حصلت عليها الشركة مسبقاً",
              "الموعد المستهدف لبدء مزاولة النشاط",
            ],
            ctaLabel: "أرسل معلومات التشغيل للمراجعة",
            whatsappMessage:
              "أرغب في مراجعة متطلبات الترخيص ومزاولة النشاط بعد تسجيل شركتي في العقبة.",
          },
        }}
      />
    </>
  );
}
