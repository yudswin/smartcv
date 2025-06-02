"use client"
import React, { useState } from "react";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/shadcn/tabs";
import Sections from "./sections";
import Customize from "./customize";

export interface SectionTab {
    id: string;
    label: string;
}

export default function Editor() {
    const [activeEntity, setActiveEntity] = useState<string>("sections");
    const entities: SectionTab[] = [
        { id: "sections", label: "Sections" },
        { id: "customize", label: "Customize" },
    ];
    return (
        <div className="flex w-full flex-col gap-6">
            <Tabs  value={activeEntity} onValueChange={setActiveEntity}>
                <TabsList>
                    {entities.map((entity) => (
                        <TabsTrigger className="px-10 cursor-pointer" key={entity.id} value={entity.id}>
                            {entity.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="sections">
                    <Sections />
                </TabsContent>
                <TabsContent value="customize">
                    <Customize />
                </TabsContent>
            </Tabs>
        </div>
    );
}
