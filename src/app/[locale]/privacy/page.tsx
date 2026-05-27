import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Section, Card } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({ locale, path: "/privacy", title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy", description: t("description") });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}

function PrivacyContent() {
  const locale = useLocale();
  const isAr = locale === "ar";
  return <Section width="narrow"><Card><h1 className="text-3xl font-bold text-primary">{isAr?"سياسة الخصوصية":"Privacy Policy"}</h1><ul className="mt-5 space-y-3 text-primary-600"><li>{isAr?"نجمع بيانات التواصل الأساسية ومعلومات النشاط فقط لتقييم الطلب والرد.":"We collect basic contact details and activity information to assess your request and respond."}</li><li>{isAr?"قد يتم التواصل عبر واتساب أو البريد أو الهاتف حسب وسيلة الاتصال التي تختارها.":"We may communicate by WhatsApp, email, or phone based on your preference."}</li><li>{isAr?"نتعامل مع وثائق الشركات والهوية بسرية ولا نبيع بياناتك لأي طرف.":"Company and identity documents are handled confidentially and never sold."}</li><li>{isAr?"لا نطلب الوثائق الحساسة إلا عند الحاجة الفعلية للإجراء.":"We do not request sensitive documents until they are genuinely needed."}</li><li>{isAr?"يمكنك طلب تحديث أو حذف بياناتك عبر واتساب.":"You can request data update or deletion via WhatsApp."}</li></ul></Card></Section>;
}
