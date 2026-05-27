# ASEZA.co

## Requirements
- Node.js 20+
- npm 10+

## Local setup
```bash
npm install
npm run lint
npm run build
npm run start
```

## Scripts
- `npm run dev` - start local development server.
- `npm run lint` - run ESLint checks.
- `npm run build` - create a production build.
- `npm run start` - run the production server.
- `npm run check:routes` - verify important public routes from a running local production server.
- `npm run analyze` - run a build with `ANALYZE=true` for bundle diagnostics.

## Environment variables
- `NEXT_PUBLIC_GA_ID` (optional): enables Google Analytics when provided.
- `ROUTE_CHECK_BASE_URL` (optional): overrides `http://localhost:3000` for `check:routes`.

## Route health check
1. Build and start production server:
   ```bash
   npm run build
   npm run start
   ```
2. In another terminal run:
   ```bash
   npm run check:routes
   ```

## Lighthouse manual checks
Run Lighthouse (mobile and desktop) against:
- `/ar`
- `/en`
- `/ar/services`
- `/ar/register-business-in-aseza`
- `/ar/contact`

Use Chrome DevTools Lighthouse or `lighthouse` CLI with production server (`npm run start`).

## Vercel deployment notes
- Runtime: Node.js 20 recommended.
- Build command: `npm run build`.
- Start command: `npm run start`.
- Ensure `NEXT_PUBLIC_GA_ID` is set only when needed.
- Validate `/sitemap.xml`, `/robots.txt`, and security headers after deploy.
