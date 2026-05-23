"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, ArrowUp } from "lucide-react";

export default function ConclusionSection() {
    return (
        <section id="conclusion" className="min-h-screen py-24 flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/backgrounds/Conclusion.png')] bg-cover bg-center opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background" />
            </div>

            <div className="max-w-4xl w-full text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Lời kết</span>
                <h2 className="text-5xl md:text-[clamp(4rem,8vw,6rem)] font-black text-white mb-8 tracking-tighter leading-[0.9]">
                    Chân Lý Là <br />
                    <span className="text-gradient">Ngọn Hải Đăng</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-10 rounded-[48px]"
                >
                    <p className="text-lg text-neutral-300 leading-relaxed font-light">
                        Trong một xã hội bất định, việc xác định chân lý không chỉ là một nhu cầu trí tuệ, mà là một đạo đức sống để bảo vệ phẩm giá con người trước những làn sóng giả tạo.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-card p-10 rounded-[48px] border-blue-500/20 shadow-blue-500/5 shadow-2xl"
                >
                    <p className="text-lg text-white font-medium leading-relaxed italic">
                        {"\"Chân lý không bao giờ thuộc về số đông, chân lý thuộc về những ai dám đối diện với thực tiễn khắt khe.\""}
                    </p>
                </motion.div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex flex-col items-center gap-4 mx-auto"
            >
                <div className="p-8 rounded-[32px] bg-blue-600 group-hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/40 relative overflow-hidden">
                    <ArrowUp className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 group-hover:text-blue-400 transition-colors">Về Trang Chủ</span>
            </motion.button>
        </div>

    {/* Background elements */ }
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[150px] -z-20" />
        </section >
    );

}
