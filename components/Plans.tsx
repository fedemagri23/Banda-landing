import PlanCard from "./PlanCard";

export default function Plans() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-16 bg-gradient-to-b from-background to-muted/60" id="planes">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-title-text dark:text-title-text">Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlanCard
            title="Banda Standard"
            price="u$s 40 / mes"
            priceDetail="Primeros 30 días gratis\nAnual: u$s 336 (u$s 28/m, 30% OFF)"
            features={['Hasta 1 empresa (dueño)', 'Máximo 10 empleados']}
            limitations={['Sin exportar/importar CSV', 'Sin IA', 'Sin empleados ilimitados']}
            highlight={false}
            cta="Probar gratis"
            ctaHref="#contacto"
          />
          <PlanCard
            title="Banda Plus"
            price="u$s 60 / mes"
            priceDetail="Anual: u$s 504 (u$s 42/m, 30% OFF)"
            features={['Hasta 3 empresas (dueño)', 'Empleados ilimitados', 'Exportar/Importar CSV', 'Funcionalidades con IA']}
            highlight={true}
            cta="Elegir Plus"
            ctaHref="#contacto"
          />
          <PlanCard
            title="Plan Personalizado"
            price="A convenir"
            description="Elige solo lo que necesitas. Definimos juntos el precio, funcionalidades y límites. Ideal para empresas con requerimientos especiales."
            features={['Funcionalidades y límites a medida', 'Soporte personalizado', 'Integraciones avanzadas']}
            highlight={false}
            cta="Contactar"
            ctaHref="#contacto"
          />
        </div>
      </div>
    </section>
  );
} 