import { Users, Code, Lightbulb, Award, Star, ArrowRight, School } from "lucide-react";
import Image from "next/image";

// Placeholder para los miembros del equipo
const teamMembers = [
  { name: "Federico Magri", initials: "FM" },
  { name: "Alexis Herrera Vegas", initials: "AH" },
  { name: "Juan Pablo Fernandez", initials: "JF" },
  { name: "Diego Mayanski", initials: "DM" },
  { name: "Jeronimo Esquivel", initials: "JE" },
  { name: "Ian Cruz Oniszczuk", initials: "IO" },
];

export default function WhoAreWe() {
  return (
    <section id="quienes-somos" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 space-y-16">

        {/* 1. Título Principal */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-title-text mb-4">
            Creado por ingenieros, para emprendedores
          </h2>
          <p className="text-lg text-muted-text">
            Somos un equipo de 6 estudiantes de <span className="font-semibold text-primary">Ingeniería Informática en el ITBA</span>, apasionados por construir herramientas que realmente potencien a las PYMEs.
          </p>
        </div>

        {/* 2. Nuestra Historia y Por Qué Elegirnos (Layout de 2 columnas) */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Columna Izquierda: La Historia */}
          <div className="space-y-6 mb-12 lg:mb-0">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <School className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Nuestra Misión</h3>
            </div>
            <p className="text-muted-text">
              Banda nació como un proyecto universitario. Nos propusimos aplicar lo que aprendíamos para resolver un problema real: la falta de software de gestión moderno, accesible y fácil de usar para las empresas de Argentina.
            </p>
            <p className="text-muted-text">
              Lo que empezó en las aulas del <strong className="text-foreground">Instituto Tecnológico de Buenos Aires</strong>, hoy es una plataforma robusta que combina la rigurosidad académica con las necesidades del mundo real.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-sm text-muted-text italic">
                <strong className="text-foreground not-italic">Fun fact:</strong> Nuestro primer "cliente" fue un familiar de uno de los fundadores. Hoy, gracias a Banda, gestionan su inventario y pedidos de forma digital y triplicaron sus ventas online. 🚀
              </p>
            </div>
          </div>

          {/* Columna Derecha: Los Beneficios */}
          <div className="space-y-6">
            <BenefitCard
              icon={<Code className="w-6 h-6 text-primary" />}
              title="Tecnología de Vanguardia"
              description="Usamos el mismo stack tecnológico que las grandes empresas de Silicon Valley, asegurando una plataforma rápida, segura y escalable."
            />
            <BenefitCard
              icon={<Lightbulb className="w-6 h-6 text-green-500" />}
              title="Innovación Constante"
              description="Al estar en la frontera del conocimiento académico, integramos constantemente las últimas tendencias y mejores prácticas en nuestro software."
            />
            <BenefitCard
              icon={<Users className="w-6 h-6 text-blue-500" />}
              title="Soporte Directo y Personal"
              description="Hablas directamente con nosotros, los desarrolladores. Cada cliente es un socio estratégico para nuestro crecimiento."
            />
          </div>
        </div>

        
       { /*
        <div className="text-center">
          <h3 className="text-2xl font-bold text-title-text mb-8">Conoce al Equipo Fundador</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {member.initials}
                </div>
                <span className="text-sm text-muted-text">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
        */
        }
        

      </div>
    </section>
  );
}

// Componente auxiliar para las tarjetas de beneficios
const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
    <div className="flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-text">{description}</p>
    </div>
  </div>
);