import React from "react";

export function meta() {
  return [
    { title: "Venebus | Promociones" },
    { name: "description", content: "Promociones y ofertas de pasajes Venebus" },
  ];
}

export default function PromocionesPage() {
  const heroBg = "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBovZz3jF_QHCJFRC-SAzXpSjdbaiu_DjY97i_xdYBKZnuP1MwriuI3944ffPP4NlV_nqgoNzzT9gbNCYDENyajVK9mpr4IwxogNU-k9qHNlImoHW4AQ-PxDY6VaKasxe-vSgeQenjovLnTaISfawBLJFLbIrYJCZ-ZmTniDLHNDE7sntZ__kgtKwyDQ-V_un3eOxdFt95GHtiRc5qnzuvZNMGoRoUrA7enUxc1w8WhYS9OdT6qwSRQS2LX0fNhtfvV9iXchkzrqg')";
  const promos = [
    {
      title: "Caracas → Puerto La Cruz",
      tag: "Directo",
      discount: "-30%",
      price: "$15.00",
      original: "$21.50",
      ves: "Aprox. 540.00 VES por persona",
      icon: "directions_bus",
      badgeBg: "accent",
      timeLeft: "02h 45m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxAJqaaB1TIrWAz7eIEXbtcOvmc_l1D2ld_WxHkdtPRHy2aFT3BgVr7FgUdVgkRPSIEwayXb5-HEt24jrc0WKwqJ12Iev6k-jKi22h6I9iL2E_yZc_OcTTeVlbqR8mIXjSG5cMEBmWYg3GQECzE-oyMIntfrPk9AzrSIzmKBciMzYuImcRrPl7qRph3ZLJw4f2PXAB1gs38ReFq1OYKvTgX7ocJyalrKlZA_wscrDNPn2A8hInV7k0hZ1ZTMCPMxhEwFq3rOUdfg')",
    },
    {
      title: "Maracay → Mérida",
      tag: "Clase Ejecutiva",
      discount: "-20%",
      price: "$22.00",
      original: "$27.50",
      ves: "Aprox. 792.00 VES por persona",
      icon: "star",
      badgeBg: "accent",
      timeLeft: "05h 12m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBu10MlczNieHE5H6Cx_LJ6hz4aWoyvuUUdHnMTLlXjB94udwW1D6zhoP0jw2K4pX5Omauz_LxhxEU5A9ylv02c1fY9QKdQK2bh6Keu9zVgN2Xd2uUI3VT0BNLSvEJju2_HJ36pPeeblBmBv8fii5dPn0ZQ1bTgt5vrV8qyP0vm5-I63v8C2FJeka8H23jTCAgNJzZX0e7kW-cLWGihb1o8dqDwSEoNLztj0JLHG0eqo9IWmsTHP2hG_veQmgHa2rghyfg892a4bQ')",
    },
    {
      title: "Barquisimeto → Caracas",
      tag: "Oferta Relámpago",
      discount: "-40%",
      price: "$12.00",
      original: "$20.00",
      ves: "Aprox. 432.00 VES por persona",
      icon: "flash_on",
      badgeBg: "accent",
      timeLeft: "01h 10m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjgvO2q3SoiXcp3qf7QUozlDh5cftADzCo9JYk8pwPhVkLSOblybueek6-R7N3spooyED5fvUeTrBCUUmPjgudgiPwn9roQJiQkcotFWjuKVD9K_kbUkidDAcqA09Mdr43VjPa07mi5xN6PJQM_DP_bC0IZFqfUTiov8S3NScSS4VoJeQXQu96zDP8TVE38qUx_VS7S50ZOFb6LlGWV-DY8NgSlm5sjD2QrT9FqXSJU7K2Y1LfNxzo3Sm0RfnbCeOW8juu3gT5Dw')",
    },
    {
      title: "Valencia → Maracaibo",
      tag: "Directo",
      discount: "-15%",
      price: "$25.00",
      original: "$29.50",
      ves: "Aprox. 900.00 VES por persona",
      icon: "directions_bus",
      badgeBg: "accent",
      timeLeft: "12h 05m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLYIw_zQg9cB6DCFlgy9b3iIPz_qTFFVge4njqwR_oPDyTT5I0SvpXd78iz1___t8FaZsHNzr71ySFISvRrWfYHcLY0tIaumsI3NxCIHb4M8HRh0nQINPYKZbXpE16PYCQ6NKNrwLxAfugxFV6Y7ERPk6PyYpGIhM7BblHmHxsjGdmdFecmWpD-LBeAPTNmds0PgQ6pdBCzqHadhrhsC255xPw8wSQrd38rNrjOCcBMabrnta7oZ06cKx27u0fOnw7Rjs266OUaQ')",
    },
    {
      title: "San Cristóbal → Barinas",
      tag: "Servicio Nocturno",
      discount: "-25%",
      price: "$18.00",
      original: "$24.00",
      ves: "Aprox. 648.00 VES por persona",
      icon: "bedtime",
      badgeBg: "accent",
      timeLeft: "08h 30m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwKtXwHxdpdDmh1pNENyX8hmXld9j6KGtklpgnrI2YJU0sT6pAa1_MXE88ja6kH1eJ_o-5V9jkyKCXQJKgqGPCnBUN_UKMkFH1DpBIYJAHgdqoyU_FcRrYrLubmd5s1jI_mYxiHsJWyi8Qiv3uNxkc2x1raRKXK2rtRnZtpdQr7GoEt3JJQWECT4PGsPqWPR710nDMXOWJvWsKHa6rbYNDFt7-3YBJBS2BDpSiFJp6PLmc0h4v9_e1qWoK8CJH2R99QvJBgmmDSg')",
    },
    {
      title: "Maracay → Coro",
      tag: "Últimos Asientos",
      discount: "-50%",
      price: "$10.00",
      original: "$20.00",
      ves: "Aprox. 360.00 VES por persona",
      icon: "local_fire_department",
      badgeBg: "accent",
      timeLeft: "00h 45m",
      image:
        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVYUGKy2NBImitKPr53e3RvwIpu8s9mKTB0Pxkx0RjI8QRV4n9c8SakZLHppirbbGbWKz_jIftH0LLAXdsWnc8yXNl3YPrX8n89KYetxLrA6uOXQtb0XCRd77wegtPhTjrig2sfMYN2B952YOlcml96WoXiDIi7IDJKlQZmw6FFGkZBRs25TNK-fKpHFglTKSfwLuLyQVwvvq97vD5O2uUl4w6ExKnIb_G7XraA7cTLstq93x_HKl0Pvp1yokn6n80yQkTQ3UOfw')",
    },
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-8">
      <section className="relative mb-12 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-60">
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Panoramic view of Venezuelan Caribbean beach with sunset"
            style={{ backgroundImage: heroBg }}
          ></div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        <div className="relative z-20 max-w-2xl">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent text-white text-xs font-black uppercase tracking-widest animate-pulse">
            Ofertas Flash
          </span>
          <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4">Promociones Imperdibles</h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-8">
            Aprovecha nuestros descuentos flash y viaja por toda Venezuela al mejor precio. ¡El tiempo corre!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-[#111718] px-8 py-3.5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all">
              Ver Ofertas de Hoy
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Cómo funciona
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 px-4 py-6 bg-accent/5 rounded-2xl border border-accent/20">
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-accent leading-none">bolt</span>
            Ofertas del Momento
          </h3>
          <p className="text-gray-500 dark:text-gray-400">Nuevos descuentos cada 24 horas</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Próxima actualización en:</p>
          <div className="flex gap-2 items-center">
            {[
              { label: "Hrs", value: "02" },
              { label: "Min", value: "45" },
              { label: "Seg", value: "12" },
            ].map((item, idx, arr) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col items-center">
                  <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 w-12 h-12 flex items-center justify-center rounded-lg text-accent font-black text-xl leading-none">
                    {item.value}
                  </div>
                  <span className="text-[10px] mt-1 text-gray-400 uppercase font-bold">{item.label}</span>
                </div>
                {idx < arr.length - 1 && <div className="text-accent font-black text-xl pt-2">:</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                data-alt={promo.title}
                style={{ backgroundImage: promo.image }}
              ></div>
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 rounded-full font-black text-sm shadow-lg">{promo.discount}</div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-white text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  Termina en: {promo.timeLeft}
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{promo.tag}</p>
                  <h4 className="text-xl font-bold leading-tight">{promo.title}</h4>
                </div>
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{promo.icon}</span>
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-[#111718] dark:text-white">{promo.price}</span>
                  <span className="text-sm text-gray-400 line-through font-bold">{promo.original}</span>
                </div>
                <p className="text-sm font-medium text-gray-500 mb-6">{promo.ves}</p>
                <button className="w-full bg-primary hover:bg-primary/90 text-[#111718] py-3.5 rounded-2xl font-bold transition-all transform hover:-translate-y-1">
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
          Cargar más promociones
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </main>
  );
}
