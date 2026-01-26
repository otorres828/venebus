import { Link, type MetaFunction } from "react-router";
import { useState } from "react";

export const meta: MetaFunction = () => [
    { title: "VeneBus | Ayuda" },
    { name: "description", content: "Categorias" },
];

export default function DetalleCategoria() {

    return (
        <main className="max-w-[1200px] mx-auto px-6 py-10">
            <nav className="flex items-center gap-2 text-sm text-[#637f88] dark:text-gray-400 mb-8">
                <Link to="/" className="hover:text-primary">Inicio</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <Link to="/ayuda" className="hover:text-primary" >Centro de Ayuda</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="font-semibold text-primary">Directorio</span>
            </nav>
            <div className="mb-12">
                <h1 className="text-[#111618] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Todos los Temas de Ayuda</h1>
                <div className="w-full max-w-2xl">
                    <label className="flex flex-col w-full h-14">
                        <div className="flex w-full flex-1 items-stretch rounded-2xl h-full shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="text-[#637f88] flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-5 rounded-l-2xl">
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <input className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-gray-800 rounded-r-2xl text-[#111618] dark:text-white focus:ring-0 placeholder:text-[#637f88] px-4 text-base" placeholder="Busca un artículo o tema..." />
                        </div>
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">payments</span>
                        </div>
                        <h2 className="text-xl font-bold">Pagos</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Guía de Pago Móvil</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Transferencias Zelle</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Errores en la transacción</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Facturación corporativa</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 12 artículos</a></li>
                    </ul>
                </div>
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">confirmation_number</span>
                        </div>
                        <h2 className="text-xl font-bold">Reservas</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Cómo comprar mi boleto</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Selección de asientos</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Mi boleto digital no llegó</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Reservas para grupos</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 8 artículos</a></li>
                    </ul>
                </div>
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">account_circle</span>
                        </div>
                        <h2 className="text-xl font-bold">Cuenta</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Crear una cuenta</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Cambiar contraseña</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Ver historial de viajes</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Seguridad de datos</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 6 artículos</a></li>
                    </ul>
                </div>
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">info</span>
                        </div>
                        <h2 className="text-xl font-bold">Requisitos de Viaje</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Documentos válidos</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Política de equipaje</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Viajar con mascotas</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Menores no acompañados</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 15 artículos</a></li>
                    </ul>
                </div>
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">cancel</span>
                        </div>
                        <h2 className="text-xl font-bold">Cancelaciones</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Solicitar un reembolso</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Cambio de fecha de viaje</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Tiempos de espera</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Penalidades por anulación</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 9 artículos</a></li>
                    </ul>
                </div>
                <div className="category-card p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary category-icon transition-transform">
                            <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                        </div>
                        <h2 className="text-xl font-bold">Soporte Técnico</h2>
                    </div>
                    <ul className="space-y-4">
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Problemas con la App</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Error en la página web</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Reportar un bug</a></li>
                        <li><a className="text-[#637f88] dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-2" href="#"><span className="material-symbols-outlined text-xs">article</span> Navegadores compatibles</a></li>
                        <li><a className="text-primary text-sm font-semibold hover:underline" href="#">Ver los 5 artículos</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscabas?</h3>
                <p className="text-[#637f88] dark:text-gray-400 mb-8 max-w-xl mx-auto">Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier duda sobre tus viajes por Venezuela.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-10 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">chat</span>
                        Chatear ahora
                    </button>
                    <button className="w-full sm:w-auto bg-white dark:bg-gray-800 text-[#111618] dark:text-white border border-gray-200 dark:border-gray-700 font-bold py-4 px-10 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">mail</span>
                        Enviar un ticket
                    </button>
                </div>
            </div>
        </main>
    );
}

