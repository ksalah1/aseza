# ASEZA.co — Project README

**Private legal service for company registration in the Aqaba Special Economic Zone**  
Al-Barakat Law Firm · Nour Barakat, Licensed Attorney · Bar Association #16872  
🌐 [aseza.co](https://aseza.co) · 📱 WhatsApp: +962 78 555 9253

---

## Overview

aseza.co is a bilingual (Arabic/English) client acquisition website for Al-Barakat Law Firm's ASEZA company registration service. It is the primary Arabic-language private legal service for company registration in the Aqaba Special Economic Zone — a near-monopoly niche with no direct Arabic-language competitor.

The site guides investors through activity review, document preparation, and company registration with ASEZA — the Aqaba Special Economic Zone Authority. It is explicitly positioned as a **private legal service, not the official ASEZA government portal**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (logical properties for RTL) |
| Hosting | Vercel (edge network, ISR active) |
| Internationalization | next-intl (Arabic primary, English secondary) |
| Analytics | Google Analytics 4 — `G-CN8C2GT6PE` |
| Search Console | Verified — `RsKZVBHTHc8EzG1Vuu2ljxetSBQCFr2cgHBqYGTQEqQ` |
| Schema | JSON-LD: `LegalService`, `LocalBusiness`, `Organization` |
| Contact | WhatsApp `wa.me/962785559253` (primary conversion mechanism) |

---

## Current Status — May 2026

### ✅ Live and Working

- All 13+ key pages return HTTP 200
- Root redirect: `aseza.co/` → `/ar` (308 Permanent)
- GA4 base tag live — collecting pageviews, sessions, geography, device data
- Google Search Console verification tag deployed in `<head>`
- CSP security header present in HTTP response
- Sitemap: 42 URLs, all indexed
- `hreflang` alternate tags: `ar`, `en`, `x-default`
- Canonical URLs on all pages
- Mobile sticky WhatsApp CTA bar
- RTL layout via logical CSS properties (`border-s-*`, `ms-*`, `ps-*`)
- Phone numbers wrapped in `dir="ltr"` for correct display
- FAQ accordion with `aria-expanded` states
- Schema markup: LegalService + LocalBusiness (dual `@type`)
- Privacy policy page: `/ar/privacy-policy` (previously 404, now 200)
- TTFB: ~144ms (Vercel edge cache HIT)

### ⚠️ Pending / Known Issues

| Issue | Priority | Status |
|---|---|---|
| Attorney photograph (Nour Barakat) | 🔴 Critical | Not added |
| WhatsApp click events in GA4 | 🔴 Critical | Code prompt ready, not deployed |
| GA4 `whatsapp_cta_click` marked as Key Event | 🔴 Critical | Manual step in GA4 UI |
| Google Search Console VERIFY button clicked | 🔴 Critical | Tag live, button not clicked |
| IBM Plex Sans Arabic font loading | 🟡 High | Unverified — may be falling back to system font |
| "تواصل واتساب" → "تواصل عبر واتساب" in nav | 🟡 High | Missing preposition fix |
| Table scroll hint direction (يميناً → يساراً) | 🟡 High | RTL scroll direction error |
| Duplicate green WhatsApp CTAs (foreign investors) | 🟡 Medium | Two consecutive identical buttons |
| "خارطة الطريق" hero label | 🟢 Low | Should be "ما نقدمه لك" |
| "نراجع نشاطك" phrase repeated 27× | 🟡 Medium | Claude Code fix prompt written |
| Dense tax/customs paragraphs | 🟡 Medium | Should be bullet lists |
| Attorney scheduling link | 🟡 Medium | No Calendly/Cal.com link exists |
| Social proof / case studies | 🟡 Medium | Zero testimonials or case studies |
| Aqaba photography | 🟡 Medium | Site uses CSS gradients, no real photos |
| English version content depth | 🟡 Medium | Structurally present, not independently compelling |

---

## Analytics Configuration

### GA4 Property
- **Measurement ID:** `G-CN8C2GT6PE`
- **Implementation:** `@next/third-parties/google` (`GoogleAnalytics` component)
- **Placement:** Root layout, before `</html>` tag
- **Status:** ✅ Live — collecting pageviews, sessions, device, geography

### What Is Currently Tracked (Automatic)
- Page views (all routes)
- Session duration
- Device type (mobile/desktop/tablet)
- Geographic location
- Traffic source / referral

### What Is NOT Yet Tracked (Custom Events Pending)
- `whatsapp_cta_click` — primary conversion ❌
- `investor_path_selected` — audience segmentation ❌
- `language_switch` — international investor signal ❌
- `faq_expanded` — engagement depth ❌
- `legal_reference_click` — deep research signal ❌
- `high_intent_page_view` — checklist/fees pages ❌

### Implementation File (Ready to Deploy)
`lib/analytics.ts` — see Claude Code implementation prompt in project notes

### GA4 Setup Steps Remaining
1. Deploy custom event tracking (Claude Code prompt)
2. In GA4 UI: mark `whatsapp_cta_click` as Key Event
3. Enable Enhanced Measurement: Scrolls, Outbound clicks, File downloads
4. Build custom dashboard (4-panel management view)

---

## Google Search Console

- **Property:** `aseza.co`
- **Verification method:** HTML meta tag
- **Tag:** `google-site-verification=RsKZVBHTHc8EzG1Vuu2ljxetSBQCFr2cgHBqYGTQEqQ`
- **Tag status:** ✅ Live in `<head>`
- **Verification status:** ⚠️ VERIFY button not yet clicked in Search Console UI
- **Sitemap:** Not yet submitted — submit at `https://aseza.co/sitemap.xml`

**Action required:** Log into [search.google.com/search-console](https://search.google.com/search-console), click VERIFY, then submit sitemap.

---

## Site Structure

### Arabic Routes (`/ar/*`) — Primary
```
/ar                                    Homepage
/ar/register-business-in-aseza        Jordanian investor guide
/ar/foreign-investors                  Foreign investor guide
/ar/import-export-company-aseza       Import/export registration
/ar/existing-aseza-companies          Amendment & renewal services
/ar/why-aqaba                         Why invest in Aqaba
/ar/tax-customs-aqaba                 Tax and customs framework
/ar/permitted-activities-list         Permitted activities
/ar/restricted-prohibited-activities-aseza   Restricted/prohibited
/ar/labor-work-permits-aseza          Work permits and residency
/ar/services                          Services overview
/ar/services/activity-review          Activity review service
/ar/services/amend-existing-company   Amendment service
/ar/services/renew-registration       Renewal service
/ar/process                           4-step registration process
/ar/aseza-registration-checklist      Document checklist
/ar/aseza-registration-fees           Fee information
/ar/licensing-after-registration      Post-registration licensing
/ar/annual-renewal-aseza              Annual renewal guide
/ar/faq                               FAQ (16 questions, 6 categories)
/ar/about                             About the firm & attorney
/ar/legal-references                  Official legal references
/ar/blog/*                            Knowledge center (Arabic)
/ar/privacy-policy                    Privacy policy
```

### English Routes (`/en/*`) — Secondary
```
/en                                    Homepage (English)
/en/* (mirrors Arabic structure)
```

### Key Components
| Component | File | Purpose |
|---|---|---|
| `Hero` | `components/Hero.tsx` | Homepage hero with roadmap card |
| `AudiencePaths` | `components/AudiencePaths.tsx` | 9-card investor segmentation |
| `InvestorPositioning` | `components/InvestorPositioning.tsx` | Stats, FTA, comparison table |
| `TrustAndTransparency` | `components/TrustAndTransparency.tsx` | Attorney card, legal warnings |
| `FAQ` | `components/FAQ.tsx` | Accordion FAQ |
| `MobileStickyCTA` | `components/MobileStickyCTA.tsx` | Fixed bottom WhatsApp bar |
| `CitizenBanner` | `components/CitizenBanner.tsx` | Top disclaimer bar |
| `Navbar` | `components/Navbar.tsx` | Navigation with language toggle |

---

## WhatsApp CTA Inventory

All `wa.me/962785559253` links on the homepage — for event tracking implementation:

| # | Location | Pre-filled Text? | investor_type |
|---|---|---|---|
| 1 | Nav desktop | No | unknown |
| 2 | Nav mobile (icon) | No | unknown |
| 3 | Hero primary CTA | No | unknown |
| 4 | Audience card — مستثمر أردني | **Yes** | jordanian |
| 5 | FTA section | No | unknown |
| 6 | Foreign investors section (×2) | No | foreign |
| 7 | Attorney trust card | No | unknown |
| 8 | Mobile sticky bar | No | unknown |
| 9 | Footer | No | unknown |

**Pre-filled text for card #4:**
```
أرغب بمراجعة نشاطي قبل تسجيل شركة في العقبة.
```

---

## Branding

| Token | Value |
|---|---|
| Primary (Navy) | `#0F2A4A` |
| Accent (Gold) | `#C9A84C` |
| Background | `#fafaf8` |
| WhatsApp Green | `#25D366` |
| Font (Arabic) | IBM Plex Sans Arabic |
| Font (Latin) | IBM Plex Sans |
| Direction | RTL (Arabic primary) |

---

## Performance Benchmarks (May 2026)

| Metric | Value | Status |
|---|---|---|
| TTFB | ~144ms | ✅ Excellent |
| Cache | Vercel HIT | ✅ |
| JS Bundle | ~750KB uncompressed / ~234KB compressed | ✅ Acceptable |
| CSS | ~8KB compressed | ✅ |
| HTML | ~230KB (RSC payload) | ⚠️ Large — inflation from i18n messages |
| Root redirect | 308 Permanent | ✅ |
| HSTS | Not confirmed | ⚠️ |
| CSP | Present | ✅ |
| x-frame-options | SAMEORIGIN | ✅ |

---

## Known Technical Debt

```
1. IBM Plex Sans Arabic font: @font-face may not be loading correctly.
   Verify in Chrome DevTools → Network → filter "font"

2. HTML size (230KB): RSC payload includes full i18n messages object
   for all pages on every route. Consider splitting messages by route.

3. Root 308 redirect: Verify Vercel handles this as permanent 
   (not resetting on each deploy).

4. No content-security-policy violation reporting endpoint configured.

5. Sector pages word counts appear inflated by RSC payload.
   Actual unique page content not independently verified.
```

---

## Content Status

### High Priority Content Gaps
- [ ] Attorney photograph — on hero, about page, attorney trust card
- [ ] Case studies (3 minimum, anonymized) — for about page
- [ ] Aqaba photography — port, waterfront, business district
- [ ] English version content — independently written for foreign investors
- [ ] Fee estimator widget — Phase 2
- [ ] Activity eligibility tool — Phase 2

### Blog / Knowledge Center
Target keyword categories for new posts:
- "تسجيل شركة في العقبة" (registration process)
- "الاستثمار في العقبة" (investment guide)
- "ضريبة الدخل في العقبة" (tax explainer)
- "ASEZA company registration" (English)
- "Aqaba free zone guide" (English)

---

## Environment Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-CN8C2GT6PE

# Add any API keys or service configs here
```

---

## Key Contacts

| Role | Person | Contact |
|---|---|---|
| Attorney / Decision Maker | نور بركات (Nour Barakat) | WhatsApp +962 78 555 9253 |
| Digital / Site Management | Khaled | (project manager) |
| Bar Association | نقابة المحامين الأردنيين | Membership #16872 |
| Firm website | nourbarakat.com | — |

---

## Audit History

All audits conducted May 2026. Full audit notes and Claude Code implementation prompts are maintained in the project session history.

| Dimension | Score |
|---|---|
| First Impression | 5.5/10 |
| Investor Positioning | 4.0/10 |
| User Journey | 5.0/10 |
| Registration Clarity | 6.5/10 |
| Legal Accuracy | 6.5/10 |
| Trust & Credibility | 5.5/10 |
| Navigation & IA | 5.0/10 |
| Copywriting | 6.5/10 |
| Arabic UX & RTL | **7.5/10** |
| English Readiness | 4.0/10 |
| Mobile UX | **7.0/10** |
| Visual Design | **7.0/10** |
| SEO | 4.5/10 |
| Conversion | 5.0/10 |
| Accessibility | 5.5/10 |
| Technical Performance | **7.5/10** |
| Content Completeness | 6.0/10 |
| Analytics | 4.0/10 |
| **Overall** | **5.8/10** |

**90-day target:** 7.7/10

---

## Immediate Action Checklist

Copy this into a task tracker and assign owners:

```
WEEK 1 — CRITICAL
[ ] Attorney photo session (Nour)
[ ] Add attorney photo to hero, about, attorney card (Khaled)
[ ] Deploy WhatsApp event tracking — Claude Code prompt (Developer)
[ ] GA4: mark whatsapp_cta_click as Key Event (Khaled, 2 min)
[ ] GA4: enable Enhanced Measurement (Khaled, 2 min)
[ ] Search Console: click VERIFY button (Khaled, 1 min)
[ ] Search Console: submit sitemap https://aseza.co/sitemap.xml (Khaled)
[ ] Nav fix: "تواصل واتساب" → "تواصل عبر واتساب" (Developer)
[ ] Mobile aria-label: add Arabic label to WhatsApp icon (Developer)
[ ] Remove duplicate green CTA in foreign investors section (Developer)
[ ] Fix table scroll hint: يميناً → يساراً (Developer)

WEEK 2
[ ] Aqaba photography commission (Nour + Khaled)
[ ] Write 3 anonymized case studies (Nour + Khaled)
[ ] Add Calendly/Cal.com consultation booking link (Khaled)
[ ] Audit and fix IBM Plex Sans Arabic font loading (Developer)
[ ] Reduce "راجع نشاطك" repetition — Claude Code prompt (Developer)
[ ] Break dense tax paragraphs into bullet lists — Claude Code prompt (Developer)

WEEK 3-4
[ ] Add backlink from nourbarakat.com → aseza.co (Khaled)
[ ] Create Lawzana profile for the firm (Khaled)
[ ] Publish 2 new Arabic blog posts (Khaled)
[ ] Build GA4 custom dashboard (Khaled)
[ ] English version content audit (Khaled)
```

---

## Claude Code Prompts Archive

Implementation prompts written and ready to deploy:

| Prompt | Purpose | Status |
|---|---|---|
| GA4 Installation | Install @next/third-parties GoogleAnalytics | ✅ Deployed |
| Search Console | Add verification meta tag | ✅ Deployed |
| Analytics Events | Wire WhatsApp/FAQ/language onClick tracking | ⏳ Ready |
| Arabic UX Fixes | Nav text, duplicate CTAs, scroll hint, labels | ⏳ Ready |
| Competitive Benchmark | Full audit vs Dubai/Singapore/Saudi | ✅ Completed |
| Strategic Audit | Full 13-section strategic audit | ✅ Completed |

---

*README last updated: May 2026*  
*Site: [aseza.co](https://aseza.co) · Managed by Al-Barakat Law Firm*
