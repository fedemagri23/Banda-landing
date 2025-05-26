interface PlanCardProps {
  title: string;
  price: string;
  priceDetail?: string;
  description?: string;
  features: string[];
  limitations?: string[];
  highlight?: boolean;
  cta?: string;
  ctaHref?: string;
}

export default function PlanCard({
  title,
  price,
  priceDetail,
  description,
  features,
  limitations,
  highlight,
  cta = "Elegir plan",
  ctaHref = "#contacto",
}: PlanCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl shadow-lg p-6 bg-card border-2 transition-all ${
        highlight
          ? "border-primary scale-105 bg-primary/10"
          : "border-muted"
      }`}
    >
      <h3 className={`text-2xl font-bold mb-2 ${highlight ? "text-primary" : "text-title-text dark:text-title-text"}`}>{title}</h3>
      <div className="text-lg font-semibold">{price}</div>
      {priceDetail && <div className="text-success font-medium mb-2">{priceDetail}</div>}
      {description && <div className="text-muted-text mb-2">{description}</div>}
      <ul className="mb-2 space-y-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-foreground">
            <span className="text-success">•</span> {f}
          </li>
        ))}
      </ul>
      {limitations && (
        <div className="text-warning mb-2">
          <strong>Limitaciones:</strong>
          <ul className="list-disc ml-5">
            {limitations.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      )}
      <a
        href={ctaHref}
        className={`mt-auto inline-block px-6 py-2 rounded-lg font-semibold shadow transition-colors text-center ${
          highlight
            ? "bg-primary text-primary-foreground hover:bg-primary/80"
            : "bg-muted text-title-text hover:bg-muted/80"
        }`}
      >
        {cta}
      </a>
    </div>
  );
} 