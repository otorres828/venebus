import type { MetaFunction } from "react-router";

const faqs = [
  {
    question: "¿Cómo cambio o cancelo mi pasaje?",
    answer:
      "Ingresa con tu cuenta, ve a Mis Viajes, selecciona el boleto y elige Reprogramar o Cancelar según las políticas de la ruta.",
  },
  {
    question: "No recibí mi boleto en el correo",
    answer:
      "Revisa la carpeta de spam. Si no aparece, descarga el PDF desde Mis Viajes o contáctanos con tu número de referencia.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Pago Móvil, transferencias bancarias nacionales y tarjetas de crédito/débito emitidas en Venezuela.",
  },
  {
    question: "¿Cómo solicito factura fiscal?",
    answer: "Envíanos tus datos fiscales y número de compra a facturacion@VeneBus.com dentro de las 24 horas posteriores a la compra.",
  },
];

export const meta: MetaFunction = () => [
  { title: "VeneBus | Ayuda" },
  { name: "description", content: "Resuelve tus dudas y contacta soporte de VeneBus" },
];

export default function Ayuda() {
  return (
    <main className="bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <header className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Centro de ayuda</p>
              <h1 className="text-3xl md:text-4xl font-bold font-heading mt-2">¿En qué podemos ayudarte?</h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
                Encuentra respuestas rápidas, gestiona tus solicitudes y contacta a nuestro equipo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="mailto:soporte@VeneBus.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">support_agent</span>
                <span>Contactar soporte</span>
              </a>
              <a
                href="/resultados"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white dark:bg-gray-700 border border-slate-200 dark:border-gray-600 text-primary font-semibold hover:bg-slate-50 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">confirmation_number</span>
                <span>Ver mis viajes</span>
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Centro de ayuda", "Reporte de pago", "Cambiar boleto", "Factura"].map((item) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-xl p-4 flex items-center gap-3 shadow-sm"
            >
              <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined">help</span>
              </div>
              <div>
                <p className="text-sm font-semibold">{item}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Gestiona tu solicitud en minutos</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">quiz</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading">Preguntas frecuentes</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Las dudas más comunes sobre compras y viajes.</p>
            </div>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group border border-slate-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-slate-50/60 dark:bg-gray-900/40"
              >
                <summary className="flex items-center justify-between cursor-pointer text-sm font-semibold text-slate-800 dark:text-slate-100">
                  <span>{item.question}</span>
                  <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45">add</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/90 to-cyan-500 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide">Atención inmediata</p>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mt-1">Escríbenos por WhatsApp o correo</h3>
              <p className="text-white/80 max-w-2xl mt-2">
                Horario de soporte: lunes a sábado, 8:00 a.m. a 8:00 p.m. (GMT-4).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/584121234567"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-white text-primary font-semibold shadow-md hover:-translate-y-0.5 transition-transform"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:soporte@VeneBus.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 border border-white/60 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                <span>Correo</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
