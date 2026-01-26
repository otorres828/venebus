import { Link, type MetaFunction } from "react-router";
import { useState } from "react";

export const meta: MetaFunction = () => [
    { title: "VeneBus | Ayuda" },
    { name: "description", content: "Detalle de Categoria" },
];

const articles = [
    {
        id: "pago-movil",
        title: "¿Cómo realizar un Pago Móvil correctamente?",
        description: "Aprende los pasos para registrar tu pago, los datos bancarios requeridos y cómo validar el número de referencia de tu transacción.",
    },
    {
        id: "pagos-internacionales",
        title: "Métodos de pago internacionales (Zelle y Tarjetas)",
        description: "Información sobre cómo utilizar Zelle, tarjetas de débito/crédito internacionales y los tiempos de aprobación para estos métodos.",
    },
    {
        id: "pago-pendiente",
        title: "¿Por qué mi pago aparece como \"Pendiente\"?",
        description: "Conoce los tiempos de verificación bancaria y qué hacer si tu comprobante no ha sido validado después de 30 minutos.",
    },
    {
        id: "pagos-taquilla",
        title: "Pagos en Taquilla y Terminales",
        description: "Guía sobre cómo pagar en efectivo (Bolívares/Divisas) directamente en los terminales aliados antes de abordar.",
    },
    {
        id: "facturacion",
        title: "Facturación y Recibos Digitales",
        description: "Dónde descargar tu factura legal y el desglose de impuestos (IVA/IGTF) aplicados a tu compra de boleto.",
    },
];

export default function DetalleCategoria() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <main className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="mb-10">
                <nav className="flex items-center gap-2 text-sm text-[#637f88] dark:text-gray-400 mb-8">
                    <Link to="/" className="hover:text-primary">Inicio</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link to="/ayuda" className="hover:text-primary" >Centro de Ayuda</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="font-semibold text-primary">Pago Movil</span>
                </nav>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 className="text-[#111618] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight">Pagos
                            y Pago Móvil</h1>
                        <p className="text-[#637f88] dark:text-gray-400 mt-2">Todo lo que necesitas saber sobre métodos de pago
                            nacionales e internacionales.</p>
                    </div>
                    <div className="w-full max-w-[400px]">
                        <label className="flex flex-col w-full h-12">
                            <div
                                className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-gray-200 dark:border-gray-700">
                                <div
                                    className="text-[#637f88] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-xl">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </div>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#111618] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border-none bg-white dark:bg-gray-800 h-full placeholder:text-[#637f88] px-3 text-sm font-normal"
                                    placeholder="Buscar en esta categoría..." />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 space-y-4">
                    {articles.map((item) => (
                        <Link
                            key={item.id}
                            to={`/ayuda/articulo/${item.id}`}
                            className="block group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all cursor-pointer shadow-sm"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-[#111618] dark:text-white text-lg font-bold group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#637f88] dark:text-gray-400 mt-2 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                <span className="material-symbols-outlined text-gray-300 group-hover:text-primary">
                                    arrow_forward_ios
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <aside className="w-full lg:w-80 space-y-8">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <h2 className="text-[#111618] dark:text-white font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">star</span>
                            Artículos Populares
                        </h2>
                        <ul className="space-y-4">
                            <li>
                                <a className="text-sm text-primary hover:underline block font-medium" href="#">Bancos
                                    disponibles para Pago Móvil</a>
                            </li>
                            <li>
                                <a className="text-sm text-primary hover:underline block font-medium" href="#">Límites diarios
                                    de transferencia</a>
                            </li>
                            <li>
                                <a className="text-sm text-primary hover:underline block font-medium" href="#">Uso de Biopago
                                    para boletos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/20">
                        <h2 className="text-[#111618] dark:text-white font-bold mb-2">¿Aún necesitas ayuda?</h2>
                        <p className="text-[#637f88] dark:text-gray-400 text-sm mb-6">Si no encuentras lo que buscas, nuestro
                            equipo está listo para asistirte.</p>
                        <div className="space-y-3">
                            <button
                                className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all text-sm">
                                <span className="material-symbols-outlined text-lg">chat_bubble</span>
                                Chat en Vivo
                            </button>
                            <button
                                className="w-full bg-white dark:bg-gray-700 text-primary dark:text-white border border-primary/30 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-sm">
                                <span className="material-symbols-outlined text-lg">mail</span>
                                Enviar Correo
                            </button>
                        </div>
                    </div>
                    <div
                        className="rounded-2xl overflow-hidden h-40 bg-cover bg-center shadow-inner"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3WQv0jbYV000mlKSMZmBY0IOZGYfY4UeTO69vpns9yGFKEsULF9jxzg4kx0qsgG2Oj-deD82PJw2lXsXqrAUj3U4Pqk0BzrQTSO_v9BRhb6dKCN60YFuALDmMP_Zqu0sGNqzRnUozeHLNc9sBN3_sewwGO3EnlF7utBbcNKIe-x1pLL8v4mycHD_w5ZHMj8r3RZue5Y0CysMiSfV5BuJaV8ggBlFVcOpemHRDVFAd41AFjZyagU7nd7aOWSNpNYlwlheWufL7YA")',
                        }}
                    >
                        <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                            <span className="text-white text-xs font-medium uppercase tracking-wider">
                                Centro de Soporte VeneBus
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
