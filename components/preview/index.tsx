"use client"

import React, { useRef, useState, useEffect } from 'react'
import Resume from './resume'
import { Button } from "@/components/shadcn/button";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useReactToPrint } from 'react-to-print';
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { FONT_OPTIONS } from "@/constants/fonts";

export default function Preview() {
    const [zoom, setZoom] = useState(0.9);
    const resumeRef = useRef<HTMLDivElement>(null);
    const [pageStyle, setPageStyle] = useState('');
    const font = useSelector((state: RootState) => state.theme.font);

    useEffect(() => {
        fetch('/globals.css')
            .then(res => res.text())
            .then((css) => {
                const selected = FONT_OPTIONS.find(f => f.value === font);
                let fontFace = '';
                if (selected) {
                    fontFace = `\n@font-face {\n  font-family: '${selected.label}';\n  src: url('${selected.files.regular}') format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: '${selected.label}';\n  src: url('${selected.files.bold}') format('truetype');\n  font-weight: 700;\n  font-style: normal;\n}`;
                }
                setPageStyle(css + fontFace);
            });
    }, [font]);

    const handleZoomIn = () => setZoom((z) => Math.min(z + 0.1, 2));
    const handleZoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
    const handlePrint = useReactToPrint({
        contentRef: resumeRef,
        documentTitle: 'Resume',
        pageStyle: pageStyle,
    });

    return (
        <div className="w-full flex-1 flex flex-col justify-center items-start relative">
            <div className="flex gap-2 p-2 h-0 sticky top-0 right-0 z-20 self-end">
                <Button variant="outline" size="icon" onClick={handleZoomOut} aria-label="Zoom Out">
                    <ZoomOut className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleZoomIn} aria-label="Zoom In">
                    <ZoomIn className="w-5 h-5" />
                </Button>
                <Button variant="default" onClick={handlePrint} className="ml-2">
                    Export PDF
                </Button>
            </div>
            <div ref={resumeRef} className="w-full flex flex-col items-center print:bg-white print:w-auto print:items-start">
                <Resume zoom={zoom} />
            </div>
        </div>
    )
}
