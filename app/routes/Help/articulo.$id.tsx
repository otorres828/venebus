import { useParams, Link, type MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => [
    { title: `VeneBus | Artículo de Ayuda` },
    { name: "description", content: `Detalle del artículo de ayuda: ${params.id}` },
];

const articles: Record<string, { title: string; content: string }> = {
    "pago-movil": {
        title: "¿Cómo realizar un Pago Móvil correctamente?",
        content: "Aquí va el contenido completo y detallado para realizar un Pago Móvil correctamente. (Dummy)",
    },
    "pagos-internacionales": {
        title: "Métodos de pago internacionales (Zelle y Tarjetas)",
        content: "Aquí va el contenido completo sobre métodos de pago internacionales. (Dummy)",
    },
    "pago-pendiente": {
        title: "¿Por qué mi pago aparece como 'Pendiente'?",
        content: "Aquí va la explicación sobre pagos pendientes y qué hacer. (Dummy)",
    },
    "pagos-taquilla": {
        title: "Pagos en Taquilla y Terminales",
        content: "Aquí va la guía para pagos en taquilla y terminales. (Dummy)",
    },
    "facturacion": {
        title: "Facturación y Recibos Digitales",
        content: "Aquí va la información sobre facturación y recibos digitales. (Dummy)",
    },
};

export default function ArticuloDetalle() {
    const { id } = useParams() as { id: string };
    const article = articles[id] || {
        title: "Artículo no encontrado",
        content: "El artículo solicitado no existe.",
    };

    return (
        <main className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="mb-10">
                <nav className="flex items-center gap-2 text-sm text-[#637f88] dark:text-gray-400 mb-8">
                    <Link to="/" className="hover:text-primary">Inicio</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link to="/ayuda" className="hover:text-primary" >Centro de Ayuda</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="hover:text-primary">Pago Movil</span>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="font-semibold text-primary">{article.title}</span>
                </nav>
                <h1 className="text-[#111618] dark:text-white text-3xl font-extrabold mb-4">{article.title}</h1>
                <article className="prose dark:prose-invert max-w-none">
                    <p>{article.content}</p>
                </article>
                
            </div>
        </main>
    );
}
