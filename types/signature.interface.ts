import { ReactNode } from "react";

export interface EditorTab {
    id: string;
    label: ReactNode;
    tooltip: string;
}

export interface GeneralInfo {
    name: string;
    pronoun: string;
    company: string;
    position: string;
    department: string;
}

export interface ContactField {
    title: string;
    value: string;
}

export interface ContactInfo {
    email: ContactField;
    website: ContactField;
    phone: ContactField;
    address: ContactField;
    workPhone: ContactField;
}

export interface CustomField {
    id: string;
    title: string;
    value: string;
}

export interface ImageData {
    file: File | null;
    width: number;
    link: string;
}

export interface BannerData {
    file: File | null;
    width: number;
    position: 'above' | 'below';
    link: string;
}

export interface ImagesData {
    image: ImageData;
    banner: BannerData;
}

export interface SocialMediaItem {
    id: string;
    name: string;
    value: string;
    icon?: string;
}

export interface SocialData {
    caption: string;
    socialMediaItems: SocialMediaItem[];
    customIcon: File | null;
    selectedGalleryIcons: string[];
}

export interface FormData {
    general: GeneralInfo;
    contacts: ContactInfo;
    customFields: CustomField[];
    images: ImagesData;
    social: SocialData;
}
