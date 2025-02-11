'use client';

import { motion } from "framer-motion";

export default function ContactPage() {
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
        <div className="flex flex-col bg-primary min-h-screen pt-16 md:pt-24">
            <section className="py-12 md:py-20 px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl md:text-6xl font-serif text-gold text-center mb-4 md:mb-6">
                            Contacto
                        </h1>
                        <div className="w-16 md:w-20 h-1 bg-gold mx-auto mb-8 md:mb-12" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
                        {/* Información de Contacto */}
                        <motion.div variants={itemVariants} className="space-y-6 text-gray-light">
                            <h2 className="text-2xl font-serif text-gold mb-6">
                                Información de Contacto
                            </h2>
                            <div className="space-y-4">
                                <p className="flex items-center space-x-3">
                                    <span className="text-gold">Email:</span>
                                    <span>tinkuyspa@gmail.com</span>
                                </p>
                                <p className="flex items-center space-x-3">
                                    <span className="text-gold">Ubicación:</span>
                                    <span>Salar de Maricunga, Región de Atacama, Chile</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Formulario de Contacto */}
                        <motion.form variants={itemVariants} className="space-y-6">
                            <div>
                                <label className="block text-gray-light mb-2">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-gold/30 rounded p-3 text-white focus:border-gold outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-light mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-gold/30 rounded p-3 text-white focus:border-gold outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-light mb-2">Mensaje</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-gold/30 rounded p-3 text-white focus:border-gold outline-none transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gold hover:bg-gold/80 text-black font-semibold py-3 px-6 rounded transition-colors"
                            >
                                Enviar Mensaje
                            </button>
                        </motion.form>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}