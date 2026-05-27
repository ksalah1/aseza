import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";

  return buildMetadata({
    locale,
    path: "/foreign-investors",
    title: ar
      ? "تأسيس شركة في العقبة للمستثمر الأجنبي | خدمة قانونية خاصة"
      : "Company Formation in Aqaba for Foreign Investors | ASEZA Legal Service",
    description: ar
      ? "دليل للمستثمرين الأجانب حول تأسيس شركة أو فرع في منطقة العقبة الاقتصادية الخاصة، مع شرح الوثائق، التصديقات، الوكالات، الضرائب، الجمارك، والبداية عن بُعد."
      : "Legal guidance for foreign investors setting up a company or branch in Aqaba, Jordan, including documents, ownership, remote setup, tax, customs, banking, and post-registration requirements.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";

  const faq = ar
    ? [
        { question: "هل يمكن للأجنبي تسجيل شركة في العقبة؟", answer: "قد يكون ذلك متاحاً في العديد من الأنشطة، لكن النتيجة تعتمد على النشاط والقطاع والشكل القانوني والموافقات المطلوبة." },
        { question: "هل يجب أن أزور الأردن؟", answer: "ليس دائماً في البداية، لكن بعض المراحل قد تتطلب حضوراً شخصياً أو مستندات أصلية حسب الحالة." },
        { question: "هل يمكن البدء عن بُعد؟", answer: "نعم في كثير من الحالات يمكن بدء المراجعة الأولية عبر واتساب أو البريد الإلكتروني أو مكالمة فيديو." },
        { question: "هل تفتح الحسابات البنكية عن بُعد دائماً؟", answer: "ليس دائماً. سياسة كل بنك تختلف، وقد يطلب البنك حضوراً أو تحققاً إضافياً." },
      ]
    : [
        { question: "Can foreigners register a company in Aqaba?", answer: "Many activities may be open, but each case depends on the activity, sector, legal form, and required approvals." },
        { question: "Do I need to visit Jordan?", answer: "Not always at the first stage, but some later steps may require in-person attendance or original documents." },
        { question: "Can I start the process remotely?", answer: "In many cases, yes. Initial review can begin by WhatsApp, email, or video call." },
        { question: "Can I open a bank account remotely?", answer: "Sometimes, but not guaranteed. Bank onboarding is separate and based on each bank's policy." },
      ];

  return (
    <main className="bg-background text-primary">
      <section className="bg-primary text-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold text-accent">{ar ? "خدمة قانونية خاصة للمستثمرين من خارج الأردن" : "Private legal service for foreign investors"}</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl">{ar ? "تأسيس شركة في العقبة للمستثمر الأجنبي" : "Company Formation in Aqaba for Foreign Investors"}</h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-primary-100 md:text-lg">{ar ? "نساعد المستثمر الأجنبي على فهم الشكل القانوني المناسب، الوثائق المطلوبة، قيود النشاط، خطوات التسجيل، وما قد يلزم بعد التسجيل قبل البدء بإجراءات تأسيس الشركة في منطقة العقبة الاقتصادية الخاصة." : "We help foreign investors understand the right legal structure, required documents, activity restrictions, registration steps, and post-registration requirements before starting the company formation process in the Aqaba Special Economic Zone."}</p>
          <p className="mt-4 font-semibold text-accent-100">{ar ? "ابدأ بمراجعة النشاط قبل إرسال وثائق حساسة أو اختيار الشكل القانوني." : "Start with an activity review before sending sensitive documents or committing to a structure."}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services/activity-review" className="rounded-lg bg-accent px-5 py-3 font-semibold text-primary">{ar ? "ابدأ مراجعة نشاطك" : "Start Your Activity Review"}</Link>
            <Link href="/foreign-investor-guide-aqaba" className="rounded-lg border border-accent-100 px-5 py-3 font-semibold">{ar ? "اطلب قائمة وثائق المستثمر الأجنبي" : "Request Foreign Investor Checklist"}</Link>
          </div>
          <p className="mt-6 text-sm text-primary-200">{ar ? "ASEZA.co خدمة قانونية خاصة من شركة البركات للمحاماة، وليست الموقع الرسمي لسلطة منطقة العقبة الاقتصادية الخاصة." : "ASEZA.co is a private legal service by Al Barakat Law Firm. It is not the official website of the Aqaba Special Economic Zone Authority."}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">{ar ? "أين تقع العقبة ولماذا تهم المستثمر؟" : "Where is Aqaba and why does it matter?"}</h2>
          <p className="mt-4 leading-relaxed text-primary-600">{ar ? "العقبة هي المدينة الساحلية الأردنية على البحر الأحمر. تربط الأردن بالأسواق الإقليمية والدولية من خلال الميناء، المطار، والطرق البرية. لذلك قد تكون مناسبة لبعض أنشطة التجارة، الاستيراد والتصدير، اللوجستيات، السياحة، الضيافة، الصناعة الخفيفة، والتوزيع الإقليمي." : "Aqaba is Jordan's coastal city on the Red Sea. It connects Jordan to regional and international trade routes through its seaport, airport, and land routes. For some investors, Aqaba can be attractive for trade, import/export, logistics, tourism, hospitality, light industry, and regional distribution."}</p>
        </div>
        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
          <p className="font-semibold">Jordan → Aqaba → Red Sea → Regional markets</p>
          <ul className="mt-4 grid gap-2 text-sm text-primary-600 md:grid-cols-2"><li>• {ar ? "موقع على البحر الأحمر" : "Red Sea location"}</li><li>• {ar ? "الوصول إلى الميناء" : "Seaport access"}</li><li>• {ar ? "الوصول إلى المطار" : "Airport access"}</li><li>• {ar ? "طرق برية" : "Land routes"}</li><li>• {ar ? "إمكانية تجارة إقليمية" : "Regional trade potential"}</li><li>• {ar ? "قطاعات أعمال مناسبة" : "Suitable business sectors"}</li></ul>
        </div>
      </section>

      <section className="bg-primary-50"><div className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-2xl font-bold">{ar ? "لمن هذه الصفحة؟" : "Who this page is for"}</h2><div className="mt-6 grid gap-3 md:grid-cols-4">{(ar ? ["مستثمر أجنبي فرد","شركة أجنبية تريد فتح فرع","موزع إقليمي","شركة استيراد وتصدير","مشغل لوجستي أو مستودعات","مستثمر سياحة أو ضيافة","مستثمر صناعي أو تصنيع خفيف","مستشار أو محامٍ لعميل أجنبي"]:["Foreign individual investor","Foreign company setting up a branch","Regional distributor","Import/export company","Logistics or warehousing operator","Tourism or hospitality investor","Industrial or light manufacturing investor","Consultant or lawyer assisting a foreign client"]).map((i)=><div key={i} className="rounded-xl border border-primary-100 bg-white p-4 text-sm font-medium">{i}</div>)}</div></div></section>

      <section className="mx-auto max-w-7xl space-y-10 px-6 py-16 text-primary-700">
        <div><h2 className="text-2xl font-bold text-primary">{ar ? "هل يمكن للأجنبي تملك شركة في العقبة؟" : "Can foreigners own companies in Aqaba?"}</h2><p className="mt-3">{ar ? "قد تكون العديد من الأنشطة متاحة للمستثمر الأجنبي، لكن قواعد التملك والقيود والموافقات تعتمد على النشاط، الشكل القانوني، القطاع، والأنظمة النافذة. لذلك يجب مراجعة النشاط قبل اختيار الشكل القانوني." : "Many activities may be open to foreign ownership, but ownership rules, restrictions, and approvals depend on the activity, legal structure, sector, and applicable regulations. Before choosing a structure, the activity should be reviewed."}</p></div>
        <div><h2 className="text-2xl font-bold text-primary">{ar ? "اختيار الشكل القانوني المناسب" : "Choosing the right legal structure"}</h2></div>
        <div className="grid gap-4 md:grid-cols-2">{(ar?[
          ["شركة أردنية جديدة","مناسبة لمستثمر أجنبي يريد بدء وجود تجاري جديد في الأردن/العقبة.","الشركاء، المفوضون بالتوقيع، النشاط، رأس المال، العنوان، والمتطلبات الضريبية وما بعد التسجيل."],
          ["فرع شركة أجنبية","مناسبة لشركة أجنبية قائمة تريد العمل عبر فرع.","وثائق الشركة الأم، قرار مجلس الإدارة، التصديقات، الترجمة العربية، والوكالة."],
          ["تسجيل شركة قائمة داخل العقبة","مناسبة لشركات قائمة تريد التسجيل أو العمل داخل منطقة العقبة.","وثائق التسجيل الحالية، مراجعة النشاط، المفوضون، العنوان، والتعديلات عند الحاجة."],
          ["شريك محلي أو مشروع مشترك","قد يكون مطلوباً أو مفيداً في بعض الحالات حسب النشاط والقطاع.","الملكية، الحوكمة، السيطرة، الأرباح، الخروج، والمسؤولية يجب مراجعتها بعناية."]
        ]:[
          ["New Jordanian company","Foreign investors starting a new business presence in Jordan/Aqaba.","Shareholders, authorized signatories, activity, capital, address, tax and post-registration requirements."],
          ["Foreign company branch","An existing foreign company that wants to operate through a branch.","Parent company documents, board resolution, legalized documents, Arabic translation, power of attorney."],
          ["Registering an existing company with ASEZA","Companies that already exist and want to register or operate within the Aqaba Special Economic Zone.","Existing registration documents, activity review, authorized signatories, address, amendments if needed."],
          ["Local partner or joint venture","Cases where a local partner is commercially useful or legally required for a specific activity.","Shareholding, governance, control, profit sharing, exit, and liability should be reviewed carefully."]
        ]).map(([a,b,c])=><div key={a} className="rounded-xl border border-primary-100 p-5"><h3 className="font-semibold text-primary">{a}</h3><p className="mt-2 text-sm">{b}</p><p className="mt-2 text-sm text-primary-600">{c}</p></div>)}</div>
        <Link href="/services/activity-review" className="inline-block rounded-lg bg-primary px-4 py-2 font-semibold text-white">{ar ? "راجع نشاطك قبل اختيار الشكل القانوني" : "Check Your Activity Before Choosing a Structure"}</Link>
      </section>

      <section className="bg-primary-50"><div className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-2xl font-bold">{ar?"أسئلة شائعة للمستثمر الأجنبي":"Foreign investor FAQs"}</h2><div className="mt-6"><Accordion items={faq} defaultOpen={0} /></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-2xl font-bold">{ar?"ابدأ من خارج الأردن":"Start from outside Jordan"}</h2><p className="mt-3 text-primary-600">{ar?"يمكنك البدء بإرسال وصف مختصر للنشاط. لا ترسل وثائق حساسة قبل أن نؤكد لك ما هو مطلوب.":"You can start by sending a short activity description. Do not send sensitive documents until we confirm what is needed."}</p><div className="mt-5 flex flex-wrap gap-3"><a href="https://wa.me/962790000000" className="rounded-lg bg-[#25D366] px-4 py-2 font-semibold text-white">WhatsApp</a><Link href="/contact" className="rounded-lg border border-primary-200 px-4 py-2 font-semibold">{ar?"طلب مكالمة فيديو":"Request a Video Call"}</Link><a href="mailto:info@aseza.co" className="rounded-lg border border-primary-200 px-4 py-2 font-semibold">Email</a></div></section>

      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type":"ListItem", position:1,name:ar?"الرئيسية":"Home",item:`https://aseza.co/${locale}`},{"@type":"ListItem",position:2,name:ar?"المستثمر الأجنبي":"Foreign Investors",item:`https://aseza.co/${locale}/foreign-investors`}]}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map((i)=>({"@type":"Question",name:i.question,acceptedAnswer:{"@type":"Answer",text:i.answer}}))}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"Service",name:ar?"تأسيس شركة في العقبة للمستثمر الأجنبي":"Company Formation in Aqaba for Foreign Investors",provider:{"@type":"LegalService",name:"Al Barakat Law Firm"},areaServed:"Jordan",description:ar?"خدمة قانونية خاصة لمراجعة النشاط وتأسيس الشركات أو الفروع للمستثمرين الأجانب في العقبة.":"Private legal guidance for foreign investors on legal structure, documents, and registration steps in Aqaba."}} />
    </main>
  );
}
