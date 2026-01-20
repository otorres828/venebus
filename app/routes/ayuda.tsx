import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
    { title: "VeneBus | Ayuda" },
    { name: "description", content: "Centro de ayuda VeneBus" },
];

export default function Ayuda() {
    return (
        <main className="max-w-[1200px] mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center mb-12">
                <h1 className="text-[#111618] dark:text-white tracking-tight text-[40px] font-extrabold leading-tight pb-4">
                    ¿Cómo podemos ayudarte hoy?
                </h1>
                <p className="text-[#637f88] dark:text-gray-400 text-lg max-w-2xl mb-8">
                    Busca soluciones rápidas sobre pagos, reembolsos y requisitos de viaje en las rutas nacionales de Venezuela.
                </p>
                {/* Search Bar Component */}
                <div className="w-full max-w-[720px]">
                    <label className="flex flex-col min-w-40 h-16 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-2xl h-full shadow-sm border border-gray-100 dark:border-gray-700">
                            <div
                                className="text-[#637f88] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-6 rounded-l-2xl"
                                data-icon="search"
                            >
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-2xl text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border-none bg-white dark:bg-gray-800 h-full placeholder:text-[#637f88] px-4 text-lg font-normal leading-normal"
                                placeholder="Busca 'Pago Móvil', 'Reembolsos' o 'Boleto digital'..."
                            />
                        </div>
                    </label>
                </div>
            </div>

            {/* Section Header */}
            <div className="flex items-center justify-between mb-6 px-2">
                <h2 className="text-[#111618] dark:text-white text-[24px] font-bold leading-tight tracking-[-0.015em]">
                    Explora por categorías
                </h2>
                <a className="text-primary font-semibold text-sm hover:underline" href="#">
                    Ver todos los temas
                </a>
            </div>

            {/* Image Grid Component (Categories) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-50 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden relative"
                        data-alt="Digital payment methods and mobile phone screen"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3WQv0jbYV000mlKSMZmBY0IOZGYfY4UeTO69vpns9yGFKEsULF9jxzg4kx0qsgG2Oj-deD82PJw2lXsXqrAUj3U4Pqk0BzrQTSO_v9BRhb6dKCN60YFuALDmMP_Zqu0sGNqzRnUozeHLNc9sBN3_sewwGO3EnlF7utBbcNKIe-x1pLL8v4mycHD_w5ZHMj8r3RZue5Y0CysMiSfV5BuJaV8ggBlFVcOpemHRDVFAd41AFjZyagU7nd7aOWSNpNYlwlheWufL7YA')",
                        }}
                    >
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div>
                        <h3 className="text-[#111618] dark:text-white text-lg font-bold leading-tight mb-2">Pagos y Pago Móvil</h3>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm font-normal leading-relaxed">
                            Configura tu Pago Móvil, transferencias Zelle y métodos locales.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-50 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden relative"
                        data-alt="Person looking frustrated at a screen for refund"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgH9PbWsKCP5ZnaPK6gAG5hTzk1unZphjtgbiGfWnwnL75dLjHD63jo8Q9ufgdf3iaByu0Pq03uuWf7OvaBeVIJfNHQ3KvFyQk_gCesthvwwvhKDqG7W490SBU9gRsnwArUEdSAvFSY4XZfoJDkxuNQ4E1iC5vWkr9wl3YoXnANB_5PB76ByOVh37WswupYW-T-KODCg6lRrCwHSOqvVyjDE9vZEi5q1L7uE5OU5jD9L646fdH089DC_tmob9Y5nBFO_mTi2HTtA')",
                        }}
                    >
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div>
                        <h3 className="text-[#111618] dark:text-white text-lg font-bold leading-tight mb-2">Cambios y Reembolsos</h3>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm font-normal leading-relaxed">
                            Cómo solicitar devoluciones o cambiar la fecha de tu viaje.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-50 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden relative"
                        data-alt="Modern bus interior and travel documents"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpBfhqqdz2Df5muNL_gGZqtCirpq1xStzikNoLa_LmICf0WLvcWY_2C0PQo_Re74RBN188Sxji-J8qsL7D5fEqhFmi6eW2RuF1sYXlSc8HE-9MkBawG4uq0eyUjCgR9ueewm-yXE6oqAgITvYyIIhRY3wUYha1fK9Xt8-lVG_cEcrMzByTrXNUI80yHxMz4zxdvexAWC0W9CGWsc25940Nw2C546759fZbCBFidkCR4LV00SgoCaWCMqXDxB7_eEIWbCWhJBcLxg')",
                        }}
                    >
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div>
                        <h3 className="text-[#111618] dark:text-white text-lg font-bold leading-tight mb-2">Requisitos de Viaje</h3>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm font-normal leading-relaxed">
                            Documentación (Cédula/Pasaporte) y políticas de equipaje.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-50 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer group">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg overflow-hidden relative"
                        data-alt="Abstract customer support and account icons"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvXRSaMKJIGRDEWvBLLLmfaUuBd9mdRChUb_OgwlJK29GZSSdTRfF2k9idIHVGb7oXn5KNIbazt_VdB2l4h3_uEZFHt7cqcptqG1z4Rs3rNoArnidVqTk7AAC7yBBNHK9bAxyGNSQ6KTKzkf5Ev8MmFZnLFvuSmY1569so8hP2wXnrfMUtqjyg0_d72HsnSr6_d8-FDsUfPsTnmpUR-N9GqClFVaVi90HKGbY-dahRvM3QCMzx0HC9-b1XbUwY_GVt0ijKFNjxtA')",
                        }}
                    >
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div>
                        <h3 className="text-[#111618] dark:text-white text-lg font-bold leading-tight mb-2">Mi Cuenta y Perfil</h3>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm font-normal leading-relaxed">
                            Gestiona tus datos personales y revisa tu historial de boletos.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h2 className="text-[#111618] dark:text-white text-2xl font-bold mb-8">Preguntas Frecuentes Populares</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                        "¿Cómo descargo mi boleto digital?",
                        "¿Con cuánta antelación debo estar en el terminal?",
                        "¿Puedo pagar con bolívares en efectivo?",
                        "¿Cuál es el peso máximo permitido de equipaje?",
                        "¿Ofrecen descuentos para adultos mayores?",
                        "¿Cómo recupero mi contraseña?",
                    ].map((question) => (
                        <div
                            key={question}
                            className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded-lg transition-colors"
                        >
                            <span className="text-[#111618] dark:text-gray-200 font-medium">{question}</span>
                            <span className="material-symbols-outlined text-primary">chevron_right</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Map Section / Terminal Help */}
            <div className="mt-16 flex flex-col md:flex-row items-center gap-12 bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">¿Buscas un Terminal específico?</h2>
                    <p className="text-[#637f88] dark:text-gray-400 mb-6">
                        Encuentra direcciones, horarios y números de contacto de todos los terminales terrestres a nivel nacional (La Bandera, Oriente, Valencia, San Cristóbal).
                    </p>
                    <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all">
                        Ver Terminales
                    </button>
                </div>
                <div className="flex-1 w-full h-[250px] rounded-2xl overflow-hidden shadow-sm">
                    <img
                        alt="Simplified map showing bus route network"
                        className="w-full h-full object-cover"
                        data-alt="Stylized map showing transport routes across Venezuela"
                        data-location="Venezuela"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKqD-ik4J2HwT0RvQ6RV8sMxS4RFGE20Ar3x5wEX6w4wYofhuBSfmnhSkQaFQlaOhKPspB8APacyUlAOf2MK6Wg34bCeUMBF1NxreUNhaH7aN2612_ywNlJifwIaa5paJpWkSUHFoNBoGym80ROcAD5xYtpX1BYs4Tptl1OLTK8s0a1JkHlXPZ0_bWK-WSoaSQkxAMurbLA53oKg8lKNCjMoMxCyh98-JzahQjpRNl-sthQx53DA-Fn0dsvpMvgj8kfTKfHJ9kEA"
                    />
                </div>
            </div>

            <section className="mt-10 bg-gradient-to-r from-primary/90 to-cyan-500 text-white rounded-2xl p-8 shadow-lg">
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

        </main>
    );
}
