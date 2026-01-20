import { useEffect } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "@lib/auth";

export function meta() {
    return [
        { title: "VeneBus | Iniciar Sesión" },
        { name: "description", content: "Accede para gestionar tus pasajes" },
    ];
}

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/", { replace: true });
        }
    }, [navigate]);
    return (
        <main className="flex-grow flex flex-col lg:flex-row w-full overflow-hidden text-slate-800 dark:text-slate-200 min-h-screen">

            {/* Panel izquierdo (inspiración) */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary/5">
                <div
                    className="absolute inset-0 z-0 bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIbnZeXUOtSOqPViQtv90kpZDOHmcLAnyrP6XOIB8xTerzgXeK6KgGHcU7xnyt0T0wl9YisQAag4aekiaGpF8c7fo6fvvltkVK10FBCBl0aAWh-y351P_gOmqY4wX6P5SMZ38-65hhRQPB9HUL18FLXb1jVOzkJTtXasJFO7RA3DkAABVenACYOdcVELeRxbz7e8JmCE7ENa_MBF_dNmCD0sKSaVNEkODEltbCUXaxKEhSbm6thhH_UeQ6jRSTgzAXJLzltCG2Jg')",
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-16 left-16 right-16 z-20 text-white">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                        Explora Venezuela
                    </span>
                    <h1 className="text-5xl font-bold leading-tight mb-4 font-heading">Tu próximo destino comienza aquí.</h1>
                    <p className="text-xl text-gray-100 max-w-md">Únete a la comunidad de viajeros más grande de Venezuela y gestiona tus pasajes de forma rápida y segura.</p>
                    <div className="mt-8 flex gap-4">
                        <div className="flex -space-x-2">
                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDsWznQTk5Ovo2EfD5ra8t2ux2JPhdJM7YXu5_TJPRoIv5YjwI_A_UGZC-27uvYZ__kD5H0xUBDm2itYbBM7w8TCX7NGY0xQlmhgX4xQkMBrZy6R3aeGySchBKpTfOpUGA_bHUcS0NI5dUXbtNTHDha4egFv6wORKXDpoOlCVzJd77T4M3IZT02McaS5GmL1WyR6t54KbhLkfGRNjCecUR_wY1VSm84iDTfgSk0ZMqxHjqy_K1vZpV5BNm9I5sfmgZY568k0FL0A" alt="Usuario" />
                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVhxlU3QWUv7VARX0J44N53VlAHQCTuKlysCbft19Dm8XIPVooF0uiTQBEvcF643tM2qGPAcunhqanusG2ks_DGq-E1I9tHxvdPeLz25Q2IxoZy0qqXrkhSXWLEV-6gp2KVwSAUJDpLIP-Jsrz7v4QNTClKIvjj1k0GZxA4zfStf3fd6crQGfaYpIDJpWCeSjbhruO_g-qe0aPwcGZ35TAX30ogJgcBv-b0MY_zUkPKaViICUMwLZzyYUPP9ZVWi7FqcDFRIUYOA" alt="Viajero" />
                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxSo9qrqikVB2OGJMSZXLjHr6RdobmwsJTBsRTJaa4BU7scSXKUcgIVI7cTKQoflgB6igmdMD95TxhChTzZ0Cs4ac7SKVtX5mkDaOqP6pccYsntEbb55I_RP7lq9jwyMBwsOw6cvyf3Vc_YGdlp5gSsnPzH55Dhf6mHwMKbD2Ps3m5CUgwbCjG1HmIFuKUKodvM78hqecpSnpWz6anCkMjxfoIjknCKzuRFENbKCSTAa7E67gGJi5ZVFQZ9XXQgzBv0OV0dLKGUg" alt="Usuario frecuente" />
                        </div>
                        <div className="text-sm">
                            <p className="font-bold">+10k Viajeros</p>
                            <p className="text-gray-300">Confían en nosotros cada mes</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Panel derecho (formulario de autenticación) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-background-light dark:bg-background-dark h-full">
                <div className="w-full max-w-[480px] bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                    {/* Tabs */}
                    <div className="mb-8">
                        <div className="flex border-b border-[#dce3e5] dark:border-gray-700 gap-8">
                            <div className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4 transition-all" >
                                <p className="text-sm font-bold tracking-[0.015em]">Iniciar Sesión</p>
                            </div>
                            <div onClick={() => navigate('/registrarse')} className="cursor-pointer flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637f88] dark:text-gray-400 pb-[13px] pt-4 hover:text-primary transition-all" >
                                <p className="text-sm font-bold tracking-[0.015em]">Crear Cuenta</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-[#111618] dark:text-white text-2xl font-bold font-heading">¡Bienvenido de nuevo!</h2>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm mt-1">Ingresa tus credenciales para gestionar tus pasajes.</p>
                    </div>

                    <form className="space-y-4">
                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#111618] dark:text-gray-200 text-sm font-semibold">Correo Electrónico</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">mail</span>
                                <input
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    className="flex w-full rounded-lg text-[#111618] dark:text-white border border-[#dce3e5] dark:border-gray-600 bg-white dark:bg-gray-700 h-12 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-[#111618] dark:text-gray-200 text-sm font-semibold">Contraseña</label>
                                <a className="text-xs font-bold text-primary hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">lock</span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="flex w-full rounded-lg text-[#111618] dark:text_white border border-[#dce3e5] dark:border-gray-600 bg-white dark:bg-gray-700 h-12 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <input id="remember" type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="remember" className="text-sm text-[#637f88] dark:text-gray-400">Recordarme en este equipo</label>
                        </div>

                        {/* CTA */}
                        <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                            <span>Ingresar a mi cuenta</span>
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <span className="relative bg-white dark:bg-gray-800 px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">O continúa con</span>
                    </div>

                    {/* Social login */}
                    <button className="w-full border border-[#dce3e5] dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-[#111618] dark:text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        <span>Google</span>
                    </button>

                    {/* Help */}
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            ¿Necesitas ayuda? Visita nuestro <a className="text-primary font-bold hover:underline" href="#">Centro de Ayuda</a> o chatea con un agente.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer móvil dentro de la página */}
            <footer className="lg:hidden p-6 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-700 text-center">
                <p className="text-sm text-gray-500">© 2026 VeneBus Venezuela. Todos los derechos reservados.</p>
            </footer>
        </main>
    );
}

export function HydrateFallback() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8 animate-pulse">
      <section className="relative mb-12 rounded-3xl overflow-hidden min-h-[220px] bg-slate-200 dark:bg-slate-700" />
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="h-6 w-48 rounded bg-slate-200 dark:bg-slate-700" />
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="h-10 w-24 rounded bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="h-56 bg-slate-200 dark:bg-slate-700" />
            <div className="p-6 space-y-3">
              <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-6 w-64 bg-slate-200 dark:bg-slate-700 rounded" />
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded-xl mt-4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
