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
