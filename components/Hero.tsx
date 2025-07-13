import VideoPlayer from "./VideoPlayer";
import FreeTrialForm from "./register/FreeTrialForm";
import Link from "next/link";

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
          <div className="flex w-full max-w-md gap-2">
             <Link 
              href="/register"
              className="bg-primary hover:bg-primary/90 py-4 px-8 rounded-xl text-white btn btn-primary w-full text-center"
            >
              Comienza tu prueba gratuita
            </Link>
          </div>
          <div className="text-sm text-muted-text mt-2">Sin tarjeta de crédito. 30 días gratis.</div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="w-full w-full aspect-video">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  );
} 