// Theme options for resume section styles

export interface ThemeOption {
  label: string;
  value: string;
  description: string;
  preview: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    label: "Classic",
    value: "classic",
    description: "Traditional, clean, and professional layout.",
    preview: "/themes/style_classic.png"
  },
  {
    label: "Modern",
    value: "modern",
    description: "Open, readable, and contemporary design.",
    preview: "/themes/style_modern.png"
  },
  {
    label: "Minimalist",
    value: "minimalist",
    description: "Roomy, calm, and minimal distractions.",
    preview: "/themes/style_minimalist.png"
  },
  {
    label: "Simple",
    value: "simple",
    description: "Packed, vertical, and information-dense.",
    preview: "/themes/style_simple.png"
  }
];
