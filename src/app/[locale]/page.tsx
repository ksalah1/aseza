import { setRequestLocale } from "next-intl/server";
import {
  Hero,
  Included,
  Process,
  AboutAttorney,
  Pricing,
  FAQ,
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
      <Included />
      <Process />
      <AboutAttorney />
      <Pricing />
      <FAQ />
    </>
  );
}
