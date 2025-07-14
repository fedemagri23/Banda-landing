"use client";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

export default function Contact() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Formulario enviado (simulación). ¡Gracias por contactarnos!");
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-muted/50 dark:bg-muted/30" id="contacto">
      <div className="container mx-auto px-4">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-title-text mb-4">
            ¿Listo para empezar? Hablemos.
          </h2>
          <p className="text-lg text-muted-text">
            Completa el formulario o utiliza uno de nuestros canales de contacto. Estamos aquí para ayudarte a llevar tu negocio al siguiente nivel.
          </p>
        </div>

        {/* Contenido Principal (2 columnas) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Nuestros Canales</h3>
            <p className="text-muted-text">
              Si prefieres un contacto más directo, no dudes en utilizar estos medios. Nuestro equipo te responderá a la brevedad.
            </p>
            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail className="w-5 h-5 text-primary" />}
                title="Email"
                text="info@banda.com"
                href="mailto:info@banda.com"
              />
              <ContactInfoItem
                icon={<Phone className="w-5 h-5 text-primary" />}
                title="Teléfono / WhatsApp"
                text="+54 9 11 1234-5678"
                href="https://wa.me/5491112345678"
              />
              <ContactInfoItem
                icon={<MapPin className="w-5 h-5 text-primary" />}
                title="Oficinas"
                text="Av. Eduardo Madero 399, Buenos Aires (ITBA)"
              />
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-card p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Campo Nombre */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              {/* Campo Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-text w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email de contacto"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              {/* Campo Mensaje */}
              <div className="relative">
                 <MessageSquare className="absolute left-3 top-4 text-muted-text w-5 h-5" />
                <textarea
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground min-h-[120px] focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              {/* Botón de Envío */}
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 transition-transform duration-200 active:scale-95"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente auxiliar para los items de contacto
const ContactInfoItem = ({ icon, title, text, href }: { icon: React.ReactNode, title: string, text: string, href?: string }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-text hover:text-primary transition-colors">
          {text}
        </a>
      ) : (
        <p className="text-muted-text">{text}</p>
      )}
    </div>
  </div>
);