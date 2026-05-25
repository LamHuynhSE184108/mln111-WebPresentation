"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { User, Globe, Cloud, Camera, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const theories = [
    {
        title: "Chủ nghĩa duy tâm chủ quan",
        description: "Cái gì tôi cảm nhận được mới tồn tại. Mọi sự vật chỉ là sự phức hợp của các cảm giác cá nhân.",
        example: "Ví dụ: 'Quả xoài' chỉ tồn tại khi tôi nếm vị ngọt, thấy màu vàng và ngửi thấy mùi thơm của nó.",
        icon: <User className="w-12 h-12" />,
        color: "from-blue-600/20 to-blue-400/20",
        image: "/backgrounds/chủ nghĩa duy tâm chủ quan.png",
    },
    {
        title: "Chủ nghĩa duy tâm khách quan",
        description: "Chân lý tồn tại ngoài ý chí con người, thuộc về một lực lượng siêu nhiên hoặc ý niệm tuyệt đối.",
        example: "Ví dụ: 'Thế giới ý niệm' của Platôn - những gì chúng ta thấy chỉ là cái bóng của chân lý hoàn hảo.",
        icon: <Globe className="w-12 h-12" />,
        color: "from-indigo-600/20 to-indigo-400/20",
        image: "/backgrounds/chủ nghĩa duy tâm khách quang.png",
    },
    {
        title: "Thuyết không thể biết (Agnoticism)",
        description: "Con người có giới hạn trong nhận thức. Chúng ta chỉ biết được vẻ bề ngoài, không bao giờ chạm đến bản chất thật sự.",
        example: "Ví dụ: 'Vật tự nó' (Thing-in-itself) của Kant - ranh giới mờ mịt giữa hiện tượng và bản chất.",
        icon: <Cloud className="w-12 h-12" />,
        color: "from-purple-600/20 to-purple-400/20",
        image: "/backgrounds/thuyết không thể biết.png",
    },
    {
        title: "Chủ nghĩa duy vật trước Mác",
        description: "Thế giới là vật chất, nhưng con người chỉ như một chiếc máy ảnh: phản ánh thụ động, máy móc.",
        example: "Ví dụ: Nhìn cái cây và ghi nhận nó như một tấm gương, thiếu sự tác động cải tạo thế giới.",
        icon: <Camera className="w-12 h-12" />,
        color: "from-emerald-600/20 to-emerald-400/20",
        image: "/backgrounds/hủ nghĩa duy vật trước Mác.png",
    },
    {
        title: "Triết học Mác - Lênin",
        description: "Nhận thức là một quá trình năng động, biện chứng. Chân lý không đứng yên mà được kiểm chứng qua thực tiễn.",
        example: "Ví dụ: Hoạt động thực tiễn là thước đo duy nhất để khẳng định điều gì là chân lý.",
        icon: <Zap className="w-12 h-12" />,
        color: "from-red-600/20 to-red-400/20",
        image: "/backgrounds/Triết học Mác - Lênin.png",
    },
];

export default function TheorySection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} id="theory" className="relative h-[400vh] bg-neutral-900/50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-20">
                    <div className="flex flex-col justify-center min-w-[400px]">
                        <h2 className="text-5xl font-bold text-white mb-4">Các Trường Phái Triết Học</h2>
                        <p className="text-xl text-neutral-400">Cuộn để khám phá hành trình của nhận thức</p>
                    </div>
                    {theories.map((theory, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -20, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={cn(
                                "relative group flex-shrink-0 w-[450px] h-[580px] rounded-[48px] p-12 overflow-hidden",
                                "glass-card transition-all duration-500",
                                "bg-gradient-to-br",
                                theory.color
                            )}
                        >
                            {/* Background Image */}
                            {theory.image && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `url('${theory.image}')`,
                                        mixBlendMode: "screen",
                                    }}
                                />
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8 p-6 rounded-[32px] bg-white/5 w-fit group-hover:bg-blue-500/20 transition-all duration-500 group-hover:rotate-12">
                                    {theory.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {theory.title}
                                </h3>
                                <p className="text-[17px] text-neutral-400 mb-8 leading-relaxed font-light">
                                    {theory.description}
                                </p>
                                <div className="mt-auto p-6 rounded-[28px] bg-black/40 border border-white/5 italic text-blue-300/80 text-sm backdrop-blur-md">
                                    {theory.example}
                                </div>
                            </div>

                            {/* Dynamic background accent */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-all duration-1000" />
                        </motion.div>
                    ))}

                    <div className="min-w-[400px] flex items-center">
                        <p className="text-2xl font-light italic text-neutral-500">Tiếp theo: Tính chất của Chân lý →</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
