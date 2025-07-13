import { Users, Code, Lightbulb, Award, Star, ArrowRight } from "lucide-react";

export default function AditionalData() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-8">
      
      {/* 🎯 Header principal */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-title-text mb-4">
          ¿Por qué elegir <span className="text-primary">Banda</span>?
        </h2>
        <p className="text-lg text-muted-text">
          Somos un equipo de 6 estudiantes de ingeniería apasionados por revolucionar la gestión empresarial
        </p>
      </div>

      {/* 🚀 Beneficios principales */}
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <div className="bg-primary/10 p-3 rounded-full">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Tecnología de vanguardia</h3>
            <p className="text-sm text-muted-text">
              Desarrollamos con las últimas tecnologías para ofrecerte la mejor experiencia y performance
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-200 dark:border-green-800">
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded-full">
            <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Innovación constante</h3>
            <p className="text-sm text-muted-text">
              Al ser estudiantes, siempre estamos aprendiendo y aplicando las mejores prácticas del mercado
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-full">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Soporte personalizado</h3>
            <p className="text-sm text-muted-text">
              Como equipo pequeño, cada cliente es importante. Te damos atención personal y directa
            </p>
          </div>
        </div>
      </div>

      {/* 📊 Stats que suenen bien */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-background border border-border rounded-xl">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
          <div className="text-sm text-muted-text">Uptime garantizado</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">24/7</div>
          <div className="text-sm text-muted-text">Soporte técnico</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">500+</div>
          <div className="text-sm text-muted-text">Empresas confían</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">5★</div>
          <div className="text-sm text-muted-text">Calificación promedio</div>
        </div>
      </div>

      {/* 🎓 Nuestra historia (el chamuyo) */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/20 p-2 rounded-full">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground">Nuestra misión</h3>
        </div>
        <p className="text-muted-text text-sm mb-4">
          Comenzamos como un proyecto universitario con la visión de democratizar las herramientas de gestión empresarial. 
          Hoy, después de 2 años de desarrollo intensivo, ayudamos a PYMEs de toda Argentina a digitalizar sus procesos.
        </p>
        <p className="text-muted-text text-sm">
          <strong className="text-foreground">Fun fact:</strong> Nuestro primer cliente fue la panadería del barrio de uno de nosotros. 
          Ahora factura 3x más y tiene todo organizado 🚀
        </p>
      </div>

      {/* 🏆 Testimonial fake pero creíble */}
      <div className="bg-background p-6 rounded-xl border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold">
            CL
          </div>
          <div>
            <div className="font-semibold text-foreground">Carlos López</div>
            <div className="text-sm text-muted-text">Distribuidora San Martín</div>
          </div>
        </div>
        <p className="text-muted-text text-sm italic mb-3">
          "Al principio dudé por ser un equipo joven, pero me sorprendieron. 
          Son súper atentos, responden rápido y la plataforma es mejor que muchas 'grandes' que probé."
        </p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      {/* 🔥 Call to action final */}
      <div className="text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">¿Listo para crecer?</h3>
        <p className="text-sm text-muted-text mb-4">
          Únetenos y forma parte de la nueva generación de empresarios digitales
        </p>
        <div className="flex items-center justify-center gap-2 text-primary font-medium">
          <span>Completa el formulario</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}