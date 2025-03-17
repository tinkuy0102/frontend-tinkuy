'use client';  // Add this at the top since we're using client-side features

// app/page.tsx
import { motion } from "framer-motion";
import Image from 'next/image';

export default function HomePage() {
    // Animation variants for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Parallax scroll effect for text
    const parallaxY = {
        initial: { y: 0 },
        animate: {
            y: [-20, 20],
            transition: {
                repeat: Infinity,
                repeatType: "reverse" as const,
                duration: 2
            }
        }
    };

    return (
        <div className="flex flex-col bg-primary min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        src="/images/salar-2.jpg"
                        alt="Salar generico"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                    <div className="w-20 h-1 bg-gold mb-8" />
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-center text-white mb-6">
                        Sal de Maricunga
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-light font-light text-center max-w-2xl">
                        La Sal Premium del Salar - Tinkuy Kachi Kawsay
                    </p>
                    <p className="text-lg text-gold mt-4 text-center max-w-xl">
                        La sal más completa en minerales del mercado, extraída artesanalmente del Salar de Maricunga
                    </p>
                    <div className="w-20 h-1 bg-gold mt-8" />
                    <motion.div
                        variants={parallaxY}
                        initial="initial"
                        animate="animate"
                        className="absolute bottom-10"
                    >
                        <div className="text-white text-2xl">↓</div>
                    </motion.div>
                </div>
            </section>

            {/* Product Section */}
            <section className="py-24 px-4 bg-primary overflow-hidden">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold">Nuestra Sal Premium</h2>
                        <p className="text-lg leading-relaxed text-gray-light">
                            Del majestuoso Salar de Maricunga, a 3750 metros sobre el nivel del mar,
                            extraemos artesanalmente nuestra sal premium, enriquecida naturalmente con
                            diversos minerales beneficiosos para su organismo. En colaboración con la comunidad Colla Pai-Ote,
                            preservamos la esencia y energías ancestrales de este lugar sagrado en cada grano de sal. Cada cristal contiene
                            minerales esenciales para la salud como magnesio, calcio, hierro, potasio, sodio, yodo, zinc, cobalto, manganeso y cobre,
                            en su forma más pura y natural.
                        </p>
                        <ul className="text-gray-light space-y-2">
                            <li>✓ Rica en minerales naturales</li>
                            <li>✓ Extracción artesanal sustentable</li>
                            <li>✓ Producto premium certificado</li>
                            <li>✓ Sabor único del Salar de Maricunga</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative h-[400px]">
                        <Image
                            src="/images/sal.jpg"
                            alt="Sal Premium de Maricunga"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-primary overflow-hidden">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold">Beneficios de la Sal de Maricunga Tinkuy</h2>
                        <p className="text-lg leading-relaxed text-gray-light max-w-3xl mx-auto mt-4">
                            Extraída artesanalmente del Salar de Maricunga, a 3.750 msnm, esta sal es una alternativa
                            exclusiva y sustentable que aporta diversos beneficios gracias a su composición mineral única.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-primary-dark p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-medium text-gold mb-4">✅ Aporte de minerales esenciales</h3>
                                <p className="text-gray-light mb-4">
                                    Nuestra sal es rica en minerales clave para el organismo, brindando beneficios para la salud:
                                </p>
                                <ul className="text-gray-light space-y-2 pl-4">
                                    <li>• Calcio: Favorece la salud ósea y la transmisión nerviosa</li>
                                    <li>• Potasio: Regula el equilibrio hídrico y la presión arterial</li>
                                    <li>• Magnesio: Participa en más de 300 procesos metabólicos</li>
                                    <li>• Hierro: Esencial para el transporte de oxígeno</li>
                                    <li>• Manganeso: Actúa como cofactor enzimático</li>
                                    <li>• Yodo: Fundamental para las hormonas tiroideas</li>
                                </ul>
                            </div>
                            <div className="mt-4 flex justify-center text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-primary-dark p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-medium text-gold mb-4">✅ Menor contenido de sodio</h3>
                                <p className="text-gray-light">
                                    A diferencia de la sal común, la sal Tinkuy tiene un contenido reducido de sodio, lo que la convierte en una
                                    opción ideal para quienes buscan moderar su consumo, como personas con hipertensión arterial.
                                    Este menor contenido de sodio ofrece beneficios adicionales para la salud cardiovascular.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-primary-dark p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl font-medium text-gold mb-4">✅ Sustentabilidad y origen artesanal</h3>
                                <p className="text-gray-light">
                                    Extraída de manera responsable y en colaboración con la comunidad Colla Pai-Ote, nuestra sal
                                    no solo es un producto natural y sin aditivos, sino que también contribuye al desarrollo local
                                    y a la preservación de técnicas tradicionales, generando beneficios tanto para la comunidad como para el medio ambiente.
                                </p>
                            </div>
                            <div className="mt-4 flex justify-center text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Historia Section */}
            <section className="py-24 px-4 bg-primary overflow-hidden">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="relative h-[400px]">
                        <Image
                            src="/images/ritual.jpg"
                            alt="Ritual ancestral en el Salar"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold">Historia del Salar</h2>
                        <p className="text-lg leading-relaxed text-gray-light">
                            El Salar de Maricunga se encuentra a 3750 metros sobre el nivel del mar,
                            ubicado junto al paso fronterizo San Francisco, a 160 kilómetros al noreste de Copiapó,
                            en la Región de Atacama de Chile. Esta área está habitada por el ancestral comunidad colla Pai-Ote,
                            quienes a través de su cultura han convertido al salar en un área mágica con energías especiales.
                            El salar se origina hace miles de años a través de una evaporación de aguas subterráneas que formaron una
                            extensa planicie salina, fenómeno que ocurre por las bajas precipitaciones y la alta tasa de evaporación.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Desafíos Section */}
            <section className="py-24 px-4 golden-gradient relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="space-y-6 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold">Biodiversidad y Desafíos</h2>
                        <p className="text-lg leading-relaxed text-gray-light">
                            A pesar de su clima árido, el salar alberga una rica biodiversidad, incluyendo flamencos andinos,
                            zorros y diversas especies de plantas endémicas. El salar juega un rol vital en el equilibrio
                            ecológico de la región, nutriéndose de fuentes subterráneas que alimentan ecosistemas locales y
                            comunidades cercanas. Sin embargo, enfrenta desafíos debido a la posible explotación de litio,
                            que plantea riesgos para el medio ambiente y las aguas subterráneas.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative h-[400px] order-1 md:order-2">
                        <Image
                            src="/images/flamencos.jpg"
                            alt="Flamencos en el Salar"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Compromiso Section */}
            <section className="bg-primary py-24 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
                >
                    <motion.div variants={itemVariants} className="relative h-[400px]">
                        <Image
                            src="/images/huanaco.jpg"
                            alt="Huanaco en el Salar"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative h-[400px]">
                        <Image
                            src="/images/salar.jpg"
                            alt="Vista del Salar"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
