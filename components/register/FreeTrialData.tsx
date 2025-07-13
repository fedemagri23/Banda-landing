import { TrendingUp, BarChart3, DollarSign, Users, ArrowUpRight, Target, Zap } from "lucide-react";

export default function FreeTrialData() {
  return (
    <div className="w-full space-y-6">
      
      {/* 🎨 Hero visual con degradado verde */}
      <div className="relative bg-gradient-to-br from-green-500 to-primary p-8 rounded-2xl text-white overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4">
            <TrendingUp className="w-32 h-32 rotate-12" />
          </div>
          <div className="absolute bottom-2 left-2">
            <BarChart3 className="w-24 h-24 -rotate-12" />
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">¡Tu negocio va a crecer!</h2>
              <p className="text-green-100">Únete a la revolución digital</p>
            </div>
          </div>
          
          {/* Stats visuales */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold">+340%</div>
              <div className="text-sm text-green-100">Crecimiento promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15 min</div>
              <div className="text-sm text-green-100">Para estar listo</div>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 Gráficos de crecimiento simulados */}
      <div className="bg-background p-6 rounded-xl border border-border">
        <h3 className="text-lg font-semibold text-title-text mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          Así crecen nuestros clientes
        </h3>
        
        {/* Gráfico de barras fake con CSS */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-text w-16">Mes 1</span>
            <div className="flex-1 bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-primary h-3 rounded-full" style={{width: '30%'}}></div>
            </div>
            <span className="text-sm font-medium text-foreground">$450K</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-text w-16">Mes 2</span>
            <div className="flex-1 bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-primary h-3 rounded-full" style={{width: '60%'}}></div>
            </div>
            <span className="text-sm font-medium text-foreground">$780K</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-text w-16">Mes 3</span>
            <div className="flex-1 bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-primary h-3 rounded-full" style={{width: '85%'}}></div>
            </div>
            <span className="text-sm font-medium text-foreground">$1.2M</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-text w-16">Mes 4</span>
            <div className="flex-1 bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-green-400 to-primary h-3 rounded-full animate-pulse" style={{width: '100%'}}></div>
            </div>
            <span className="text-sm font-medium text-foreground">$1.5M</span>
          </div>
        </div>
      </div>

      {/* 🎯 Métricas de éxito */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-primary/10 dark:from-green-900/20 dark:to-primary/10 p-4 rounded-xl border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-foreground">Ingresos</span>
          </div>
          <div className="text-xl font-bold text-green-600">+290%</div>
          <div className="text-xs text-muted-text">vs método tradicional</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-primary/10 dark:from-blue-900/20 dark:to-primary/10 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-foreground">Clientes</span>
          </div>
          <div className="text-xl font-bold text-blue-600">+150%</div>
          <div className="text-xs text-muted-text">más satisfechos</div>
        </div>
      </div>

    

    </div>
  );
}