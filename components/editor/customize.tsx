import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../shadcn/card";
import { setFont, setTheme, setLayout } from "@/lib/themeSlice";
import type { RootState } from "@/lib/store";
import { FONT_OPTIONS } from "@/constants/fonts";
import { THEME_OPTIONS, LAYOUT_OPTIONS } from "@/constants/themes";
import { motion } from "framer-motion";


export default function Customize() {
    const dispatch = useDispatch();
    const font = useSelector((state: RootState) => state.theme.font);
    const theme = useSelector((state: RootState) => state.theme.theme);
    const layout = useSelector((state: RootState) => state.theme.layout);
    const scrollRef = useRef<HTMLDivElement>(null);
    const themeScrollRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [themeIsDown, setThemeIsDown] = useState(false);
    const [themeStartX, setThemeStartX] = useState(0);
    const [themeScrollLeft, setThemeScrollLeft] = useState(0);

    // Dynamically load local font files for preview (regular and bold)
    useEffect(() => {
        const selected = FONT_OPTIONS.find(f => f.value === font);
        if (!selected) return;
        const styleId = `font-face-${selected.value}`;
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = `
                @font-face {
                    font-family: '${selected.label}';
                    src: url('${selected.files.regular}') format('truetype');
                    font-weight: 400;
                    font-style: normal;
                }
                @font-face {
                    font-family: '${selected.label}';
                    src: url('${selected.files.bold}') format('truetype');
                    font-weight: 700;
                    font-style: normal;
                }
            `;
            document.head.appendChild(style);
        }
    }, [font]);

    // Drag to scroll handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
        document.body.style.userSelect = "none";
    };
    const handleMouseLeave = () => {
        setIsDown(false);
        document.body.style.userSelect = "";
    };
    const handleMouseUp = () => {
        setIsDown(false);
        document.body.style.userSelect = "";
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = x - startX;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    // Add theme scroll drag logic
    const handleThemeMouseDown = (e: React.MouseEvent) => {
        setThemeIsDown(true);
        setThemeStartX(e.pageX - (themeScrollRef.current?.offsetLeft || 0));
        setThemeScrollLeft(themeScrollRef.current?.scrollLeft || 0);
        document.body.style.userSelect = "none";
    };
    const handleThemeMouseLeave = () => {
        setThemeIsDown(false);
        document.body.style.userSelect = "";
    };
    const handleThemeMouseUp = () => {
        setThemeIsDown(false);
        document.body.style.userSelect = "";
    };
    const handleThemeMouseMove = (e: React.MouseEvent) => {
        if (!themeIsDown) return;
        e.preventDefault();
        const x = e.pageX - (themeScrollRef.current?.offsetLeft || 0);
        const walk = x - themeStartX;
        if (themeScrollRef.current) {
            themeScrollRef.current.scrollLeft = themeScrollLeft - walk;
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x:-40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Fonts</CardTitle>
                        <CardDescription>Change the typeface of your resume.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            ref={scrollRef}
                            className="flex p-2 flex-row overflow-x-auto gap-4 cursor-grab active:cursor-grabbing"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {FONT_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    className={`flex justify-start flex-col cursor-pointer`}
                                    onClick={() => dispatch(setFont(opt.value))}
                                >
                                    <div className={`border rounded-lg bg-accent py-10 min-w-44 flex justify-center transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${font === opt.value ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-700 bg-accent/70'}`}>
                                        <div className={`text-xs font-normal ${font === opt.value ? 'text-primary' : 'text-primary/50'}`} style={{ fontFamily: opt.fontFamily }}>{opt.label}</div>
                                    </div>
                                    <div className="text-lg flex justify-center font-normal" >{opt.label}</div>
                                    <div className="text-xs text-gray-500 mb-2">{opt.description}</div>
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x:-40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>Themes</CardTitle>
                        <CardDescription>Change the style of your resume sections</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            ref={themeScrollRef}
                            className="flex p-2 flex-row overflow-x-auto gap-4 cursor-grab active:cursor-grabbing"
                            onMouseDown={handleThemeMouseDown}
                            onMouseLeave={handleThemeMouseLeave}
                            onMouseUp={handleThemeMouseUp}
                            onMouseMove={handleThemeMouseMove}
                        >
                            {THEME_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    className={`flex justify-start items-center flex-col cursor-pointer`}
                                    onClick={() => dispatch(setTheme(opt.value))}
                                >
                                    <div className={`bg-accent w-fit flex justify-center transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${theme === opt.value ? 'border-primary-500 ring-2 ring-primary-500' : 'border-gray-700 bg-accent/70'}`}>
                                        <img src={opt.preview} alt={opt.label + ' preview'} className={`min-w-40 h-auto object-cover overflow-clip ${theme === opt.value ? '' : 'opacity-50'}`} />
                                    </div>
                                    <div className="text-lg font-normal mt-2">{opt.label}</div>
                                    <div className="text-xs text-gray-500 mb-2 text-center px-2">{opt.description}</div>
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x:-40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle>Layout</CardTitle>
                        <CardDescription>Choose your resume layout</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row gap-4 p-2">
                            {LAYOUT_OPTIONS.map(opt => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    className={`flex justify-start items-center flex-col cursor-pointer`}
                                    onClick={() => dispatch(setLayout(opt.value as 'one-column' | 'right-handed' | 'left-handed'))}
                                >
                                    <div className={`w-42 h-24 flex items-center justify-center mb-2 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${layout === opt.value ? 'border-primary-500 ring-2 ring-primary-500 bg-accent dark:bg-white' : 'border-gray-700 bg-accent/50 dark:bg-white/50'}`}>
                                        <img src={opt.preview} alt={opt.label + ' preview'} className={`object-contain w-full h-full ${layout === opt.value ? '' : 'opacity-50'}`} />
                                    </div>
                                    <span>{opt.label}</span>
                                    <div className="text-xs font-normal text-gray-500 text-center">{opt.description}</div>
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}