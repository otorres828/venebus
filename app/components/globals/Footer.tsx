
function Footer() {
    return (
        <footer className="bg-white dark:bg-[#1a1f23] border-t border-[#f0f3f4] dark:border-[#2d3439] pt-16 pb-8 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-cyan-500 p-1 rounded-lg text-white">
                                <svg className="size-5" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#111618] dark:text-white text-xl font-heading font-bold tracking-tight">VeneBus</h2>
                        </div>
                        <p className="text-[#637f88] dark:text-gray-400 max-w-xs mb-6">
                            Conectando a Venezuela un viaje a la vez. La plataforma líder en reserva de pasajes terrestres.
                        </p>
                        <div className="flex gap-4">
                            <div className="size-10 bg-[#f8fafb] dark:bg-[#252b30] rounded-full flex items-center justify-center text-primary cursor-pointer hover:bg-cyan-500 hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </div>
                            <div className="size-10 bg-[#f8fafb] dark:bg-[#252b30] rounded-full flex items-center justify-center text-primary cursor-pointer hover:bg-cyan-500 hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">public</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold dark:text-white mb-6">Compañía</h4>
                        <ul className="space-y-4 text-sm text-[#637f88] dark:text-gray-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Sobre Nosotros</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Carreras</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Prensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold dark:text-white mb-6">Soporte</h4>
                        <ul className="space-y-4 text-sm text-[#637f88] dark:text-gray-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Centro de Ayuda</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Términos de Uso</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Privacidad</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold dark:text-white mb-6">Aliados</h4>
                        <ul className="space-y-4 text-sm text-[#637f88] dark:text-gray-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Líneas de Bus</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Afiliados</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">API para Agencias</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#f0f3f4] dark:border-[#2d3439] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#637f88] dark:text-gray-400">© 2024 VeneBus. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded" data-alt="Payment method logo 1"></div>
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded" data-alt="Payment method logo 2"></div>
                        <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded" data-alt="Payment method logo 3"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
