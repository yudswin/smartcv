import React, { JSX } from "react";

interface Section {
    key: string;
    title: string;
    content: string;
}

// Parses the resume text into sections
export function parseResumeSections(text: string): Section[] {
    // Support #header as well as #sectionX
    const sectionRegex = /#(header|section\d+)\s+(.+?)\n([\s\S]*?)(?=(#(header|section\d+)|$))/g;
    const sections: Section[] = [];
    let match;
    while ((match = sectionRegex.exec(text)) !== null) {
        // match[1] is 'header' or 'sectionX', match[2] is title, match[3] is content
        sections.push({
            key: match[1].trim() + '-' + match[2].trim(),
            title: match[2].trim(),
            content: match[3].trim(),
        });
    }
    return sections;
}

// Helper: parse lines for #title, #subtitle, #description, #date, and content
function parseSectionBody(body: string) {
    const entries: Array<{
        title?: string;
        subtitle?: string;
        description?: string;
        date?: string;
        content: string[]; // non-bullet content
        bullets: string[]; // bullet points
    }> = [];
    let current: any = { content: [], bullets: [] };
    const lines = body.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    for (const line of lines) {
        if (line.startsWith('#title ')) {
            if (current.title || current.subtitle || current.description || current.date || current.content.length || current.bullets.length) {
                entries.push(current);
                current = { content: [], bullets: [] };
            }
            current.title = line.replace('#title ', '').trim();
        } else if (line.startsWith('#subtitle ')) {
            current.subtitle = line.replace('#subtitle ', '').trim();
        } else if (line.startsWith('#description ')) {
            current.description = line.replace('#description ', '').trim();
        } else if (line.startsWith('#date ')) {
            current.date = line.replace('#date ', '').trim();
        } else if (line.startsWith('- ')) {
            current.bullets.push(line.replace('- ', '').trim());
        } else {
            current.content.push(line);
        }
    }
    if (current.title || current.subtitle || current.description || current.date || current.content.length || current.bullets.length) {
        entries.push(current);
    }
    return entries;
}

