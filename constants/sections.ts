import {
    RiMoonClearFill,
    RiBriefcase2Fill,
    RiRainbowFill,
    RiGroupFill,
    RiStarSmileFill,
    RiAwardFill,
    RiToolsFill,
} from 'react-icons/ri';
import { trigger } from './triggers';
import COLORS from './colors';

export type SectionType = 'header' | 'section' | 'section1' | 'section2' | 'pagebreak';

export interface SectionField {
    section?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    date?: string;
    other: string[];
    style?: string[];
}

export interface Section {
    name: string;
    placeholder?: string;
    body: SectionField[];
    icon?: any;
    color?: string;
    type: SectionType;
}

function getDefaultFieldsString(fields: SectionField): string {
    const keys = Object.keys(fields);
    let defaultFields = '';

    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i] as keyof SectionField;

        if (key === 'style' && fields.style) {
            const style = fields.style;
            for (let j = 0; j < style.length; j += 1) {
                defaultFields += `${trigger}${key} ${style[j]}\n`;
            }
        } else if (key === 'other' && fields.other) {
            const other = fields.other;
            for (let j = 0; j < other.length; j += 1) {
                defaultFields += `${other[j]}${j < other.length - 1 ? '\n' : ''}`;
            }
        } else if (key !== 'style' && key !== 'other' && fields[key] !== undefined) {
            const isOtherEmpty = fields.other && fields.other.length < 1;
            const isLastKey = i < keys.length - 2 || !isOtherEmpty;
            const value = fields[key] as string;
            defaultFields += `${trigger}${key} ${value}${isLastKey ? '\n' : ''}`;
        }
    }

    return defaultFields;
}

function getMultiSectionDefaultFieldsString(fields: SectionField[]): string {
    let result = '';
    for (let i = 0; i < fields.length; i += 1) {
        const field = fields[i];
        result += `${getDefaultFieldsString(field)}${i < fields.length - 1 ? '\n\n' : ''}`;
    }
    return result;
}

export const TYPES = {
    HEADER: 'header' as SectionType,
    SECTION: 'section' as SectionType,
    SECTION1: 'section1' as SectionType,
    SECTION2: 'section2' as SectionType,
    PAGEBREAK: 'pagebreak' as SectionType,
};

const SECTIONS: Section[] = [
    {
        name: 'John Doe',
        placeholder: 'Header',
        body: [
            {
                other: [
                    'mailto:firstlast@gmail.com',
                    'yourwebsite.com',
                    '(111) 222-3333',
                ],
            },
        ],
        icon: RiStarSmileFill,
        color: COLORS.redOrange,
        type: TYPES.HEADER,
    },
    {
        name: 'Summary',
        body: [
            {
                other: [
                    `I am a [descriptor] and [descriptor] [position title] looking for an opportunity to [whatever you're looking for].`,
                ],
            },
        ],
        icon: RiToolsFill,
        color: COLORS.orange,
        type: TYPES.SECTION1,
    },
    {
        name: 'Education',
        body: [
            {
                title: 'Degree & Major(s)',
                subtitle: 'Your University',
                date: 'Date #1 - Date #2',
                other: [
                    'GPA: [your gpa]/4.0',
                    `Relevant Coursework: [briefly list relevant courses to the positions you're applying to; don't have to write full/accurate course names].`,
                ],
            },
        ],
        icon: RiMoonClearFill,
        color: COLORS.yellowGreen,
        type: TYPES.SECTION2,
    },
    {
        name: 'Experience',
        body: [
            {
                title: 'Position Title',
                subtitle: 'Company',
                description: 'Location',
                date: 'Date #1 - Date #2',
                other: [
                    '- [what did you do at the company? include as many numbers and metrics as you can]',
                    '- [what did you learn? what tools did you use and gain proficiency at?]',
                    '- [what initiatives did you take?]',
                ],
            },
            {
                title: 'Position Title',
                subtitle: 'Company',
                description: 'Location',
                date: 'Date #1 - Date #2',
                other: [
                    '- [what did you do at the company? include as many numbers and metrics as you can]',
                    '- [what did you learn? what tools did you use and gain proficiency at?]',
                    '- [what initiatives did you take?]',
                ],
            },
        ],
        icon: RiBriefcase2Fill,
        color: COLORS.green,
        type: TYPES.SECTION1,
    },
    {
        name: 'Projects',
        body: [
            {
                title: 'Project Name',
                description: '[link the project]',
                date: 'Date #1 - Date #2',
                other: [
                    '[what was the project, what did you do for it, and why was it significant?]',
                ],
            },
            {
                title: 'Project Name',
                description: '[link the project]',
                date: 'Date #1 - Date #2',
                other: [
                    '[what was the project, what did you do for it, and why was it significant?]',
                ],
            },
        ],
        icon: RiRainbowFill,
        color: COLORS.teal,
        type: TYPES.SECTION1,
    },
    {
        name: 'Activities',
        body: [
            {
                title: 'Organization Name',
                subtitle: '[your role in the organization]',
                description: '[any extra affiliation, ex. university]',
                date: 'Date #1 - Date #2',
                other: [
                    '[what was the organization, what did you do for it, and why was it significant?]',
                ],
            },
            {
                title: 'Organization Name',
                subtitle: '[your role in the organization]',
                description: '[any extra affiliation, ex. university]',
                date: 'Date #1 - Date #2',
                other: [
                    '[what was the organization, what did you do for it, and why was it significant?]',
                ],
            },
        ],
        icon: RiGroupFill,
        color: COLORS.blue,
        type: TYPES.SECTION1,
    },
    {
        name: 'Honors',
        body: [
            {
                title: 'Award Name',
                subtitle: '[who gave you this award?]',
                date: 'Date Awarded',
                other: [],
            },
            {
                title: 'Award Name',
                subtitle: '[who gave you this award?]',
                date: 'Date Awarded',
                other: [],
            },
        ],
        icon: RiAwardFill,
        color: COLORS.lavender,
        type: TYPES.SECTION2,
    },
    {
        name: 'Skills',
        body: [
            {
                other: [
                    'Code: [what programming languages/frameworks do you know? ex. JavaScript, Python, Java]',
                    'Design: [what design tools do you know?]',
                    '[what miscellaneous tools relevant to your position do you know? list them as well.]',
                ],
            },
        ],
        icon: RiToolsFill,
        color: COLORS.purple,
        type: TYPES.SECTION2,
    },
    {
        name: 'Page Break',
        body: [
            {
                other: ['#pagebreak\nScroll down to see me!'],
            },
        ],
        icon: RiBriefcase2Fill, // You can change this icon if you want
        color: COLORS.background, // Use an existing color
        type: TYPES.PAGEBREAK,
    },
];

