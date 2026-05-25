"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, CheckCircle2, TrendingDown, EyeOff, Lightbulb } from "lucide-react";

export default function ApplicationSection() {
    return (
        <section id="application" className="min-h-screen py-24 px-6 md:px-20 bg-background relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/backgrounds/Application.png')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Thực tiễn</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Đối Diện Với Thực Tế</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {/* Card 1: Crowd */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[40px] glass-card p-10 flex flex-col"
                    >
                        <div className="flex items-center gap-5 mb-8 text-rose-400">
                            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Số đông & Tin đồn</h3>
                        </div>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                            Áp lực từ đám đông khiến chúng ta dễ dàng chấp nhận những điều chưa qua kiểm chứng. Trào lưu mạng xã hội thường bị nhầm lẫn với sự thật.
                        </p>
                        <div className="mt-auto flex items-start gap-4 p-5 rounded-[24px] bg-rose-500/5 border border-rose-500/10">
                            <TrendingDown className="w-5 h-5 text-rose-500 mt-1" />
                            <p className="text-sm italic text-rose-300/80 font-playfair">"Nhiều người nói vậy thì chắc là đúng..." - Cái bẫy của tâm lý đám đông.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Interest */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden rounded-[40px] glass-card p-10 flex flex-col"
                    >
                        <div className="flex items-center gap-5 mb-8 text-amber-400">
                            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Lợi ích</h3>
                        </div>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
                            Chân lý thường bị bóp méo để phục vụ lợi nhuận. Che giấu sự thật về tác hại của sản phẩm để đạt mục tiêu ngắn hạn.
                        </p>
                        <div className="mt-auto flex items-start gap-4 p-5 rounded-[24px] bg-amber-500/5 border border-amber-500/10">
                            <EyeOff className="w-5 h-5 text-amber-500 mt-1" />
                            <p className="text-sm italic text-amber-300/80 font-playfair">Lợi ích che mờ mắt, khiến con người tự huyễn hoặc chính mình.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Truth */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative overflow-hidden rounded-[40px] p-10 flex flex-col bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                    >
                        <div className="flex items-center gap-5 mb-8 text-blue-400">
                            <div className="p-4 rounded-2xl bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">Chân lý</h3>
                        </div>
                        <p className="text-blue-100/90 text-lg mb-8 leading-relaxed font-normal">
                            Chân lý không dễ dàng đạt được. Nó đi qua lửa đỏ của thực tiễn, được kiểm chứng bất chấp mọi áp lực bên ngoài.
                        </p>
                        <div className="mt-auto flex items-start gap-4 p-6 rounded-[24px] bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                            <Lightbulb className="w-6 h-6 text-blue-300 mt-1 animate-pulse" />
                            <p className="text-sm italic text-blue-50 font-medium font-playfair">Chân lý là kết quả của quá trình lao động và tư duy nghiêm túc.</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