// Helper: render header section (classic style)
function renderHeaderClassic(title: string, content: string): JSX.Element {
    const lines = content.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const items = lines.map((line, idx) => {
        if (line.startsWith('mailto:')) {
            const email = line.replace('mailto:', '');
            return (
                <li className="list-none" key={`header-email-${idx}`}>
                    <span><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></span>
                </li>
            );
        } else if (/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(line)) {
            let url = line;
            if (!/^https?:\/\//i.test(url)) url = 'http://' + url;
            return (
                <li className="list-none" key={`header-url-${idx}`}>
                    <span><a href={url} target="_blank" rel="noopener noreferrer">{line}</a></span>
                </li>
            );
        } else {
            return (
                <li className="list-none" key={`header-other-${idx}`}>
                    <span><span>{line}</span></span>
                </li>
            );
        }
    });
    // Insert dot separator between items
    const interleaved = [];
    for (let i = 0; i < items.length; i++) {
        interleaved.push(items[i]);
        if (i < items.length - 1) {
            interleaved.push(<p className="mx-[5px] my-0" key={`header-sep-${i}`}>•</p>);
        }
    }
    return (
        <div className="resume-heading-container">
            <h1
                className="block text-[2em] font-bold [unicode-bidi:isolate] text-center text-gray-900 dark:text-white m-0"
            >
                {title}
            </h1>
            <div className="flex justify-center">{interleaved}</div>
        </div>
    );
}

// Helper: render classic section entry
function renderClassicEntry(entry: any, key: string | number) {
    return (
        <div className="mb-[5px]" key={key}>
            <div className="flex flex-row justify-between">
                <div className="mr-5">
                    <p className="m-0">
                        <b>
                            <span>{entry.title ? <span>{entry.title}</span> : null}</span>
                            {entry.title ? ', ' : null}
                        </b>
                        <span>{entry.subtitle ? <span>{entry.subtitle}</span> : null}</span>
                        {entry.subtitle && entry.description ? ' — ' : null}
                        <span>{entry.description ? <span>{entry.description}</span> : null}</span>
                    </p>
                </div>
                <p className="text-right m-0">{entry.date || ''}</p>
            </div>
            {entry.content && entry.content.length > 0 && (
                <div className="mt-1">
                    {entry.content.map((c: string, i: number) => (
                        <div key={i} className="text-gray-800 dark:text-gray-200">{c}</div>
                    ))}
                </div>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
                <ul className="list-disc list-inside mt-1">
                    {entry.bullets.map((c: string, i: number) => (
                        <li key={i} className="text-gray-800 dark:text-gray-200">{c}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Helper: render modern section entry
function renderModernEntry(entry: any, key: string | number) {
    return (
        <div className="mb-3" key={key}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                    <span className="font-semibold text-lg text-black dark:text-white">{entry.title}</span>
                    {entry.subtitle && <span className="ml-2 text-gray-700 dark:text-gray-300">{entry.subtitle}</span>}
                    {entry.description && <span className="ml-2 italic text-gray-500 dark:text-gray-400">{entry.description}</span>}
                </div>
                {entry.date && <span className="text-sm text-right text-gray-500 dark:text-gray-400">{entry.date}</span>}
            </div>
            {entry.content && entry.content.length > 0 && (
                <div className="mt-1">
                    {entry.content.map((c: string, i: number) => (
                        <div key={i} className="text-gray-800 dark:text-gray-200">{c}</div>
                    ))}
                </div>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
                <ul className="list-disc list-inside mt-1">
                    {entry.bullets.map((c: string, i: number) => (
                        <li key={i} className="text-gray-800 dark:text-gray-200">{c}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Helper: render minimalist section entry
function renderMinimalistEntry(entry: any, key: string | number) {
    return (
        <div className="mb-4" key={key}>
            <div className="flex flex-col gap-1">
                <span className="font-medium text-base text-gray-900 dark:text-white">{entry.title}</span>
                {entry.subtitle && <span className="text-sm text-gray-500 dark:text-gray-400">{entry.subtitle}</span>}
                {entry.description && <span className="text-xs text-gray-400 dark:text-gray-500">{entry.description}</span>}
                {entry.date && <span className="text-xs text-right text-gray-300 dark:text-gray-600">{entry.date}</span>}
            </div>
            {entry.content && entry.content.length > 0 && (
                <div className="mt-1">
                    {entry.content.map((c: string, i: number) => (
                        <div key={i} className="text-gray-700 dark:text-gray-300 pl-2">{c}</div>
                    ))}
                </div>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
                <ul className="list-none mt-1">
                    {entry.bullets.map((c: string, i: number) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300 pl-2">{c}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Helper: render simple section entry
function renderSimpleEntry(entry: any, key: string | number) {
    return (
        <div className="mb-2" key={key}>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className="font-semibold">{entry.title}</span>
                    {entry.subtitle && <span className="ml-1">{entry.subtitle}</span>}
                    {entry.description && <span className="ml-1 text-xs text-gray-500">{entry.description}</span>}
                </div>
                {entry.date && <span className="text-xs text-gray-400">{entry.date}</span>}
            </div>
            {entry.content && entry.content.length > 0 && (
                <div className="mt-0">
                    {entry.content.map((c: string, i: number) => (
                        <div key={i} className="text-xs text-gray-700 pl-2">{c}</div>
                    ))}
                </div>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
                <ul className="list-none mt-0">
                    {entry.bullets.map((c: string, i: number) => (
                        <li key={i} className="text-xs text-gray-700 pl-2">{c}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export function renderResumeSection(section: Section, style: 'classic' | 'modern' | 'minimalist' | 'simple' = 'classic', sectionIdx?: number): JSX.Element {
    if (section.key.toLowerCase().startsWith('header')) {
        // Use a unique key for header too
        return (
            <div key={section.key + (sectionIdx !== undefined ? `-${sectionIdx}` : '')}>
                {renderHeaderClassic(section.title, section.content)}
            </div>
        );
    }
    // Parse body for entries
    const entries = parseSectionBody(section.content);
    switch (style) {
        case 'modern':
            return (
                <div className="Modern__Container mb-6" key={section.key + (sectionIdx !== undefined ? `-${sectionIdx}` : '')}>
                    <h2
                        className="block text-[1.5em] font-bold [unicode-bidi:isolate] Classic__Header-sc-jtps89-3 hZjTju border-b border-gray-700 dark:border-gray-300 p-0 m-0"
                    >
                        {section.title}
                    </h2>
                    {entries.map((entry, idx) => renderModernEntry(entry, idx))}
                </div>
            );
        case 'minimalist':
            return (
                <div className="Minimalist__Container mb-8" key={section.key + (sectionIdx !== undefined ? `-${sectionIdx}` : '')}>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1 border-b border-gray-200 dark:border-gray-700">{section.title}</h2>
                    {entries.map((entry, idx) => renderMinimalistEntry(entry, idx))}
                </div>
            );
        case 'simple':
            return (
                <div className="Simple__Container mb-3" key={section.key + (sectionIdx !== undefined ? `-${sectionIdx}` : '')}>
                    <h2 className="text-base font-bold text-gray-800 dark:text-white mb-0">{section.title}</h2>
                    {entries.map((entry, idx) => renderSimpleEntry(entry, idx))}
                </div>
            );
        case 'classic':
        default:
            return (
                <div className="Classic__Container-sc-jtps89-0 jGKyyx" key={section.key + (sectionIdx !== undefined ? `-${sectionIdx}` : '')}>
                    <h2
                        className="block text-[1.5em] font-bold [unicode-bidi:isolate] Classic__Header-sc-jtps89-3 hZjTju border-b border-gray-700 dark:border-gray-300 p-0 m-0"
                    >
                        {section.title}
                    </h2>
                    {entries.map((entry, idx) => renderClassicEntry(entry, idx))}
                </div>
            );
    }
}

export function renderResumeFromText(text: string, style: 'classic' | 'modern' | 'minimalist' | 'simple' = 'classic'): JSX.Element[] {
    const sections = parseResumeSections(text);
    return sections.map((section, idx) => renderResumeSection(section, style, idx));
}

// hello