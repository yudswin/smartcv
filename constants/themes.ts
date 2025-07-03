import { LayoutOption, ThemeOption } from "@/types/theme.interface";

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

export const LAYOUT_OPTIONS: LayoutOption[] = [
  {
    value: 'one-column',
    label: 'One Column',
    description: 'Reliable one column format',
    preview: '/layouts/one_collumn.svg',
  },
  {
    value: 'right-handed',
    label: 'Right-Handed',
    description: 'Two column, right side is bigger',
    preview: '/layouts/right_handed.svg',
  },
  {
    value: 'left-handed',
    label: 'Left-Handed',
    description: 'Two column, left side is bigger',
    preview: '/layouts/left_handed.svg',
  },
];
