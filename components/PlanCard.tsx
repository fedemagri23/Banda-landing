import { CheckCircle, XCircle } from 'lucide-react';

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
      className={`relative flex flex-col gap-4 rounded-2xl shadow-xl p-8 border-2 transition-all bg-card ${
        highlight
          ? "border-primary bg-primary/10 scale-105 z-10"
          : "border-muted bg-background"
      }`}
    >
      {highlight && (
        <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow">Popular</span>
      )}
      <h3 className={`text-2xl font-bold mb-2 text-center ${highlight ? "text-primary" : "text-title-text dark:text-title-text"}`}>{title}</h3>
      <div className="flex flex-col items-center mb-2">
        <span className="text-4xl font-extrabold text-title-text dark:text-title-text">{price.split("/")[0]}</span>
        <span className="text-base text-muted-text font-medium">/{price.split("/")[1]}</span>
      </div>
      {priceDetail && (
        <div className="text-xs text-success font-semibold text-center whitespace-pre-line mb-2">{priceDetail}</div>
      )}
      {description && <div className="text-muted-text mb-2 text-center">{description}</div>}
      <ul className="mb-2 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-foreground">
            <CheckCircle className="w-5 h-5 text-success" />
            <span>{f}</span>
          </li>
        ))}
        {limitations && limitations.map((l, i) => (
          <li key={i} className="flex items-center gap-2 text-muted-text line-through">
            <XCircle className="w-5 h-5 text-destructive" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className={`mt-auto w-full inline-block px-6 py-3 rounded-lg font-bold shadow text-lg transition-colors text-center ${
          highlight
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-muted text-title-text hover:bg-muted/80"
        }`}
      >
        {cta}
      </a>
    </div>
  );
} 