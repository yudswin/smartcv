
export interface FontOption {
    label: string;
    value: string;
    description: string;
    fontFamily: string;
    files: {
        regular: string;
        bold: string;
    };
}

export const FONT_OPTIONS: FontOption[] = [
    {
        label: "Roboto",
        value: "Roboto",
        description: "Modern geometric sans-serif.",
        fontFamily: "'Roboto', Arial, sans-serif",
        files: {
            regular: "/fonts/Roboto-Regular.ttf",
            bold: "/fonts/Roboto-Bold.ttf"
        }
    },
    {
        label: "Raleway",
        value: "Raleway",
        description: "Elegant, clean sans-serif.",
        fontFamily: "'Raleway', Arial, sans-serif",
        files: {
            regular: "/fonts/Raleway-Regular.ttf",
            bold: "/fonts/Raleway-Bold.ttf"
        }
    },
    {
        label: "Computer Modern",
        value: "Computer Modern",
        description: "Classic LaTeX serif.",
        fontFamily: "'CMU Serif', serif",
        files: {
            regular: "/fonts/cmunrm.ttf",
            bold: "/fonts/cmunbx.ttf"
        }
    },
    {
        label: "Inconsolata",
        value: "Inconsolata",
        description: "Monospaced, code-inspired.",
        fontFamily: "'Inconsolata', monospace",
        files: {
            regular: "/fonts/Inconsolata-Regular.ttf",
            bold: "/fonts/Inconsolata-Bold.ttf"
        }
    },
    {
        label: "Unna",
        value: "Unna",
        description: "Classic serif with personality.",
        fontFamily: "'Unna', serif",
        files: {
            regular: "/fonts/Unna-Regular.ttf",
            bold: "/fonts/Unna-Bold.ttf"
        }
    }
];
