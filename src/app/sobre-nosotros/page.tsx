'use client';

import { motion } from "framer-motion";
import Image from 'next/image';

export default function AboutPage() {
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

    return (
        <div className="flex flex-col bg-primary min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh]">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <Image
                        src="/images/equipo-ritual-2.jpg"
                        alt="Ritual ancestral en el Salar"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                    <div className="w-16 md:w-20 h-1 bg-gold mb-6 md:mb-8" />
                    <h1 className="text-3xl md:text-6xl font-serif font-bold text-center text-white mb-4 md:mb-6">
                        Sobre Nosotros
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-light font-light text-center max-w-2xl">
                        Tradición, Sustentabilidad y Compromiso
                    </p>
                    <div className="w-16 md:w-20 h-1 bg-gold mt-6 md:mt-8" />
                </div>
            </section>

            {/* Historia Section */}
            <section className="py-16 md:py-24 px-4 golden-gradient">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-gold">Nuestra Historia</h2>
                        <p className="text-lg leading-relaxed text-gray-light">
                            Desde generaciones, el pueblo Colla ha habitado estas tierras sagradas,
                            manteniendo viva la tradición de la extracción artesanal de sal.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-light">
                            Nuestra empresa nace del profundo respeto por estas tradiciones y
                            el compromiso de preservar la riqueza natural del Salar de Maricunga.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative h-[400px]">
                        <Image
                            src="/images/equipo-ritual.jpg"
                            alt="Ritual ancestral de la comunidad"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* New Equipo Section */}
            <section className="py-24 px-4 bg-primary">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-gold text-center mb-16">
                        Nuestro Equipo
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="relative h-[500px]">
                            <Image
                                src="/images/equipo-trabajando.jpg"
                                alt="Equipo trabajando en el salar"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </motion.div>
                        <div className="grid md:grid-row-2 gap-6 items-center">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <h3 className="text-2xl font-serif text-gold">Trabajo Artesanal</h3>
                                <p className="text-lg leading-relaxed text-gray-light">
                                    Nuestro equipo, formado por miembros de la comunidad Colla Pai-Ote,
                                    combina conocimientos ancestrales con prácticas sustentables para
                                    extraer la mejor sal del Salar de Maricunga.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-light">
                                    Cada miembro de nuestro equipo está comprometido con la preservación
                                    de las tradiciones y la calidad premium de nuestro producto.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-6">
                                <h3 className="text-2xl font-serif text-gold">Comunidad Pai-Ote</h3>
                                <p className="text-lg leading-relaxed text-gray-light">
                                    La quebrada de Paipote alberga distintas comunidades Colla, pero es la
                                    comunidad Pai-Ote la única que lleva a cabo el noble arte del pastoreo
                                    en el Salar de Maricunga. Como guardianes ancestrales de la tierra,
                                    realizan la trashumancia y ceremonias sagradas que mantienen el
                                    equilibrio del entorno.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-light">
                                    Durante generaciones, los Pai-Ote han sido los custodios del Salar,
                                    tejiendo una relación profunda y respetuosa con la naturaleza. Su
                                    sabiduría ancestral, transmitida de abuelos a nietos, les ha permitido
                                    mantener un equilibrio delicado entre el cuidado de los recursos y la
                                    preservación del ecosistema.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Valores Section */}
            <section className="py-24 px-4 bg-primary">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-gold text-center mb-16">
                        Nuestros Valores
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                                <span className="text-3xl text-gold">🌱</span>
                            </div>
                            <h3 className="text-xl font-serif text-gold">Sustentabilidad</h3>
                            <p className="text-gray-light">Compromiso con la preservación del ecosistema único del Salar</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                                <span className="text-3xl text-gold">🤝</span>
                            </div>
                            <h3 className="text-xl font-serif text-gold">Comunidad</h3>
                            <p className="text-gray-light">Trabajo conjunto con la comunidad Colla Pai-Ote</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center space-y-4">
                            <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center">
                                <span className="text-3xl text-gold">✨</span>
                            </div>
                            <h3 className="text-xl font-serif text-gold">Calidad Premium</h3>
                            <p className="text-gray-light">Excelencia en cada grano de nuestra sal artesanal</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}