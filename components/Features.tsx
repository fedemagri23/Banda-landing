import { Receipt, Sparkles, BarChart3, Users, Archive, CheckCircle } from "lucide-react";

// --- Ilustraciones de UI para cada Feature ---

const FinanzasImage = () => (
  <div className="p-4 bg-card border border-border rounded-lg shadow-lg space-y-3">
    <div className="flex justify-between items-center">
      <h4 className="font-bold text-lg text-foreground">FACTURA A</h4>
      <div className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full border border-green-500/30">
        ARCA OK
      </div>
    </div>
    <div className="p-3 bg-background rounded-md">
      <h4 className="font-semibold text-sm mb-2 text-foreground">Rentabilidad (Ajustado por Inflación)</h4>
      <div className="flex items-end justify-between h-16 gap-2">
        <div className="w-full bg-primary/20 rounded-t-md h-1/4" title="Ene"></div>
        <div className="w-full bg-primary/40 rounded-t-md h-1/2" title="Feb"></div>
        <div className="w-full bg-primary/60 rounded-t-md h-3/4" title="Mar"></div>
        <div className="w-full bg-primary rounded-t-md h-full" title="Abr"></div>
      </div>
    </div>
  </div>
);

const InteligenciaArtificialImage = () => (
  <div className="p-4 bg-card border border-border rounded-lg shadow-lg">
    <div className="flex items-center gap-2 mb-3">
      <Sparkles className="w-5 h-5 text-primary" />
      <h4 className="font-semibold text-sm text-foreground">Asistente IA</h4>
    </div>
    <div className="space-y-2 text-xs">
      <div className="p-2 bg-background rounded-lg self-end max-w-[80%] ml-auto">
        <p className="text-muted-text">Muéstrame las ventas del último mes por producto</p>
      </div>
      <div className="p-2 bg-primary/10 rounded-lg self-start max-w-[80%]">
        <p className="text-foreground font-medium">Claro, aquí tienes el resumen:</p>
        <p className="text-muted-text mt-1">- Producto A: $150.000<br/>- Producto B: $95.000</p>
      </div>
    </div>
  </div>
);

const GestionEquipoImage = () => (
  <div className="p-4 bg-card border border-border rounded-lg shadow-lg">
    <h4 className="font-semibold text-sm mb-3 text-foreground">Asignar Rol</h4>
    <div className="space-y-3">
      <div className="flex items-center justify-between p-2 bg-background rounded-md">
        <span className="text-xs text-muted-text">Juan Pérez</span>
        <span className="text-xs font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full">Admin</span>
      </div>
      <div className="flex items-center justify-between p-2 bg-background rounded-md">
        <span className="text-xs text-muted-text">Maria García</span>
        <span className="text-xs font-bold text-green-500 px-2 py-0.5 bg-green-500/10 rounded-full">Ventas</span>
      </div>
    </div>
  </div>
);

const InventarioImage = () => (
  <div className="p-4 bg-card border border-border rounded-lg shadow-lg">
    <h4 className="font-semibold text-sm mb-3 text-foreground">Estado de Inventario</h4>
    <div className="space-y-2">
      <div className="flex justify-between items-center p-2 bg-background rounded-md">
        <span className="text-xs text-muted-text">Producto A</span>
        <span className="text-xs font-medium text-green-500">En Stock (150u.)</span>
      </div>
      <div className="flex justify-between items-center p-2 bg-red-500/10 rounded-md border border-red-500/20">
        <span className="text-xs text-red-500 font-bold">Producto B</span>
        <span className="text-xs font-bold text-red-500">¡Stock Bajo! (5u.)</span>
      </div>
    </div>
  </div>
);

// --- Datos de las Features actualizados ---
const features = [
  {
    title: "Facturación y Finanzas Inteligentes",
    desc: "Integramos la API oficial de ARCA para que factures sin fricción. Visualiza la salud de tu empresa con gráficos claros y reportes ajustados por inflación.",
    icon: Receipt,
    points: ["Integración oficial con ARCA para facturación electrónica", "Gráficos financieros con ajuste por inflación automático", "Control de cuentas corrientes y flujo de caja"],
    imageComponent: <FinanzasImage />,
    imageSide: "right",
  },
  {
    title: "Inteligencia Artificial que Trabaja para Ti",
    desc: "Habla con tus datos. Realiza consultas complejas en lenguaje natural y deja que nuestra IA te dé las respuestas. Importa planillas CSV y el sistema mapeará las columnas por ti.",
    icon: Sparkles,
    points: ["Consulta tu base de datos con preguntas (ej: 'ventas del último mes')", "Importación inteligente de CSV con mapeo automático", "Sugerencias proactivas para optimizar tu negocio"],
    imageComponent: <InteligenciaArtificialImage />,
    imageSide: "left",
  },
  {
    title: "Gestión de Equipo y Roles",
    desc: "Organiza tu equipo de trabajo de forma eficiente. Asigna roles y permisos específicos para cada empleado, asegurando que cada uno acceda solo a la información que necesita.",
    icon: Users,
    points: ["Creación de perfiles para cada empleado", "Asignación de roles predefinidos (Admin, Ventas, etc.)", "Control de acceso y registro de actividades por usuario"],
    imageComponent: <GestionEquipoImage />,
    imageSide: "right",
  },
  {
    title: "Control de Inventario Automatizado",
    desc: "Mantén tu stock siempre al día. Nuestro sistema lo actualiza con cada venta y te notifica de forma proactiva cuando un producto está por agotarse para que nunca pierdas una venta.",
    icon: Archive,
    points: ["Actualización de stock en tiempo real", "Notificaciones automáticas de stock bajo", "Historial de movimientos por producto"],
    imageComponent: <InventarioImage />,
    imageSide: "left",
  },
];

export default function Features() {
  return (
    <section className="w-full py-16 sm:py-24 bg-background" id="funcionalidades">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-title-text mb-4">
            Tu negocio, más inteligente que nunca
          </h2>
          <p className="text-lg text-muted-text">
            Descubre las herramientas que te darán el control total y la visión clara para tomar las mejores decisiones.
          </p>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Columna de Texto */}
              <div className={`space-y-6 ${feature.imageSide === 'left' ? 'lg:order-last' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-text">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Columna de Imagen */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md p-4 bg-background rounded-2xl shadow-primary/10">
                  {feature.imageComponent}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}