export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t border-border text-center text-muted-text text-sm mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <span>© {new Date().getFullYear()} Banda. Todos los derechos reservados.</span>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
} 