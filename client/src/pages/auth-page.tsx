import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import heroImage from "@assets/generated_images/High_tech_vape_mod_kit_444d8fd5.png";
import registerLogo from "@/assets/register-logo.png";
import { useToast } from "@/hooks/use-toast";

export default function AuthPage() {
  const [location, setLocation] = useLocation();
  const [view, setView] = useState<"login" | "register" | "forgot-password">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Sync internal view state with URL path
  useEffect(() => {
    if (location === "/login") setView("login");
    else if (location === "/register") setView("register");
    else if (location === "/forgot-password") setView("forgot-password");
  }, [location]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/");
    }, 1500);
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Se ha enviado un enlace de recuperación a tu correo.");
      setLocation("/login");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login con Google simulado",
        description: "En la versión final esto conectará con Google OAuth.",
      });
      setLocation("/");
    }, 1500);
  };

  const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  return (
    <div className="min-h-screen w-full flex bg-gray-50">
      {/* Left Side - Hero Image & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#002B5C] text-white relative overflow-hidden flex-col justify-between p-12">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10">
          <Link href="/">
            <img 
              src={registerLogo} 
              alt="IVAPEO" 
              className="h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity brightness-0 invert"
            />
          </Link>
          
          <div className="mt-20">
            <h1 className="text-5xl font-heading font-black mb-6 leading-tight">
              Únete a la comunidad<br/>
              <span className="text-[#38bdf8]">nº1 de vapeo</span> en España.
            </h1>
            <p className="text-blue-100 text-lg max-w-md">
              Accede a ofertas exclusivas, acumula puntos en cada compra y gestiona tus pedidos fácilmente.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#38bdf8]" />
             </div>
             <div>
               <h3 className="font-bold text-lg">Envío Gratis +28€</h3>
               <p className="text-blue-200 text-sm">En todos tus pedidos</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#38bdf8]" />
             </div>
             <div>
               <h3 className="font-bold text-lg">Garantía Oficial</h3>
               <p className="text-blue-200 text-sm">Productos 100% originales certificados</p>
             </div>
          </div>
        </div>

        <div className="text-xs text-blue-300/50 relative z-10 mt-12">
          © 2025 IVAPEO. Todos los derechos reservados.
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-12 relative">
        <div className="absolute top-6 right-6 lg:hidden">
          <Link href="/">
             <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
          </Link>
        </div>
        
        <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left mb-8">
              {/* Mobile Logo */}
              <div className="lg:hidden flex justify-center mb-8">
                 <img 
                    src={registerLogo} 
                    alt="IVAPEO" 
                    className="h-10 w-auto object-contain"
                  />
              </div>

              {view === "login" && (
                <>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Bienvenido de nuevo</h2>
                  <p className="text-gray-500 mt-2">Ingresa tus credenciales para acceder a tu cuenta.</p>
                </>
              )}
              {view === "register" && (
                <>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Crear cuenta</h2>
                  <p className="text-gray-500 mt-2">Completa el formulario para empezar a comprar.</p>
                </>
              )}
              {view === "forgot-password" && (
                <>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Recuperar contraseña</h2>
                  <p className="text-gray-500 mt-2">Te enviaremos las instrucciones a tu email.</p>
                </>
              )}
            </div>

            {view === "forgot-password" ? (
              <form onSubmit={handleRecovery} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="space-y-2">
                    <Label htmlFor="recovery-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="recovery-email" placeholder="hola@ejemplo.com" className="pl-10 h-11" type="email" required />
                    </div>
                 </div>
                 
                 <Button type="submit" className="w-full h-12 text-base font-bold bg-[#002B5C] hover:bg-[#001F42]" disabled={isLoading}>
                   {isLoading ? "Enviando..." : "Enviar enlace de recuperación"}
                 </Button>

                 <div className="text-center">
                   <Button variant="link" className="text-sm text-gray-500" onClick={() => setLocation("/login")}>
                     <ArrowLeft className="w-4 h-4 mr-2" /> Volver al inicio de sesión
                   </Button>
                 </div>
              </form>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Social Login */}
                <Button 
                  variant="outline" 
                  className="w-full h-12 font-medium border-gray-200 hover:bg-gray-50 hover:text-gray-900 relative"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                   <div className="absolute left-4 flex items-center justify-center">
                     <GoogleIcon />
                   </div>
                   Continuar con Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-50 px-2 text-gray-400 font-medium">O con tu email</span>
                  </div>
                </div>

                {view === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="email" placeholder="hola@ejemplo.com" className="pl-10 h-11" type="email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Contraseña</Label>
                        <Button 
                          variant="link" 
                          className="px-0 h-auto text-xs font-semibold text-[#0ea5e9]" 
                          onClick={() => setLocation("/forgot-password")}
                          type="button"
                        >
                          ¿Olvidaste tu contraseña?
                        </Button>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          className="pl-10 h-11 pr-10" 
                          placeholder="••••••••" 
                          required 
                        />
                        <button 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm font-normal text-gray-600 cursor-pointer">Recordar mi sesión</Label>
                    </div>

                    <Button type="submit" className="w-full h-12 text-base font-bold bg-[#002B5C] hover:bg-[#001F42] shadow-lg shadow-blue-900/10" disabled={isLoading}>
                      {isLoading ? "Iniciando..." : "Iniciar Sesión"}
                    </Button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                      ¿No tienes cuenta?{" "}
                      <span 
                        className="font-bold text-[#0ea5e9] cursor-pointer hover:underline"
                        onClick={() => setLocation("/register")}
                      >
                        Regístrate gratis
                      </span>
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input id="name" placeholder="Juan" className="h-11" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastname">Apellidos</Label>
                          <Input id="lastname" placeholder="Pérez" className="h-11" required />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input id="register-email" placeholder="hola@ejemplo.com" className="pl-10 h-11" type="email" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Contraseña</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="register-password" 
                            type={showPassword ? "text" : "password"} 
                            className="pl-10 h-11 pr-10" 
                            placeholder="Crear contraseña segura" 
                            required 
                          />
                          <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="text-[11px] text-gray-400">Mínimo 8 caracteres, una mayúscula y un número.</p>
                      </div>

                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox id="terms" required className="mt-1" />
                        <Label htmlFor="terms" className="text-xs font-normal text-gray-600 leading-tight cursor-pointer">
                          Acepto los <a href="#" className="text-[#0ea5e9] hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-[#0ea5e9] hover:underline">Política de Privacidad</a> de IVAPEO.
                        </Label>
                      </div>

                      <Button type="submit" className="w-full h-12 text-base font-bold bg-[#002B5C] hover:bg-[#001F42] shadow-lg shadow-blue-900/10" disabled={isLoading}>
                        {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                      </Button>

                      <p className="text-center text-sm text-gray-600 mt-4">
                        ¿Ya tienes cuenta?{" "}
                        <span 
                          className="font-bold text-[#0ea5e9] cursor-pointer hover:underline"
                          onClick={() => setLocation("/login")}
                        >
                          Inicia sesión
                        </span>
                      </p>
                  </form>
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
