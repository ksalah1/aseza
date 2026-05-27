const BASE_URL = process.env.ROUTE_CHECK_BASE_URL ?? 'http://localhost:3000';

const ROUTES = [
  '/', '/ar', '/en', '/ar/services', '/en/services', '/ar/register-business-in-aseza', '/en/register-business-in-aseza', '/ar/why-aqaba', '/en/why-aqaba', '/ar/import-export-company-aseza', '/en/import-export-company-aseza', '/ar/foreign-investors', '/en/foreign-investors', '/ar/tax-customs-aqaba', '/en/tax-customs-aqaba', '/ar/restricted-prohibited-activities-aseza', '/en/restricted-prohibited-activities-aseza', '/ar/existing-aseza-companies', '/en/existing-aseza-companies', '/ar/faq', '/en/faq', '/ar/contact', '/en/contact', '/sitemap.xml', '/robots.txt'
];

const failures = [];

for (const route of ROUTES) {
  const url = `${BASE_URL}${route}`;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const badStatus = res.status >= 500 || res.status === 404 || !res.ok;
    if (badStatus) {
      failures.push({ route, status: res.status, location: res.url });
    }
    console.log(`${res.status} ${route} -> ${res.url}`);
  } catch (error) {
    failures.push({ route, status: 'FETCH_ERROR', location: String(error) });
    console.log(`ERR ${route}`);
  }
}

if (failures.length) {
  console.error('\nRoute health check failed:\n');
  for (const item of failures) {
    console.error(`- ${item.route} -> ${item.status} ${item.location}`);
  }
  process.exit(1);
}

console.log('\nAll route health checks passed.');
