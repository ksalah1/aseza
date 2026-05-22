import Script from "next/script";

// Set NEXT_PUBLIC_GA_ID in your environment to activate Google Analytics 4.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

/**
 * Google Analytics 4. Renders nothing unless NEXT_PUBLIC_GA_ID is set, so it
 * adds no third-party requests in development or before analytics is configured.
 */
export function Analytics() {
  if (!process.env.NEXT_PUBLIC_GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
