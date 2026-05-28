import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Card, Section } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "ar") return { title: "خدمات تسجيل وترخيص الشركات في ASEZA", description: "دليل خدمات عملي لتسجيل الشركات والمؤسسات في منطقة العقبة الاقتصادية الخاصة، مع الوثائق والخطوات والرسوم والمدة والمتطلبات المحتملة." };
  return { title: "ASEZA Registration & Licensing Services", description: "Practical service directory for registration, licensing, amendments, renewals, and required documents." };
}

const services = [
  ["تسجيل شركة لأول مرة", "للمستثمر الذي يريد تأسيس شركة أو مؤسسة جديدة داخل منطقة العقبة الاقتصادية الخاصة.", "أنا: مستثمر أريد تأسيس شركة لأول مرة", "ابدأ بمراجعة النشاط والشكل القانوني.", "/services/register-new-business"],
  ["تسجيل فرع شركة أجنبية", "للشركات الأجنبية التي ترغب بفتح فرع في العقبة وفق الشروط القانونية.", "أنا: شركة أجنبية تريد فتح فرع في العقبة", "جهّز وثائق الشركة الأم والترجمة والتصديق.", "/services/register-foreign-branch"],
  ["مراجعة النشاط", "مراجعة قانونية أولية لمعرفة إن كان النشاط مسموحاً أو مقيداً أو محظوراً.", "أنا: لست متأكداً إن كان نشاطي مسموحاً", "أرسل وصف النشاط قبل تجهيز الملف.", "/services/activity-review"],
  ["الترخيص بعد التسجيل", "شرح متطلبات مزاولة النشاط بعد صدور التسجيل حسب النشاط.", "أنا: شركة مسجلة تريد معرفة ما يلزم للتشغيل", "تحديد الشهادات والموافقات المطلوبة للتشغيل.", "/services/licensing-after-registration"],
  ["تعديل شركة قائمة", "تعديل نشاط، عنوان، مفوضين أو بيانات الشركة المسجلة.", "أنا: شركة مسجلة تريد تعديل بياناتها", "حدد التعديل المطلوب والوثائق الداعمة.", "/services/amend-existing-company"],
  ["تجديد التسجيل", "متابعة التجديدات السنوية والرسوم والوثائق المطلوبة.", "أنا: شركة مسجلة تريد تجديد ترخيصها", "افحص تاريخ انتهاء الشهادة قبل الموعد.", "/services/renew-registration"],
] as const;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; setRequestLocale(locale);
  return <><div className="mx-auto max-w-7xl px-6 pt-4"><Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "خدماتنا" }]} /></div><Section width="wide"><h1 className="text-3xl font-bold text-primary">{locale==="ar"?"خدمات التسجيل والترخيص في منطقة العقبة الاقتصادية الخاصة":"ASEZA Registration & Licensing Services"}</h1><p className="mt-4 text-primary-600">{locale==="ar"?"أين أنت الآن في رحلتك؟ اختر حالتك وسنخبرك بالخطوة الأولى.":"Choose the service closest to your case. We help you understand eligibility, expected documents, steps, fees, and the difference between registration, licensing, permits, and post-registration approvals."}</p><p className="mt-2 text-sm text-primary-500">هذه خدمة قانونية خاصة — نتولى التحضير والمتابعة، والقرار النهائي لسلطة العقبة.</p>
  <div className="mt-10 grid gap-5 md:grid-cols-2">{services.map((s)=><Card key={s[0]}><h2 className="text-xl font-semibold text-primary">{s[0]}</h2><p className="mt-2 text-primary-600 text-sm">{s[1]}</p><p className="mt-2 text-sm text-primary-500"><b>لمن:</b> {s[2]}</p><p className="mt-2 text-sm text-primary-500"><b>الخطوة التالية:</b> {s[3]}</p><Link href={s[4]} className="mt-3 inline-block text-accent font-semibold">عرض تفاصيل الخدمة</Link></Card>)}</div>
  <div className="mt-12 overflow-x-auto"><h2 className="text-2xl font-semibold text-primary mb-4">اختر الخدمة المناسبة لحالتك</h2><table className="w-full bg-white border border-primary-100"><thead><tr className="text-start"><th className="p-3">الحالة</th><th className="p-3">الخدمة المناسبة</th><th className="p-3">ما يجب فعله أولاً</th><th className="p-3">رابط الخدمة</th></tr></thead><tbody>{services.map((s)=><tr key={s[0]} className="border-t"><td className="p-3">{s[1]}</td><td className="p-3">{s[0]}</td><td className="p-3">{s[3]}</td><td className="p-3"><Link href={s[4]} className="text-accent">فتح</Link></td></tr>)}</tbody></table></div>
  <Card className="mt-10"><h2 className="text-2xl font-semibold text-primary">الخدمات الإلكترونية والبوابة الرسمية</h2><p className="mt-3 text-primary-600">بعض خدمات سلطة منطقة العقبة الاقتصادية الخاصة قد تكون متاحة عبر البوابة الرسمية أو من خلال حساب المستخدم أو سند، بينما قد تتطلب بعض المعاملات وثائق أصلية أو توقيعاً أو وكالة أو مراجعة حسب الحالة.</p><p className="mt-2 text-sm text-primary-500">البوابة الرسمية لسلطة منطقة العقبة الاقتصادية الخاصة</p><div className="mt-4 flex gap-3"><a href={siteConfig.officialAsezaUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-4 py-2 text-background">زيارة البوابة الرسمية</a><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white"><MessageCircle className="size-4" aria-hidden />تواصل معنا عبر واتساب</a></div></Card>
  </Section></>;
}
