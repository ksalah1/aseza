/**
 * Renders a JSON-LD structured-data block. Pass a plain schema.org object;
 * it is serialized into a <script type="application/ld+json"> tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