const PAGEBREAK_SECTION: Section = {
    name: 'Page Break',
    body: [
        {
            other: ['#pagebreak\nScroll down to see me!'],
        },
    ],
    type: TYPES.PAGEBREAK,
};

export const getEmptySubsection = (): SectionField => ({
    section: '',
    title: '',
    subtitle: '',
    description: '',
    date: '',
    other: [],
});

export function formatIntoSection({
    name,
    body,
    placeholder,
    index,
    type = TYPES.SECTION1,
    icon = () => null,
    color = undefined,
}: {
    name: string;
    body: SectionField[];
    placeholder?: string;
    index: number;
    type?: SectionType;
    icon?: any;
    color?: string;
}) {
    const titleChar =
        type !== TYPES.PAGEBREAK ? `${trigger}${type} ${name}\n\n` : '';
    const char = `${titleChar}${getMultiSectionDefaultFieldsString(body)}`;
    return {
        key: index,
        name,
        body,
        char,
        placeholder,
        getIcon: icon,
        color,
        type,
    };
}

export const getNewPageSection = () => formatIntoSection({ ...PAGEBREAK_SECTION, index: 0 });

export const getDefaultSections = () =>
    SECTIONS.map((section, index) => formatIntoSection({ ...section, index }));

export const getDefaultText = () =>
    '';

export const formatSubmittedResume = (data: Record<string, any>) =>
    SECTIONS.map((section, index) => {
        if (data && Object.keys(data).length > 0) {
            const { name, placeholder, body, ...rest } = section;
            const key = (placeholder || name).toLowerCase();

            if (section.type === TYPES.HEADER) {
                const contact: string[] = [];

                if (data.header) {
                    contact.concat(data.header.split('\n'));
                }

                if (data.email) {
                    contact.push(data.email);
                }

                if (data.phone) {
                    contact.push(data.phone);
                }

                return formatIntoSection({
                    name: data.name,
                    body: [
                        {
                            ...section.body[0],
                            ...(contact ? { other: contact } : null),
                        },
                    ],
                    placeholder,
                    index,
                    ...rest,
                });
            }

            if (data[key]) {
                return formatIntoSection({
                    name,
                    body: [
                        {
                            ...section.body[0],
                            other: data[key].split('\n'),
                        },
                    ],
                    placeholder,
                    index,
                    ...rest,
                });
            }
        }

        return formatIntoSection({ ...section, index });
    });

export const getSection = (i: number, sections: any[]) => sections[i];