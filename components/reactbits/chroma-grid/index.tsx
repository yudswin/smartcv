"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";


export interface ChromaItem {
    image: string | React.ReactNode;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}

export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
    title?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = "",
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = "power3.out",
    title = "Title"
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const data = items || [];

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
        setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true,
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true,
        });
    };

    const handleCardClick = (url?: string) => {
        if (url) window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative pb-10 w-full h-full flex flex-col it justify-start gap-3 ${className}`}
            style={
                {
                    "--r": `${radius}px`,
                    "--x": "50%",
                    "--y": "50%",
                } as React.CSSProperties
            }
        >
            {title && (
                <h2 className="text-2xl my-12 sm:text-3xl font-bold text-center">
                    {title}
                </h2>
            )}
            <div className="grid px-4 sm:grid-cols-2 align-middle mx-auto gap-8">
                {data.map((c, i) => (
                    <motion.article
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        key={i}
                        onMouseMove={handleCardMove}
                        onClick={() => handleCardClick(c.url)}
                        className={`group relative flex flex-col p-2 sm:p-3 w-full sm:w-[400px] rounded-lg overflow-hidden items-start transition-colors duration-300`}
                        style={
                            {
                                background: c.borderColor,
                            } as React.CSSProperties
                        }
                    >
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                            style={{
                                background:
                                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                            }}
                        />
                        <div className="relative z-10 flex-1 p-[10px] flex items-center min-h-20 justify-center">
                            {typeof c.image === "string" ? (
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    loading="lazy"
                                    className="w-12 h-auto object-contain rounded-lg"
                                />
                            ) : (
                                c.image
                            )}
                        </div>
                        <footer className="relative z-10 p-3 text-white">
                            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
                            {c.handle && (
                                <span className="text-[0.95rem] opacity-80 text-right">
                                    {c.handle}
                                </span>
                            )}
                            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
                            {c.location && (
                                <span className="text-[0.85rem] opacity-85 text-right">
                                    {c.location}
                                </span>
                            )}
                        </footer>
                    </motion.article>
                ))}
            </div>
            <div
                className="sm:absolute inset-0 pointer-events-none z-30"
                style={{
                    backdropFilter: "grayscale(1) brightness(1)",
                    WebkitBackdropFilter: "grayscale(1) brightness(1)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
                }}
            />
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
                style={{
                    backdropFilter: "grayscale(1) brightness(1)",
                    WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
                    background: "rgba(0,0,0,0.001)",
                    maskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
                    opacity: 1,
                }}
            />
        </div>
    );
};

export default ChromaGrid;
