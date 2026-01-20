export function meta() {
  return [
    { title: "Tu Boleto de Abordaje" },
    { name: "description", content: "Código QR listo para abordar en el terminal" },
  ];
}

export default function Exito() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 md:py-12 flex flex-col items-center text-slate-800 dark:text-slate-200">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Tu Boleto de Abordaje</h1>
        <p className="text-[#637688] dark:text-gray-400">Por favor, ten este código QR listo para el abordaje en el terminal.</p>
      </div>

      <div className="w-full max-w-[800px] grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-[#1c2631] rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="bg-primary p-6 text-white flex justify-between items-center border-b-4 border-primary">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded">
                  <span className="material-symbols-outlined text-white">directions_bus</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-80 font-bold">EMPRESA</p>
                  <p className="text-lg font-bold leading-none">Expresos Los Llanos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest opacity-80 font-bold">ID DE RESERVA</p>
                <p className="font-mono text-lg font-bold">#VEN-992834</p>
              </div>
            </div>
            <div className="p-8 flex flex-col items-center border-b border-dashed border-gray-200 dark:border-gray-700 relative">
              <div className="absolute -left-3 top_full -translate_y-1/2 size-6 rounded-full bg-background-light dark:bg-background-dark border-r border-gray-200 dark:border-gray-700"></div>
              <div className="absolute -right-3 top_full -translate_y-1/2 size-6 rounded-full bg-background-light dark:bg-background-dark border-l border-gray-200 dark:border-gray-700"></div>
              <div className="bg-white p-4 rounded-xl border-2 border-primary/10 mb-4">
                <div className="size-48 bg-white flex items-center justify-center relative">
                  <img alt="Ticket QR Code" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXMeuC_x1u0ZF5UiQ1ARINwMI71jSrZSpgEtWIQvAPPxtN1BHp6l-2X9TExy85GXNILtabcYLU5lBOdrjzMppqZRpxwvGSZ42TpBoZdDxxHsllEUtNEQQvVaG6JuxNnZ4hHLE5d_yVO6rRwu-LkRgSXbooq8UJFXn6lAMlNsJgzMzW_5-FjYxoqBGgcZ21HwogJd9d29uQZc6Ktub16uVwl0-k8ri8hy5Ai9OU5zamjERP4ISpwjzTkEHtCaKZesADMdqZD6JaJg" />
                </div>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold border border-primary/20">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                BOLETO VÁLIDO
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">ORIGEN</p>
                  <h3 className="text-2xl font-black">CARACAS</h3>
                  <p className="text-sm text-[#637688] dark:text-gray-400">Terminal La Bandera</p>
                </div>
                <div className="flex flex-col items-center px-4">
                  <span className="material-symbols-outlined text-primary text-3xl">arrow_forward</span>
                </div>
                <div className="flex-1 text-right">
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">DESTINO</p>
                  <h3 className="text-2xl font-black text-primary">VALENCIA</h3>
                  <p className="text-sm text-[#637688] dark:text-gray-400">Terminal Big Low Center</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div>
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">FECHA</p>
                  <p className="font-bold">15 Oct 2023</p>
                </div>
                <div>
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">SALIDA</p>
                  <p className="font-bold">08:30 AM</p>
                </div>
                <div>
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">ASIENTO</p>
                  <p className="font-bold text-primary">24A (Ventana)</p>
                </div>
                <div>
                  <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">NÚMERO DE BUS</p>
                  <p className="font-bold">#1042-E</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                <p className="text-[#637688] dark:text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">INFORMACIÓN DEL PASAJERO</p>
                <div className="flex items-center justify-between bg-background-light dark:bg-gray-800/50 p-4 rounded-lg">
                  <div>
                    <p className="text-lg font-bold">Juan Carlos Perez</p>
                    <p className="text-sm text-[#637688] dark:text-gray-400">C.I.: V-12.345.678</p>
                  </div>
                  <span className="material-symbols-outlined text-primary/40">badge</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/30 px-8 py-4 flex items-center gap-2 text-xs text-[#637688] dark:text-gray-400">
              <span className="material-symbols-outlined text-[14px]">info</span>
              El embarque finaliza 15 minutos antes de la salida. Se requiere identificación vigente.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 no-print">
          <div className="bg-white dark:bg-[#1c2631] p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="font-bold mb-4">Acciones del Boleto</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center gap-3 w-full h-12 bg-primary text-white rounded-lg font-bold hover:bg-opacity-90 transition-all">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Descargar PDF
              </button>
              
              {/* <button className="flex items-center justify-center gap-3 w-full h-12 bg-[#25D366] text-white rounded-lg font-bold hover:bg-opacity-80 transition-all">
                <span className="material-symbols-outlined text-[20px]">share</span>
                Compartir por WhatsApp
              </button> */}

              <a
                href="/"
                className="flex items-center justify-center gap-3 w-full h-12 bg-gray-100 dark:bg-white/10 text-slate-800 dark:text-white rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">home</span>
                Ir al inicio
              </a>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-blue-900/10 p-6 rounded-xl border border-primary/10 dark:border-blue-800/20">
            <h4 className="font-bold text-primary flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[20px]">support_agent</span>
              ¿Necesitas ayuda?
            </h4>
            <p className="text-sm text-primary/80 mb-4">
              ¿Tienes problemas con tu boleto o asiento? Contacta a nuestro soporte en terminal.
            </p>
            <a className="text-sm font-bold text-primary underline underline-offset-4" href="#">
              Ver contacto del terminal
            </a>
          </div>

          {/* <div className="flex flex-col items-center gap-2 pt-4">
            <div className="size-24 bg-center bg-no-repeat bg-cover rounded-lg grayscale opacity-50 border border-gray-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHXknkFHRnMe9KZRVnmUm3f09-pAD62ssVzTAAjdT7ueNm89Ij2WoY0eOtTGHov83fRXj6QNX9tfQlxbglxTXRu9GPBKm5BXmiAyqLaKNRgEXlG3ltszjpsfSGwHB3_2JvCHldqRw-SlRVkpQ1DID-68RRqma94XLJpSxvR4Xoa1slpWBfSMVR3mEMdTxOTeleE3tLyFmkbq8Mq-5IP6BJ6tZEwUuw-lsGt7HlkpeiUfb5YTbGLmDv37UGHl964DGEr1Lb5lPw_Q')" }}></div>
            <p className="text-xs text-center text-[#637688] font-bold hover:text-primary cursor-pointer">Ver mapa del terminal</p>
          </div> */}
        </div>
      </div>

      <div className="hidden print-only mt-8 text-center text-sm border-t pt-4">
        <p>Boleto Digital VeneBus - Generado el 12 Oct 2023</p>
        <p>Este documento es un comprobante de viaje válido al presentarse con identificación oficial.</p>
      </div>
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

