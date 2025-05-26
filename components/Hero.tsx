import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-16 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-title-text dark:text-title-text leading-tight">
            Gestiona tu empresa<br />
            <span className="text-primary">de forma simple y profesional</span>
          </h1>
          <p className="text-lg text-muted-text max-w-lg">
            Banda es la plataforma integral para PYMES y profesionales: clientes, ventas, compras, facturación AFIP, análisis, IA y más. Todo en un solo lugar.
          </p>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Tu email empresarial"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/80 transition-colors"
              disabled
            >
              Probar gratis
            </button>
          </form>
          <div className="text-sm text-muted-text mt-2">Sin tarjeta de crédito. 30 días gratis.</div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="w-full max-w-[420px] aspect-video bg-muted flex items-center justify-center rounded-xl border border-border shadow-lg text-muted-text text-lg font-semibold">
            Próximamente: video demo de la app
          </div>
        </div>
      </div>
    </section>
  );
} 