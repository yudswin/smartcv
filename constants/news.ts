export type NewsContent =
    | { type: "text"; value: string }
    | { type: "bold"; value: string }
    | { type: "image"; src: string; alt?: string; caption?: string }
    | { type: "code"; code: string; language?: string }
    | { type: "list"; items: string[] };

export interface Notification {
    avatarPath: string;
    name: string;
    date: Date;
    title: string;
    content: NewsContent[];
    pinned?: boolean;
}

export const NEWS: Notification[] = [
    {
        avatarPath: "/primaryAvatar.png",
        name: "SmartCV",
        date: new Date(2025, 5, 6),
        title: "Welcome aboard 🎉",
        content: [
            { type: "text", value: "Thank you for joining SmartCV! We're excited to have you on board." },
            {
                type: "list", items: [
                    "Start building your professional resume with our intuitive tools.",
                    "Stay tuned for new features and updates!",
                    "Email me for collaboration, feedback, or any inquiries: nqduy.working@gmail.com"
                ]
            },
            { type: "image", src: "/primaryAvatar.png", alt: "SmartCV Logo" },
        ],
        pinned: true
    },
    {
        avatarPath: "/primaryAvatar.png",
        name: "SmartCV",
        date: new Date(2025, 5, 6),
        title: "Understanding the Section Bar",
        content: [
            { type: "bold", value: "What does the section bar look like?" },
            { type: "image", src: "/news/sections.png", alt: "Section Bar Example", caption: "This is the section bar in SmartCV. Hover over each icon to preview the section style." },
            { type: "text", value: "You can hover over each section icon to see a quick preview of how it will look in your resume." },
            { type: "image", src: "/news/section_tooltip.png", alt: "Hover Example" },
            {
                type: "list", items: [
                    "#section1: A main section with a large title, perfect for Experience, Projects, or Activities.",
                    "#section2: A smaller section, great for Education, Skills, or Honors.",
                    "#title: The main heading for each entry (e.g., job title, degree).",
                    "#subtitle: A secondary heading (e.g., company, university).",
                    "#date: Shown to the right, for timelines or durations.",
                    "Bullet points: Use these to list your achievements or responsibilities clearly.",
                ]
            },
            { type: "text", value: "You can add or use any section once it is implemented and available in the section bar." },
            { type: "bold", value: "What is Page Break?" },
            { type: "text", value: "The Page Break section lets you split your resume into multiple pages for better printing and organization." },
            { type: "image", src: "/news/page_break.png", alt: "Page Break Example", caption: "Scroll Down to See the Next Page"},
        ]
    }
];