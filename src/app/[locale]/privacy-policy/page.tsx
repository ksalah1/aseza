import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/privacy-policy",
    title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    description:
      locale === "ar"
        ? "سياسة الخصوصية لموقع ASEZA.co — خدمة استشارية لتسجيل الشركات في العقبة"
        : "Privacy policy for aseza.co — a private legal service by Al-Barakat Law Firm",
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isAr = locale === "ar";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-primary">
        {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
      </h1>
      <p className="mt-2 text-sm text-primary-400">
        {isAr
          ? `آخر تحديث: ${new Date().toLocaleDateString("ar-JO")}`
          : `Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      </p>

      {isAr ? (
        <section className="mt-8 space-y-6 leading-relaxed text-primary-600">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              ما المعلومات التي نجمعها؟
            </h2>
            <p>
              عند تواصلك معنا عبر واتساب أو أي وسيلة اتصال أخرى، قد نجمع:
            </p>
            <ul className="mr-4 mt-2 list-inside list-disc space-y-1">
              <li>اسمك والمعلومات التي تشاركها طوعاً</li>
              <li>وصف النشاط أو الاستفسار القانوني</li>
              <li>المعلومات أو الوثائق التي تطلبها الخدمة بعد الاتفاق على نطاق المتابعة</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              كيف نستخدم هذه المعلومات؟
            </h2>
            <p>
              تُستخدم المعلومات حصراً لتقديم الخدمة القانونية المطلوبة. لا
              نشارك معلوماتك مع أطراف ثالثة دون موافقتك الصريحة.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              الامتثال للقانون الأردني
            </h2>
            <p>
              نلتزم بأحكام قانون حماية البيانات الشخصية الأردني رقم 24 لسنة
              2023 وتعديلاته.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">حقوقك</h2>
            <p>
              يحق لك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها. للتواصل
              راسلنا عبر واتساب.
            </p>
          </div>
        </section>
      ) : (
        <section className="mt-8 space-y-6 leading-relaxed text-primary-600">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              What information do we collect?
            </h2>
            <p>
              When you contact us via WhatsApp or any other channel, we may
              collect:
            </p>
            <ul className="ml-4 mt-2 list-inside list-disc space-y-1">
              <li>Your name and information you share voluntarily</li>
              <li>Description of the activity or legal inquiry</li>
              <li>Documents you send for review purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              How do we use this information?
            </h2>
            <p>
              Information is used exclusively to provide the requested legal
              service. We do not share your information with third parties
              without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              Compliance with Jordanian law
            </h2>
            <p>
              We comply with the Jordanian Personal Data Protection Law No. 24
              of 2023 and its amendments.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-primary">
              Your rights
            </h2>
            <p>
              You have the right to request access, correction, or deletion of
              your data. Contact us via WhatsApp.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}
