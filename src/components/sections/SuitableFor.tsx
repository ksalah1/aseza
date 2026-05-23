import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, Section } from "@/components/ui";

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-primary-600">
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SuitableFor() {
  const t = useTranslations("fit");
  const forItems = t.raw("forItems") as string[];
  const consultItems = t.raw("consultItems") as string[];

  return (
    <Section width="wide" background="muted">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-primary-500">
          {t("lead")}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold text-primary">
            {t("forTitle")}
          </h3>
          <ItemList items={forItems} />
        </Card>
        <Card>
          <h3 className="text-lg font-semibold text-primary">
            {t("consultTitle")}
          </h3>
          <ItemList items={consultItems} />
        </Card>
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="leading-relaxed text-primary-600">{t("closing")}</p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-background"
        >
          {t("closingCta")}
        </Link>
      </div>
    </Section>
  );
}
