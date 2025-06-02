import Editor from "@/components/editor";
import Preview from "@/components/preview";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume Builder",
    openGraph: {
        type: "website",
        title: "SmartCV - AI Resume Builder",
        description:
            "SmartCV helps you create professional, AI-powered resumes in minutes. Build, customize, and export your CV with ease.",
        images: [{ url: "/logos/metaSecondary.png" }],
    },
};

export default function BuilderPage() {
    return (
        <div className="flex h-[calc(100vh-130px)] flex-col gap md:flex-row pt-32 justify-center gap-4 mx-4 my-4">
            <div className="min-w-[49.5%] max-w-[49.5%] h-10 rounded-lg">
                <Editor />
            </div>
            <div className="flex flex-col items-end h-full min-h-[800px] overflow-scroll border-solid hide-scrollbar rounded-lg border border-border bg-card ">
                <Preview />
            </div>
        </div>
    );
}