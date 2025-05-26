export default function Contact() {
  return (
    <section className="w-full py-16 bg-muted/50 dark:bg-muted/30" id="contacto">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-title-text dark:text-title-text">Contacto</h2>
        <form className="flex flex-col gap-4 bg-card p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Nombre"
            className="px-4 py-2 rounded border border-input bg-background text-foreground"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded border border-input bg-background text-foreground"
            required
          />
          <textarea
            placeholder="Mensaje"
            className="px-4 py-2 rounded border border-input bg-background text-foreground min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/80 transition-colors"
            disabled
          >
            Enviar mensaje
          </button>
        </form>
        <div className="text-center text-muted-text mt-6">
          También puedes escribirnos a <a href="mailto:info@banda.com" className="underline">info@banda.com</a>
        </div>
      </div>
    </section>
  );
} 