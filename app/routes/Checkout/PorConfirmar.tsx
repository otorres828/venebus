export function meta() {
  return [
    { title: "Pago en proceso" },
    { name: "description", content: "Estamos confirmando tu pago; enviaremos tus pasajes al correo" },
  ];
}

export default function PorConfirmar() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-slate-200">
      <div className="w-full max-w-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-3xl">hourglass_top</span>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Estamos procesando tu pago</p>
          <h1 className="text-3xl font-extrabold leading-tight">Tu pago está siendo verificado</h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
            En cuanto se confirme, enviaremos tus pasajes al correo electrónico registrado. Este proceso puede tardar entre 3 y 5 horas.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ¿Necesitas acelerarlo? Escríbenos o llámanos al <a className="font-bold text-primary" href="tel:+581451151515">+58 145 115 1515</a>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-3 pt-2">
          <a
            href="/"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            <span className="material-symbols-outlined text-base">home</span>
            Ir al inicio
          </a>
          <a
            href="mailto:soporte@venebus.com"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all"
          >
            <span className="material-symbols-outlined text-base">support_agent</span>
            Contactar soporte
          </a>
        </div>
      </div>
    </main>
  );
}
