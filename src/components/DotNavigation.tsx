"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
    { id: "hero", label: "Trang chủ" },
    { id: "theory", label: "Trường phái" },
    { id: "nature", label: "Tính chất" },
    { id: "application", label: "Thực tiễn" },
    { id: "chatbot", label: "Hỏi đáp" },
    { id: "conclusion", label: "Kết luận" },
];

export default function DotNavigation() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px", // Detect when section is in the middle of the viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group relative flex items-center justify-end"
                >
                    <span className={cn(
                        "absolute right-10 px-3 py-1 rounded bg-white/5 border border-white/10 text-white text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap opacity-0 transition-all duration-300 transform translate-x-4",
                        "group-hover:opacity-100 group-hover:translate-x-0"
                    )}>
                        {section.label}
                    </span>
                    <div className={cn(
                        "w-2 h-2 rounded-full border-2 transition-all duration-500",
                        activeSection === section.id
                            ? "bg-blue-500 border-blue-500 scale-150 rotate-45"
                            : "bg-transparent border-white/20 group-hover:border-white/50"
                    )} />
                </a>
            ))}
        </div>
    );

}
