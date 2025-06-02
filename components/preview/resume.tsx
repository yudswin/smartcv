"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/lib/store";
import { renderResumeFromText } from "@/lib/resumeParser";
import { FONT_OPTIONS } from "@/constants/fonts";
import { THEME_OPTIONS } from "@/constants/themes";

export default function Resume({ zoom = 0.9 }: { zoom?: number }) {
    const font = useSelector((state: RootState) => state.theme.font);
    const textValue = useSelector((state: RootState) => state.textarea.value);
    const theme = useSelector((state: RootState) => state.theme.theme);
    const pages = textValue
        .split(/#pagebreak[\s\S]*?(?=\n|$)/g)
        .filter((page) => page.trim().length > 0);

    const selectedFont = FONT_OPTIONS.find(f => f.value === font);
    const fontFamily = selectedFont ? selectedFont.fontFamily : "'Roboto', Arial, sans-serif";
    const selectedTheme = THEME_OPTIONS.find(t => t.value === theme) || THEME_OPTIONS[0];

    return (
        <div className="flex flex-col items-center select-none" style={{ gap: `${zoom * 2}rem` }}>
            {pages.length > 0 ? (
                pages.map((page, idx) => (
                    <div
                        key={idx}
                        className="print-letter-page max-w-[8.2in] min-w-[8.2in] max-h-[11in] min-h-[11in] overflow-hidden border shadow-2xl border-black"
                        style={{ scale: zoom }}
                    >
                        <div className="block [unicode-bidi:isolate]">
                            <div
                                className="print-letter-content"
                                style={{ fontFamily, ...getThemeStyle(selectedTheme.value) }}
                            >
                                {renderResumeFromText(page, selectedTheme.value as 'classic' | 'modern' | 'minimalist' | 'simple')}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div
                    className="print-letter-page max-w-[8.2in] min-w-[8.2in] max-h-[11in] min-h-[11in] overflow-hidden border shadow-2xl border-black"
                    style={{ scale: zoom }}
                >
                    <div className="block [unicode-bidi:isolate]">
                        <div
                            className="print-letter-content"
                            style={{ fontFamily, ...getThemeStyle(selectedTheme.value) }}
                        >
                            -- Your Resume will rendering here --
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function getThemeStyle(theme: string) {
    const base: React.CSSProperties = {
        padding: '30px',
        boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
        whiteSpace: 'pre-line',
        fontSize: '12.5px',
        maxWidth: '100%',
        maxHeight: '11in',
        minHeight: '11in',
        background: 'white',
    };
    switch (theme) {
        case 'classic':
        case 'modern':
        case 'minimalist':
        case 'simple':
            return base;
        default:
            return {};
    }
}
