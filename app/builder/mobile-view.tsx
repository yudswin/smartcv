"use client"
import { Dock } from "@/components/dock";
import Editor from "@/components/editor";
import Preview from "@/components/preview";
import Image from "next/image";
import { JSX, useState } from "react";
import { TbColorFilter, TbEdit } from "react-icons/tb";

interface DockTabs {
    id: string;
    label: string;
    icon: JSX.Element;
    onClick: () => void;
}

export default function MobileView() {
    const [activeEntity, setActiveEntity] = useState<string>("edit");
    const entities: DockTabs[] = [
        {
            id: "edit",
            label: "Edit",
            icon: <TbEdit size={18} />,
            onClick: () => setActiveEntity("edit"),
        },
        {
            id: "format",
            label: "Format",
            icon: <TbColorFilter size={18} />,
            onClick: () => setActiveEntity("format"),
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-32 h-full p-8 text-center">
                <Image src="/catSticker.gif" alt="catgif" width={220} height={220} className="mx-auto sm:w-[400px] sm:h-[400px] w-[220px] h-[220px]" />
                <h2 className="text-xl font-semibold mb-2">Mobile View Coming Soon</h2>
                <p className="text-gray-500 mb-2">This feature is under development. Please check back later!</p>
                <p className="text-sm text-gray-400">For the best experience, please use a desktop device.</p>
            </div>
            {/* <Dock /> */}
        </>
    )
}