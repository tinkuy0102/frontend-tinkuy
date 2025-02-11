// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Sal de Maricunga Tinkuy Kachi Kawsay</title>
        <meta
          name="description"
          content="Proyecto de sal premium: equilibrio entre el desarrollo económico y la conservación ambiental en el Salar de Maricunga."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-primary text-white font-sans min-h-screen">
        <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
            <div className="flex items-center space-x-6">
              <Image
                src="/images/logo.jpg"
                alt="Sal de Maricunga Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-serif text-gold">Sal de Maricunga</div>
                <div className="text-sm md:text-base text-gold-light">Tinkuy Kachi Kawsay</div>
              </div>
            </div>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6 md:space-x-10">
                <li>
                  <Link href="/" className="text-base md:text-lg text-gray-light hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nosotros" className="text-base md:text-lg text-gray-light hover:text-gold transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-base md:text-lg text-gray-light hover:text-gold transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-black py-8 mt-auto">
          <div className="container mx-auto px-4">
            <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
            <div className="text-center">
              <p className="text-gray-light mb-2">Contacto: tinkuyspa@gmail.com</p>
              <p className="text-gray-light">
                © {new Date().getFullYear()} Sal de Maricunga Tinkuy Kachi Kawsay.
                <span className="block sm:inline"> Todos los derechos reservados.</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
