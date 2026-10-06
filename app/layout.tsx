import type { Metadata } from 'next';
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/600.css';
import './globals.css';
export const metadata: Metadata = {title:'Ábaco | Laboratorio de gestión',description:'Explora un negocio. Prueba una decisión. Entiende su impacto. Demo educativa interactiva con datos ficticios.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
