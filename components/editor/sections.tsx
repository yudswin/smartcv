"use client"
import React, { useRef, useState } from "react";
import SectionButton from "../section-button";
import { Card, CardContent } from "../shadcn/card";
import { getDefaultSections } from "@/constants/sections";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/store";
import { setValue, appendValue } from "@/lib/textareaSlice";
import { Tooltip, TooltipTrigger, TooltipContent } from "../shadcn/tooltip";
import { motion } from "framer-motion";


export default function Sections() {
    const sections = getDefaultSections();
    const scrollRef = useRef<HTMLDivElement>(null);
    const textValue = useSelector((state: RootState) => state.textarea.value);
    const dispatch = useDispatch();
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
        scrollLeft = scrollRef.current?.scrollLeft || 0;
        document.body.style.userSelect = "none";
    };

    const handleMouseLeave = () => {
        isDown = false;
        document.body.style.userSelect = "";
    };

    const handleMouseUp = () => {
        isDown = false;
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

    // Find which sections are already used in the textarea
    const usedSections = new Set<string>();
    sections.forEach(section => {
        if (section.type !== 'pagebreak') {
            const marker = `${section.type} ${section.name}`;
            if (textValue.includes(marker)) {
                usedSections.add(String(section.key));
            }
        }
    });

    const handleSectionClick = (idx: number) => {
        const key = String(sections[idx].key);
        if (sections[idx].type === 'pagebreak') {
            setSelectedIdx(idx);
            dispatch(appendValue(sections[idx].char || ""));
        } else if (!usedSections.has(key)) {
            setSelectedIdx(idx);
            dispatch(appendValue(sections[idx].char || ""));
        }
    };

    return (
        <div className="flex flex-1 flex-col gap-4">
            {/* Sections */}
            <Card className="w-full">
                <CardContent
                    ref={scrollRef}
                    className="flex flex-row overflow-x-auto gap-2 cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {[
                        ...sections.filter((section) => section.type === 'pagebreak'),
                        ...sections.filter((section) => section.type !== 'pagebreak' && !usedSections.has(String(section.key))),
                        ...sections.filter((section) => section.type !== 'pagebreak' && usedSections.has(String(section.key))),
                    ].map((section, idx) => {
                        const isUsed = usedSections.has(String(section.key)) && section.type !== 'pagebreak';
                        return (
                            <Tooltip key={section.key}>
                                <TooltipTrigger asChild>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: idx * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <SectionButton
                                            section={section}
                                            selected={selectedIdx === idx}
                                            onClick={() => handleSectionClick(sections.findIndex(s => s.key === section.key))}
                                            disabled={isUsed}
                                            className={isUsed ? "opacity-60 cursor-not-allowed bg-gray-300 dark:bg-gray-700" : ""}
                                        />
                                    </motion.div>
                                </TooltipTrigger>
                                <TooltipContent side="bottom">
                                    <div className="max-w-xs whitespace-pre-line text-xs">
                                        {section.char}
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </CardContent>
            </Card>

            {/* Text Area */}
            <Card className="w-full min-h-[50px]">
                <CardContent>
                    <textarea
                        className="shadow-lg  w-full min-h-[550px] rounded-lg border-[#292524] bg-primary-foreground dark:bg-secondary p-4 box-border resize-none outline-none font-sans text-[13px]"
                        value={textValue}
                        onChange={e => dispatch(setValue(e.target.value))}
                        placeholder="Click on the sections above to start building your resume!"
                    />
                </CardContent>
            </Card>
        </div>
    );
}