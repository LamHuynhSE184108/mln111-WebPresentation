"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <section ref={containerRef} id="hero" className="relative h-[110vh] flex items-center overflow-hidden bg-background">
            {/* Background Elements */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/backgrounds/Hero_section.png')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />

                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </motion.div>

            <div className="container mx-auto px-8 md:px-20 relative z-10 w-full">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-12 xl:col-span-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                            Phát triển tư duy nhận thức
                        </div>
                        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter mb-12">
                            <span className="block text-white">Xác Định</span>
                            <span className="text-gradient">Chân Lý</span>
                            <span className="block text-white/20 mt-4 text-[0.4em]">Trong Xã Hội Bất Định</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed font-light">
                            Vượt qua áp lực từ <span className="text-white font-medium italic underline decoration-blue-500/30 underline-offset-8">đám đông</span> và <span className="text-white font-medium italic underline decoration-purple-500/30 underline-offset-8">lợi ích</span> để tìm về sự thật khách quan.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="lg:col-span-12 xl:col-span-4"
                    >
                        <div className="relative p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[40px] blur-xl" />
                            <div className="relative glass-card p-10 rounded-[36px] overflow-hidden group">
                                <Quote className="w-12 h-12 text-blue-500/20 mb-8 group-hover:text-blue-500/40 transition-colors duration-500" />
                                <p className="text-2xl font-light text-neutral-300 leading-relaxed relative z-10 tracking-tight">
                                    {"\"Khi cái ác được chia sẻ ngàn lần, liệu nó có trở thành thiện? Khi tin giả được triệu người tin, liệu nó có thành chân lý?\""}
                                </p>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-16 -mb-16 blur-2xl" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />
            </motion.div>
        </section>
    );
}


