import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Accordion, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "registerGuide.meta" });
  return buildMetadata({ locale, path: "/register-business-in-aseza", title: t("title"), description: t("description") });
}

const journey = ["مراجعة النشاط","اختيار الشكل القانوني","تجهيز الوثائق","تقديم طلب التسجيل","دفع الرسوم الرسمية","استلام شهادة التسجيل","بدء متطلبات الترخيص","الجاهزية للتشغيل"];

export default async function RegisterBusinessGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (<>
  <section className="bg-primary text-background"><div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24"><h1 className="text-3xl font-bold md:text-5xl">تسجيل شركة أو مؤسسة في منطقة العقبة الاقتصادية الخاصة</h1><p className="mt-5 text-lg text-primary-100">خدمة قانونية تساعدك على فهم المسار الصحيح من مراجعة النشاط وتجهيز الوثائق إلى تسجيل المؤسسة ومعرفة متطلبات الترخيص ومزاولة النشاط.</p><p className="mt-4 text-sm text-primary-100">التسجيل خطوة أساسية، لكن بعض الأنشطة قد تحتاج موافقات أو شهادات إضافية قبل بدء العمل.</p><div className="mt-8 flex flex-col items-center gap-3 sm:flex-row"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-3.5 text-lg font-semibold text-white"><MessageCircle className="size-5"/>افحص نشاطك قبل التسجيل</a><a href="#journey" className="inline-flex rounded-lg border border-primary-100/50 px-8 py-3.5">شاهد خطوات التسجيل والترخيص</a></div><p className="mt-5 text-xs text-primary-300">ASEZA.co خدمة قانونية خاصة من شركة البركات للمحاماة، وليست الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة.</p></div></section>
  <Section width="wide"><h2 className="text-center text-3xl font-bold text-primary">التسجيل لا يعني دائماً الترخيص الكامل</h2></Section>
  <Section id="journey" width="wide" background="muted"><h2 className="text-center text-3xl font-bold text-primary">خطوات تسجيل شركتك في ASEZA</h2><ol className="mt-10 grid gap-4 md:grid-cols-2">{journey.map((s,i)=><li key={s} className="rounded-xl border border-primary-100 bg-white p-5"><p className="font-bold text-accent">{i+1}</p><h3 className="font-semibold text-primary">{s}</h3></li>)}</ol></Section>
  <Section width="narrow"><Accordion items={[{question:"من يحق له التسجيل في ASEZA؟",answer:"الأهلية تعتمد على الشكل القانوني والنشاط والوثائق والموافقات الخاصة."},{question:"ما الفرق بين شهادة التسجيل وترخيص مزاولة النشاط؟",answer:"شهادة التسجيل تثبت تسجيل المؤسسة في المنطقة، أما مزاولة النشاط فقد تتطلب تراخيص وشهادات إضافية حسب النشاط."}]} /></Section>
  <Section width="default"><div className="rounded-2xl border border-accent/30 bg-primary p-8 text-center text-background"><p>نراجع النشاط أولاً، ثم نحدد الشكل القانوني والوثائق المطلوبة، ثم نساعد في تقديم طلب التسجيل لدى سلطة منطقة العقبة الاقتصادية الخاصة، وبعد صدور شهادة التسجيل نوضح متطلبات الترخيص ومزاولة النشاط حسب طبيعة العمل.</p><div className="mt-5 flex flex-col items-center gap-3 sm:flex-row"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white">افحص نشاطك قبل التسجيل</a><Link href="/services" className="rounded-lg border border-primary-100/50 px-6 py-3 font-semibold text-primary-100">اسأل عن الوثائق المطلوبة</Link></div></div></Section>
  </>);
}
