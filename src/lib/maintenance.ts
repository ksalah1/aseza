import { siteConfig, whatsappLink } from "@/lib/site";

/**
 * Self-contained HTML for the site-wide maintenance page. Served by the
 * middleware with a 503 status, so it must not depend on the app's CSS,
 * fonts, or static assets (those routes are unavailable while offline).
 * Arabic is the primary audience, so the document is RTL with English below.
 */
export function maintenancePage(): string {
  const wa = whatsappLink();
  const mailto = `mailto:${siteConfig.email}`;

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>الموقع تحت الصيانة | Under Maintenance — ${siteConfig.name}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #fafaf8;
    color: #0f2a4a;
    font-family: system-ui, -apple-system, "Segoe UI", Tahoma, Arial, sans-serif;
    line-height: 1.6;
  }
  .card {
    max-width: 560px;
    width: 100%;
    text-align: center;
    background: #ffffff;
    border: 1px solid rgba(15, 42, 74, 0.08);
    border-radius: 16px;
    padding: 48px 32px;
    box-shadow: 0 12px 40px rgba(15, 42, 74, 0.08);
  }
  .brand {
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 0.02em;
    margin-bottom: 24px;
    color: #0f2a4a;
  }
  h1 { font-size: 1.6rem; margin: 0 0 12px; }
  p { margin: 0 0 8px; color: #3b4a5e; }
  .divider {
    height: 1px;
    background: rgba(15, 42, 74, 0.1);
    margin: 28px 0;
  }
  .en { direction: ltr; }
  .en h1 { font-size: 1.4rem; }
  .actions {
    margin-top: 28px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .actions a {
    display: inline-block;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.95rem;
  }
  .btn-primary { background: #0f2a4a; color: #ffffff; }
  .btn-secondary {
    background: transparent;
    color: #0f2a4a;
    border: 1px solid rgba(15, 42, 74, 0.25);
  }
</style>
</head>
<body>
  <main class="card">
    <div class="brand">${siteConfig.name}</div>

    <h1>الموقع تحت الصيانة</h1>
    <p>نقوم حالياً بإجراء بعض التحسينات على موقعنا.</p>
    <p>سنعود قريباً. شكراً لتفهّمكم.</p>

    <div class="divider"></div>

    <div class="en">
      <h1>We&rsquo;ll be back soon</h1>
      <p>Our site is currently down for scheduled maintenance.</p>
      <p>Please check back shortly. Thank you for your patience.</p>
    </div>

    <div class="actions">
      <a class="btn-primary" href="${wa}">واتساب / WhatsApp</a>
      <a class="btn-secondary" href="${mailto}">${siteConfig.email}</a>
    </div>
  </main>
</body>
</html>`;
}
