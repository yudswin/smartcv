import Editor from "@/components/editor";
import Preview from "@/components/preview";
import { Metadata } from "next";
import MobileView from "./mobile-view";

export const metadata: Metadata = {
    title: "Builder | SmartCV",
    description: "Builder page of SmartCV app.",
};

export default function BuilderPage() {
    return (
        <>
            <div className="hidden md:flex flex-col md:flex-row pt-24 md:pt-40 justify-center gap-4 mx-2 md:mx-4 my-2 md:my-4 sm:h-auto md:h-[calc(100vh-130px)]">
                <div className="w-full md:min-w-[49.5%] md:max-w-[49.5%] h-64 md:h-10 rounded-lg mb-4 md:mb-0">
                    <Editor />
                </div>
                <div className="w-full md:w-auto flex flex-col items-end h-96 md:h-full min-h-[400px] md:min-h-[840px] overflow-scroll border-solid hide-scrollbar rounded-lg border border-border bg-card">
                    <Preview />
                </div>
            </div>
            <div className="flex md:hidden">
                <MobileView />
            </div>
        </>
    );
}