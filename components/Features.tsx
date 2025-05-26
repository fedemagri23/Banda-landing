import { BriefcaseIcon, UsersIcon, ChartBarIcon, CpuChipIcon } from "@heroicons/react/24/outline";

const features = [
  {
    title: "Gestión integral",
    desc: "Clientes, proveedores, ventas, compras y contactos en un solo lugar.",
    icon: BriefcaseIcon,
  },
  {
    title: "Facturación electrónica",
    desc: "Emite facturas AFIP automáticamente con integración ARCA.",
    icon: UsersIcon,
  },
  {
    title: "Análisis y reportes",
    desc: "Visualiza métricas clave y toma mejores decisiones.",
    icon: ChartBarIcon,
  },
  {
    title: "Automatización e IA",
    desc: "Ahorra tiempo con automatizaciones e inteligencia artificial.",
    icon: CpuChipIcon,
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-muted/40 dark:bg-muted/20" id="funcionalidades">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-title-text dark:text-title-text">Funcionalidades principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center bg-card rounded-xl shadow p-8 gap-4 border border-border">
              <f.icon className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-lg font-semibold text-title-text dark:text-title-text text-center">{f.title}</h3>
              <p className="text-muted-text text-center text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 