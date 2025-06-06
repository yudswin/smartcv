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
