import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/Home/page.tsx"),
	route("resultados", "routes/Trip/resultados.tsx"),
	route("viaje", "routes/Trip/viaje-detalle.tsx"),
	route("consultar-viaje", "routes/consultar.tsx"),
	route("pasajeros", "routes/Checkout/pasajeros.tsx"),
	route("pagar", "routes/Checkout/checkout.tsx"),
	route("exito", "routes/Checkout/exito.tsx"),
	route("iniciar-sesion", "routes/Auth/login.tsx"),
	route("registrarse", "routes/Auth/registro.tsx"),
	route("promociones", "routes/Promociones/page.tsx"),
	route("ayuda", "routes/ayuda.tsx"),
	route("ayuda2", "routes/ayuda2.tsx"),
] satisfies RouteConfig;
