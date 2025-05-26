export default function CustomPlan() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-12 bg-accent/10" id="personalizado">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-title-text dark:text-title-text">¿Necesitas algo a medida?</h2>
        <p className="text-lg text-muted-text mb-6 max-w-2xl mx-auto">
          Ofrecemos planes personalizados para empresas con necesidades específicas. Elige solo las funcionalidades y límites que tu negocio requiere. ¡Contáctanos y armamos tu plan ideal!
        </p>
        <a href="#contacto" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary/80 transition-colors">
          Solicitar plan personalizado
        </a>
      </div>
    </section>
  );
} 