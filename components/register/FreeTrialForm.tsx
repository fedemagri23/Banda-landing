"use client";

import { useState } from "react";
import { User, Phone, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Router } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FreeTrialForm() {
  // 🎯 Estado del formulario
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    mail: "",
    password: ""
  });

  const router = useRouter();

  // 🔐 Estados de la UI
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // 🎯 Manejar cambios en los inputs
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Limpiar errores y éxito al escribir de nuevo
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  // 🚀 Manejar envío del formulario
   const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const apiRoute = process.env.NEXT_PUBLIC_API_ROUTE || 'http://localhost:3001';
    
    try{
       const response = await fetch(`${apiRoute}/user/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData)
      });

      
      if (response.ok) {
        const result = await response.json();
        console.log('✅ Usuario creado exitosamente:', result);

        //router.push('/register/successRegister'); // Redirigir a login
        setSuccess(true);
        setFormData({ username: "", phone: "", mail: "", password: "" }); // Limpiar formulario
      } else {
        const errorData = await response.json();
        console.error('❌ Error del servidor:', errorData);
        const errorMessage = errorData.error || errorData.message || 'Ocurrió un error desconocido.';
        setError(errorMessage);
      }
    }
    catch(err){
      console.error('Error de red:', err);
      setError('No se pudo conectar con el servidor. Revisa tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4 px-8 rounded-2xl">
        
        {/* 🎨 Título */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-title-text mb-2">
            Proba Banda 30 dias gratis
          </h2>
          <p className="text-muted-text">
            Completa el formulario para comenzar
          </p>
        </div>

       {error && (
          <div className="absolute top-18 left-4 right-4 z-50 mb-6">
            <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg shadow-lg">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        )}
        {success && (
          <div className="absolute top-18 left-4 right-4 z-50 mb-6">
            <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700 dark:text-green-300">
                ¡Cuenta creada con éxito! 🎉 Ya puedes iniciar sesión.
              </p>
            </div>
          </div>
        )}

        {/* 📝 Formulario (deshabilitado si hay éxito) */}
        <form onSubmit={handleSubmit} className={`space-y-6 ${success ? 'opacity-50 pointer-events-none' : ''}`}>
          
          {/* 👤 Username */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nombre de usuario
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text w-5 h-5" />
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                placeholder="Tu nombre de usuario"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-text"
                required
              />
            </div>
          </div>

          {/* 📧 Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text w-5 h-5" />
              <input
                type="email"
                value={formData.mail}
                onChange={(e) => handleChange("mail", e.target.value)}
                placeholder="tu@email.com"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-text"
                required
              />
            </div>
          </div>

          {/* 📱 Teléfono */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Teléfono
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text w-5 h-5" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+54 9 11 1234-5678"
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-text"
                required
              />
            </div>
          </div>

          {/* 🔐 Contraseña */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-text w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="Tu contraseña"
                className="w-full pl-10 pr-12 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground placeholder:text-muted-text"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-text hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* 🚀 Botón de envío */}
          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:bg-primary/50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta gratuita'}
          </button>
        </form>

        {/* 📄 Términos */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-text">
            Al crear una cuenta, aceptas nuestros{" "}
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Términos de Servicio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}