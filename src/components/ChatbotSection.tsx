"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Bot, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    role: "user" | "bot";
    text: string;
};

const initialMessages: Message[] = [
    { role: "bot", text: "Xin chào! Tôi là AI mô phỏng triết học. Bạn đang băn khoăn điều gì về việc xác định chân lý?" },
];

const mockResponses: Record<string, string> = {
    "đám đông": "Chân lý không phải là cuộc bỏ phiếu dân chủ. Dù triệu người tin vào một tin giả, nó vẫn không thể trở thành chân lý.",
    "thực tiễn": "Theo Mác, thực tiễn là tiêu chuẩn khách quan duy nhất để kiểm tra chân lý. Bạn phải hành động để biết mình đúng hay sai.",
    "lợi ích": "Lợi ích có thể là động lực để tìm kiếm chân lý, nhưng cũng có thể là rào cản khiến chúng ta bóp méo nó. Hãy tỉnh táo!",
    "chân lý là gì": "Chân lý là những tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm.",
};

export default function ChatbotSection() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if (!input.trim()) return;

        const currentInput = input;

        const userMessage: Message = {
            role: "user",
            text: currentInput,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: currentInput,
                }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: data.reply,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Xin lỗi, AI đang lỗi.",
                },
            ]);
        }
    };

    return (
        <section id="chatbot" className="min-h-screen py-24 flex items-center justify-center px-6 bg-background relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl w-full glass-card rounded-[48px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[750px]">
                {/* Sidebar Info */}
                <div className="w-full md:w-72 bg-white/5 border-r border-white/5 p-8 flex flex-col hidden md:flex">
                    <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-8">Trợ lý triết học</h4>
                    <div className="space-y-6">
                        <div>
                            <p className="text-white font-medium mb-1">Thực tiễn</p>
                            <p className="text-xs text-neutral-500">Tìm hiểu vai trò của thực tiễn trong nhận thức.</p>
                        </div>
                        <div>
                            <p className="text-white font-medium mb-1">Đám đông</p>
                            <p className="text-xs text-neutral-500">Phân tích sai lầm của tâm lý đám đông.</p>
                        </div>
                        <div>
                            <p className="text-white font-medium mb-1">Lợi ích</p>
                            <p className="text-xs text-neutral-500">Nhận diện cách lợi ích bóp méo chân lý.</p>
                        </div>
                    </div>
                    <div className="mt-auto pt-8 border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs text-neutral-400">Hệ thống đang chạy</span>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-black/20">
                    {/* Header */}
                    <div className="p-8 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
                                <Bot className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Đối thoại Chân lý</h3>
                                <p className="text-xs text-neutral-500 uppercase tracking-tighter">AI Phục vụ Nghiên cứu</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
                        <AnimatePresence>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className={cn(
                                        "flex gap-4 max-w-[85%]",
                                        m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg",
                                        m.role === "user" ? "bg-purple-600 shadow-purple-500/20" : "bg-neutral-800"
                                    )}>
                                        {m.role === "user" ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-blue-400" />}
                                    </div>
                                    <div className={cn(
                                        "p-5 rounded-[24px] text-[15px] leading-relaxed",
                                        m.role === "user"
                                            ? "bg-purple-600/10 border border-purple-500/20 text-white"
                                            : "bg-white/5 border border-white/5 text-neutral-300"
                                    )}>
                                        {m.text}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Input */}
                    <div className="p-8">
                        <div className="relative flex items-center gap-4 bg-white/5 rounded-[24px] p-2 border border-white/5 focus-within:border-blue-500/30 transition-all">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Gõ câu hỏi của bạn tại đây..."
                                className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-neutral-600 focus:outline-none"
                            />
                            <button
                                onClick={handleSend}
                                className="p-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
