import { setRequestLocale } from "next-intl/server";
import {
  Hero,
  PainPoints,
  Solution,
  Process,
  Benefits,
  Pricing,
  FAQ,
  CTABanner,
} from "@/components/sections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <Process />
      <Benefits />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}
