"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, Compass } from "lucide-react";

const natureItems = [
    {
        title: "Tính Khách Quan",
        description: "Chân lý không phụ thuộc vào mong muốn hay sở thích cá nhân. Sự thật vẫn là sự thật dù cả thế giới có chối bỏ.",
        icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
        delay: 0.1,
    },
    {
        title: "Tuyệt Đối & Tương Đối",
        description: "Mọi chân lý đều tương đối trong phạm vi nhất định, nhưng đồng thời là một phần của chân lý tuyệt đối mà nhân loại đang tiến gần đến.",
        icon: <Scale className="w-10 h-10 text-purple-400" />,
        delay: 0.2,
    },
    {
        title: "Tính Cụ Thể",
        description: "Không có chân lý trừu tượng. Chân lý luôn gắn liền với điều kiện, hoàn cảnh và thời gian cụ thể.",
        icon: <Compass className="w-10 h-10 text-emerald-400" />,
        delay: 0.3,
    },
];

export default function NatureSection() {
    return (
        <section id="nature" className="min-h-screen flex items-center justify-center py-20 px-10 relative overflow-hidden">
            <div className="max-w-7xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tính Chất Của Chân Lý</h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Hiểu rõ bản chất của sự thật để giữ vững lập trường trong một thế giới đầy biến động.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {natureItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="p-10 rounded-[40px] glass-card flex flex-col items-center text-center group"
                        >
                            <div className="mb-8 p-6 rounded-3xl bg-white/5 group-hover:bg-blue-500/10 transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed font-light">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
