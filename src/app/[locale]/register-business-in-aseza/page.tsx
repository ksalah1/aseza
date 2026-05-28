import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  FileText,
  MessageCircle,
  Scale,
  Shield,
} from "lucide-react";
import { Section, Card, Accordion } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/seo";
import {
  CONTENT_FRESHNESS_AR,
  CONTENT_FRESHNESS_EN,
  CONTENT_LAST_REVIEW_AR,
  CONTENT_LAST_REVIEW_EN,
} from "@/lib/content-meta";
import { siteConfig, whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return buildMetadata({ locale, path: "/register-business-in-aseza", title: ar ? "تسجيل شركة في منطقة العقبة الاقتصادية الخاصة | دليل عملي" : "Register a Company in Aqaba Special Economic Zone | Practical Guide", description: ar ? "دليل عملي لتسجيل شركة أو مؤسسة في ASEZA، يشمل الأهلية، الوثائق، الخطوات، الرسوم، المدة، ومتطلبات ما بعد التسجيل." : "Practical registration guide for setting up a company in ASEZA, including eligibility, documents, steps, fees, timeline, and post-registration licensing." });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const ar = locale === "ar";

  const eligibility = ar
    ? [
        "أفراد أردنيون راغبون في تأسيس شركة أو مؤسسة فردية.",
        "مستثمرون أجانب وفق النشاط والشكل القانوني المسموح.",
        "شركات قائمة تريد التسجيل داخل منطقة العقبة الاقتصادية الخاصة.",
        "شركات ذات مسؤولية محدودة (LLC) أو شركة شخص واحد.",
        "أعمال استيراد وتصدير ولوجستيات وسياحة وصناعات خفيفة.",
      ]
    : [
        "Jordanian individuals wanting to establish a company or sole establishment.",
        "Foreign investors, depending on permitted activity and legal form.",
        "Existing companies seeking registration within the Aqaba Special Economic Zone.",
        "LLCs and one-person companies, case by case.",
        "Import/export, logistics, tourism, and light industry businesses.",
      ];

  const serviceIncludes = ar
    ? [
        "مراجعة أولية لقابلية النشاط للتسجيل.",
        "اختيار الشكل القانوني الأنسب لحالتك.",
        "إعداد ومراجعة وثائق التأسيس والعقد.",
        "تقديم الطلب بموجب وكالة قانونية.",
        "متابعة ملاحظات الجهة المختصة والنواقص.",
        "تقدير مفصّل للرسوم الحكومية قبل البدء.",
        "استلام شهادة التسجيل بعد الموافقة.",
        "خارطة طريق لما بعد التسجيل (تراخيص وموافقات).",
        "دعم قانوني طوال فترة التأسيس.",
      ]
    : [
        "Initial review of activity registration viability.",
        "Selecting the right legal form for your situation.",
        "Preparing and reviewing formation documents and articles.",
        "Filing the application under a power of attorney.",
        "Following up on authority comments and missing items.",
        "Detailed government fee estimate before work begins.",
        "Collecting the registration certificate after approval.",
        "Post-registration roadmap (licensing and additional approvals).",
        "Legal support throughout the entire formation period.",
      ];

  type TimelineStep = { num: number; title: string; body: string; badge?: string };
  type TimelinePhase = { phase: string; steps: TimelineStep[] };

  const phases: TimelinePhase[] = ar
    ? [
        {
          phase: "المرحلة الأولى — قبل التقديم",
          steps: [
            { num: 1, title: "مراجعة النشاط وتصنيفه", body: "نتحقق إن كان النشاط مسموحاً أو مقيداً أو محظوراً، ونحدد رمز تصنيف النشاط الاقتصادي (ISIC) المطلوب في الطلب." },
            { num: 2, title: "اختيار الشكل القانوني المناسب", body: "شركة ذات مسؤولية محدودة، شخص واحد، فرع أجنبي، أو مؤسسة فردية — بحسب عدد الشركاء والنشاط." },
            { num: 3, title: "تجهيز قائمة الوثائق", body: "تختلف الوثائق بحسب نوع الكيان. نزودك بقائمة مخصصة حسب حالتك." },
          ],
        },
        {
          phase: "المرحلة الثانية — التسجيل",
          steps: [
            { num: 4, title: "تسجيل الشركة لدى مراقب عام الشركات", body: "خطوة قانونية منفصلة قبل تسجيل المؤسسة لدى ASEZA — لها رسومها ووثائقها المستقلة." },
            { num: 5, title: "تقديم طلب تسجيل المؤسسة لدى ASEZA", body: "نقدم الملف للمديرية المختصة. تبدأ من هذا اليوم مدة 7 أيام عمل للبت في الطلب وفق النظام." },
            { num: 6, title: "دفع الرسوم الحكومية", body: "نزودك بتفصيل كامل للرسوم الحكومية قبل الدفع، مفصولةً عن أتعاب الخدمة." },
            { num: 7, title: "استلام شهادة التسجيل", body: "تصدر الشهادة بعد الموافقة. إذا انقضت المدة القانونية دون رد، يُعتبر الطلب مقبولاً وفق النظام.", badge: "⚖️ حق قانوني" },
          ],
        },
        {
          phase: "المرحلة الثالثة — بعد التسجيل",
          steps: [
            { num: 8, title: "الموافقات والتراخيص القطاعية", body: "بعض الأنشطة تحتاج موافقات إضافية (سلامة عامة، صحة عامة، بيئة، تصريح مباشرة عمل) قبل البدء الفعلي." },
            { num: 9, title: "التجديد السنوي", body: "تسجيل المؤسسة يستلزم تجديداً سنوياً. نوضح المتطلبات والمواعيد مسبقاً." },
          ],
        },
      ]
    : [
        {
          phase: "Phase 1 — Before Applying",
          steps: [
            { num: 1, title: "Activity Review & Classification", body: "We verify whether the activity is permitted, restricted, or prohibited and identify the required ISIC code." },
            { num: 2, title: "Choosing the Right Legal Form", body: "LLC, one-person company, foreign branch, or sole establishment — based on partners and activity." },
            { num: 3, title: "Document Checklist Preparation", body: "Documents vary by entity type. We provide a tailored list for your situation." },
          ],
        },
        {
          phase: "Phase 2 — Registration",
          steps: [
            { num: 4, title: "Company Registration with Companies Controller", body: "A separate legal step before ASEZA institution registration — with its own fees and documents." },
            { num: 5, title: "Filing the Institution Registration with ASEZA", body: "We submit the file to the relevant directorate. The 7-business-day statutory period starts from this date." },
            { num: 6, title: "Payment of Government Fees", body: "We provide a full breakdown of government fees before payment, separated from service fees." },
            { num: 7, title: "Receiving the Registration Certificate", body: "The certificate is issued after approval. If the statutory period lapses without a response, the application is deemed approved.", badge: "⚖️ Legal Right" },
          ],
        },
        {
          phase: "Phase 3 — Post-Registration",
          steps: [
            { num: 8, title: "Sectoral Approvals & Licenses", body: "Some activities need additional approvals (public safety, public health, environment, work commencement permit) before actual operations." },
            { num: 9, title: "Annual Renewal", body: "Institution registration requires annual renewal. We clarify requirements and deadlines in advance." },
          ],
        },
      ];

  type ApprovalCard = { Icon: typeof Shield; title: string; desc: string };
  const postRegApprovals: ApprovalCard[] = [
    {
      Icon: Shield,
      title: ar ? "شهادة السلامة العامة" : "Public Safety Certificate",
      desc: ar
        ? "مطلوبة لكثير من الأنشطة التجارية والصناعية قبل البدء الفعلي بالتشغيل."
        : "Required for most commercial and industrial activities before actual operations begin.",
    },
    {
      Icon: CheckCircle as typeof Shield,
      title: ar ? "شهادة الصحة العامة" : "Public Health Certificate",
      desc: ar
        ? "تشمل أنشطة الأغذية، الضيافة، الرعاية الصحية، وما يستلزم اشتراطات صحية."
        : "Covers food, hospitality, healthcare, and activities subject to health requirements.",
    },
    {
      Icon: AlertCircle as typeof Shield,
      title: ar ? "الموافقة البيئية" : "Environmental Approval",
      desc: ar
        ? "مطلوبة لبعض الأنشطة ذات الأثر البيئي المحتمل مثل التصنيع والاستيراد."
        : "Required for activities with potential environmental impact such as manufacturing and certain imports.",
    },
    {
      Icon: FileText as typeof Shield,
      title: ar ? "تصريح مباشرة العمل" : "Work Commencement Permit",
      desc: ar
        ? "قد تطلبه الجهة المختصة قبل البدء الفعلي في ممارسة النشاط التجاري."
        : "May be required by the authority before you can formally begin commercial operations.",
    },
  ];

  type EntityCard = { Icon: typeof Building2; title: string; subtitle: string };
  const entityTypes: EntityCard[] = [
    {
      Icon: Building2,
      title: ar ? "شركة ذات مسؤولية محدودة" : "LLC",
      subtitle: ar ? "أكثر من شريك واحد — مسؤولية محدودة برأس المال" : "More than one shareholder — liability limited to capital",
    },
    {
      Icon: Building2,
      title: ar ? "شركة شخص واحد" : "One-Person Company",
      subtitle: ar ? "مالك واحد — مسؤولية محدودة — شائعة للمستثمر الفردي" : "Single owner — limited liability — common for solo investors",
    },
    {
      Icon: Scale as typeof Building2,
      title: ar ? "فرع شركة أجنبية" : "Foreign Company Branch",
      subtitle: ar ? "للشركات الأجنبية القائمة التي تريد العمل عبر فرع" : "For existing foreign companies operating through a branch in Aqaba",
    },
    {
      Icon: Scale as typeof Building2,
      title: ar ? "مكتب تمثيل" : "Representative Office",
      subtitle: ar ? "للتمثيل التجاري دون ممارسة نشاط تجاري مباشر" : "For commercial representation without direct commercial activity",
    },
  ];

  const faqItems = [
    {
      question: ar ? "ما المدة المتوقعة لإتمام التسجيل؟" : "What is the expected timeline for registration?",
      answer: ar
        ? "تعتمد المدة على نوع النشاط، اكتمال الوثائق، وسرعة الموافقات. في الحالات المعتادة قد تتراوح بين أسبوع وعدة أسابيع. نزوّدك بتقدير أكثر دقة بعد المراجعة الأولية."
        : "The timeline depends on activity type, document readiness, and approval speed. In standard cases it can range from a week to a few weeks. We provide a closer estimate after the initial review.",
    },
    {
      question: ar ? "هل يشترط الحضور الشخصي في العقبة أو عمّان؟" : "Is in-person attendance required in Aqaba or Amman?",
      answer: ar
        ? "في معظم الحالات لا يشترط ذلك، إذ يمكن إنجاز الإجراءات بموجب وكالة قانونية. بعض الحالات قد تستلزم توقيعاً أو حضوراً في مرحلة لاحقة حسب طبيعة الملف."
        : "In most cases, no — procedures can be handled through a power of attorney. Some situations may require a signature or in-person step at a later stage, depending on the file.",
    },
    {
      question: ar ? "ما الفرق بين شركة شخص واحد وشركة ذات مسؤولية محدودة؟" : "What is the difference between a one-person company and an LLC?",
      answer: ar
        ? "شركة الشخص الواحد يملكها فرد واحد بمسؤولية محدودة، بينما تضم الشركة ذات المسؤولية المحدودة شريكين أو أكثر ومسؤولية كل منهم محدودة بحصته في رأس المال. يتم الاختيار بعد مراجعة طبيعة الحالة."
        : "A one-person company has a single owner with limited liability. An LLC has two or more shareholders, each with liability limited to their capital contribution. The right choice depends on your situation.",
    },
    {
      question: ar ? "هل جميع الأنشطة مسموح بها داخل المنطقة؟" : "Are all activities permitted within the zone?",
      answer: ar
        ? "لا. الأنشطة مقسّمة إلى مسموحة ومقيدة (تحتاج موافقة إضافية) ومحظورة. لذلك تبدأ خدمتنا دائماً بمراجعة النشاط قبل التسجيل."
        : "No. Activities are classified as permitted, restricted (requiring additional approval), or prohibited. That is why our service always starts with an activity review before filing.",
    },
    {
      question: ar ? "هل تعني شهادة التسجيل حق التشغيل الفوري؟" : "Does a registration certificate mean the right to operate immediately?",
      answer: ar
        ? "ليس دائماً. بعض الأنشطة تحتاج بعد التسجيل إلى شهادة صحة عامة أو سلامة عامة أو موافقة بيئية أو تصريح مباشرة عمل. نوضح هذه المتطلبات مسبقاً قبل البدء."
        : "Not always. Some activities require a public health or safety certificate, environmental approval, or work-commencement permit after registration. We clarify these requirements upfront.",
    },
    {
      question: ar ? "ما الوثائق المطلوبة عادةً للتسجيل؟" : "What documents are typically required for registration?",
      answer: ar
        ? "تشمل عادةً: نسخ الهوية للشركاء أو المالكين، تحديد نسب الملكية، ثلاثة أسماء مقترحة للشركة، إثبات عنوان في العقبة، ووصف واضح للنشاط. المتطلبات تختلف حسب نوع الكيان والنشاط."
        : "Typically: ID copies for shareholders or owners, ownership percentages, three proposed company names, address proof in Aqaba, and a clear activity description. Requirements vary by entity type and activity.",
    },
  ];

  const waMsg = ar
    ? "أرغب في تسجيل شركة في العقبة وأحتاج مراجعة النشاط."
    : "I want to register a company in Aqaba and need an activity review.";

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <Breadcrumb items={[{ label: "الرئيسية", href: "/" }, { label: "تسجيل شركة" }]} />
      </div>
      {/* 1 — Hero */}
      <Section width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-primary md:text-5xl">
            {ar
              ? "تسجيل شركة في منطقة العقبة الاقتصادية الخاصة"
              : "Registering a Company in the Aqaba Special Economic Zone"}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-primary-600">
            {ar
              ? "دليل عملي من مكتب قانوني خاص. نراجع نشاطك ونحدد الشكل القانوني المناسب ونتابع الملف حتى صدور شهادة التسجيل — مع توضيح متطلبات الترخيص بعد التسجيل حسب طبيعة نشاطك."
              : "A practical guide from a private law firm. We review your activity, determine the right legal structure, and follow through to the registration certificate — including post-registration licensing requirements for your specific activity."}
          </p>
          <p className="mt-3 text-sm text-primary-400">
            {ar
              ? `آخر مراجعة: ${CONTENT_LAST_REVIEW_AR} — ${CONTENT_FRESHNESS_AR}`
              : `Last reviewed: ${CONTENT_LAST_REVIEW_EN} — ${CONTENT_FRESHNESS_EN}`}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              {ar ? "تواصل معنا عبر واتساب" : "Contact us via WhatsApp"}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
            >
              {ar ? "تفاصيل الخدمة الكاملة" : "Full Service Details"}
            </Link>
          </div>
        </div>
      </Section>

      {/* 2 — Who can register */}
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "من يحق له التسجيل؟" : "Who Can Register?"}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-primary">
              {ar ? "الجهات المؤهلة للتسجيل" : "Eligible for Registration"}
            </h3>
            <ul className="mt-5 space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-600">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card accent>
            <h3 className="text-xl font-semibold text-primary">
              {ar ? "ما الذي تشمله الخدمة؟" : "What the Service Includes"}
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-600">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* 3 — Timeline */}
      <Section width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "مسار التسجيل خطوة بخطوة" : "Step-by-Step Registration Path"}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {ar
              ? "نفرق دائماً بين الرسوم الرسمية الحكومية وأتعاب الخدمة القانونية، ونزوّدك بتقديرين منفصلين قبل البدء."
              : "We always separate official government fees from legal service fees, providing two distinct estimates before any work begins."}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          {phases.map((phase, pi) => (
            <div key={pi} className="mb-8">
              <span className="mb-6 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-background">
                {phase.phase}
              </span>
              <div className="mt-4 space-y-1">
                {phase.steps.map((step, si) => {
                  const isLast = pi === phases.length - 1 && si === phase.steps.length - 1;
                  return (
                    <div key={step.num} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-accent">
                          {step.num}
                        </div>
                        {!isLast && <div className="mt-1 w-px grow bg-primary-100" aria-hidden />}
                      </div>
                      <div className="pb-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-primary">{step.title}</h3>
                          {step.badge && (
                            <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                              {step.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-primary-600">{step.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3b — Documents checklist */}
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "قائمة الوثائق المطلوبة" : "Required Documents List"}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-4xl space-y-6">
          {(ar
            ? [
                {
                  label: "مستثمر أردني فرد",
                  items: [
                    "نسخة من الهوية الوطنية (المالك / الشركاء)",
                    "ثلاثة أسماء مقترحة للشركة أو المؤسسة",
                    "وصف واضح للنشاط الاقتصادي",
                    "نسب الملكية في حالة تعدد الشركاء",
                    "عقد إيجار أو إثبات عنوان داخل منطقة العقبة الاقتصادية الخاصة",
                    "عقد تأسيس (يُعدّ بمساعدتنا)",
                  ],
                },
                {
                  label: "شركة أو فرع أجنبي",
                  items: [
                    "صورة مصدقة عن عقد تأسيس الشركة الأم ونظامها الأساسي (مصدقة خلال الأشهر الستة الأخيرة)",
                    "وكالة موثقة إذا قُدِّم الطلب بواسطة وكيل",
                    "شهادة من جهات الدولة الأصلية تثبت استمرار الشركة في ممارسة نشاطها",
                    "ترجمة عربية معتمدة لجميع الوثائق الأجنبية",
                    "إثبات عنوان داخل منطقة العقبة الاقتصادية الخاصة",
                    "وصف النشاط المراد تسجيله في المنطقة",
                  ],
                },
                {
                  label: "شركة قائمة — تسجيل في ASEZA",
                  items: [
                    "شهادة التسجيل الحالية (من مراقب عام الشركات أو السجل التجاري)",
                    "عقد التأسيس الأصلي أو النظام الأساسي",
                    "مراجعة النشاط مع المديرية (للتحقق من الأهلية)",
                    "ثلاثة أسماء مقترحة إذا اختلفت عن الاسم التجاري الحالي",
                    "إثبات عنوان داخل منطقة العقبة الاقتصادية الخاصة",
                  ],
                },
              ]
            : [
                {
                  label: "Jordanian Individual Investor",
                  items: [
                    "Copy of national ID (owner / partners)",
                    "Three proposed company or establishment names",
                    "Clear description of the economic activity",
                    "Ownership percentages if multiple partners",
                    "Lease or address proof inside the Aqaba Special Economic Zone",
                    "Articles of association (prepared with our assistance)",
                  ],
                },
              ]
          ).map((tab) => (
            <Card key={tab.label}>
              <h3 className="font-semibold text-primary">{tab.label}</h3>
              <ul className="mt-4 space-y-2">
                {tab.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-primary-600">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden>☐</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
          <p className="text-xs text-primary-400">
            {ar
              ? "قائمة الوثائق تقريبية وقد تختلف حسب النشاط وقرار الجهة المختصة. يتم التأكيد بعد المراجعة الأولية."
              : "Document list is approximate and may vary by activity and authority decision. Confirmed after initial review."}
          </p>
        </div>
      </Section>

      {/* 3c — Legal rights callout */}
      {ar && (
        <Section width="wide">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-primary-100 border-s-4 border-s-primary bg-primary-50 p-6">
              <h2 className="text-xl font-bold text-primary">⚖️ اعرف حقوقك القانونية قبل التقديم</h2>
              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden>✓</span>
                  <div>
                    <p className="font-semibold text-primary">مدة البت القانونية: 7 أيام عمل</p>
                    <p className="mt-1 text-sm leading-relaxed text-primary-600">
                      بمجرد اكتمال وثائقك، يجب على المديرية إصدار قرارها خلال 7 أيام عمل وفق نظام تسجيل المؤسسات رقم 13 لسنة 2001.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden>✓</span>
                  <div>
                    <p className="font-semibold text-primary">القبول الضمني: إذا لم يصدر قرار خلال المدة القانونية</p>
                    <p className="mt-1 text-sm leading-relaxed text-primary-600">
                      في حال انقضت المدة دون صدور قرار من المدير، يُعتبر الطلب مقبولاً وفق أحكام النظام.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0" aria-hidden>⚠️</span>
                  <div>
                    <p className="font-semibold text-primary">تنبيه للأنشطة المقيدة</p>
                    <p className="mt-1 text-sm leading-relaxed text-primary-600">
                      إذا كان نشاطك يحتاج موافقة المجلس وانقضت المدة المحددة دون قرار، يُعتبر الطلب مرفوضاً. لذلك من الضروري متابعة ملف الأنشطة المقيدة بفاعلية.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-xs text-primary-400">
                استناداً إلى نظام تسجيل المؤسسات في منطقة العقبة الاقتصادية الخاصة رقم 13 لسنة 2001 وتعديلاته حتى 2023.
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* 4 — After registration */}
      <Section width="wide" background="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "بعد التسجيل: ماذا يحدث؟" : "What Happens After Registration?"}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {ar
              ? "شهادة التسجيل خطوة أساسية، لكنها لا تعني تلقائياً إذناً بالتشغيل. بعض الأنشطة تحتاج موافقات إضافية."
              : "The registration certificate is an essential step, but it does not automatically mean permission to operate. Some activities require additional approvals."}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {postRegApprovals.map(({ Icon, title, desc }) => (
            <Card key={title} hoverable>
              <Icon className="size-8 text-accent" aria-hidden />
              <h3 className="mt-3 font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-600">{desc}</p>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-5xl">
          <Card accent>
            <p className="leading-relaxed text-primary-600">
              {ar
                ? "نراجع متطلبات الترخيص لنشاطك قبل البدء في إجراءات التأسيس، حتى تعرف ما الذي ينتظرك بعد التسجيل ولا تُفاجأ بمتطلبات إضافية."
                : "We review the licensing requirements for your activity before starting the formation process, so you know exactly what awaits you after registration — no surprises."}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/licensing-after-registration"
                className="inline-flex items-center rounded-lg border border-primary px-5 py-2.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
              >
                {ar ? "الترخيص بعد التسجيل" : "Licensing After Registration"}
              </Link>
              <a
                href={whatsappLink(
                  ar
                    ? "أريد الاستفسار عن متطلبات الترخيص بعد تسجيل شركتي."
                    : "I want to ask about licensing requirements after registering my company."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#1DA851]"
              >
                <MessageCircle className="size-4" aria-hidden />
                {ar ? "اسأل عبر واتساب" : "Ask via WhatsApp"}
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* 5 — Entity types */}
      <Section width="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "أنواع الكيانات القانونية" : "Legal Entity Types"}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {ar
              ? "اختيار الشكل القانوني المناسب يعتمد على النشاط، عدد الشركاء، وطبيعة الملكية. نساعدك على الاختيار بعد مراجعة حالتك."
              : "Choosing the right legal form depends on the activity, number of shareholders, and ownership structure. We help you decide after reviewing your situation."}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entityTypes.map(({ Icon, title, subtitle }) => (
            <Card key={title} hoverable className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary-50">
                <Icon className="size-6 text-primary" aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-500">{subtitle}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 6 — FAQ */}
      <Section width="narrow" background="muted">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            {ar ? "أسئلة شائعة" : "Frequently Asked Questions"}
          </h2>
          <p className="mt-4 text-lg text-primary-500">
            {ar
              ? "إجابات سريعة على أبرز ما يسأل عنه المستثمرون."
              : "Quick answers to what investors ask most."}
          </p>
        </div>
        <div className="mt-10">
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-semibold text-accent hover:underline">
            {ar ? "اقرأ جميع الأسئلة الشائعة ←" : "Read all FAQs →"}
          </Link>
        </div>
      </Section>

      {/* 7 — CTA Banner */}
      <Section width="wide">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-12 text-center text-background">
          <h2 className="text-2xl font-bold md:text-3xl">
            {ar ? "ابدأ بإرسال وصف نشاطك" : "Start by Sending Your Activity Description"}
          </h2>
          <p className="mt-4 text-primary-100">
            {ar
              ? "لا ترسل وثائق حساسة من البداية — فقط وصف مختصر للنشاط وسنخبرك بالخطوات التالية."
              : "No sensitive documents needed upfront — just a short activity description and we will tell you the next steps."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1DA851]"
            >
              <MessageCircle className="size-5" aria-hidden />
              {ar ? "تواصل معنا عبر واتساب" : "Contact us via WhatsApp"}
            </a>
            <a
              href={siteConfig.officialAsezaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 font-semibold text-background transition-colors hover:bg-white/10"
            >
              {ar ? "الموقع الرسمي لسلطة العقبة" : "Official ASEZA Website"}
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
