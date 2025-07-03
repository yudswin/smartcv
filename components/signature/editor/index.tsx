"use client"
import { SectionTab } from "@/components/editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/shadcn/dropdown-menu";
import { Button } from "@/components/shadcn/button";
import { ChevronDownIcon, Edit, Edit3 } from "lucide-react";
import { useState } from "react";
import Preview from "./preview";
import GeneralTab from "./general-tab";
import CustomizeTab from "./customize-tab";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/shadcn/drawer";

export interface EditorProps {
    className?: string;
}

const Editor: React.FC<EditorProps> = ({
    className
}) => {
    const [activeEntity, setActiveEntity] = useState<string>("general");
    const entities: SectionTab[] = [
        { id: "general", label: "General" },
        { id: "customize", label: "Customize" },
    ];
    return (
        <div className="flex flex-col md:flex-row justify-center gap-4 mx-2 lg:mx-4 lg:my-4 sm:h-auto relative">
            {/* Desktop Tabs */}
            <div className="hidden lg:block w-full lg:min-w-[40%] lg:max-w-[40%] h-64 lg:h-10 rounded-lg mb-4 lg:mb-0">
                <div className="flex w-full flex-col gap-6 py-6">
                    <Tabs value={activeEntity} onValueChange={setActiveEntity} >
                        <TabsList>
                            {entities.map((entity) => (
                                <TabsTrigger className="px-4 xl:px-10 cursor-pointer" key={entity.id} value={entity.id}>
                                    {entity.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value="general">
                            <GeneralTab />
                        </TabsContent>
                        <TabsContent value="customize">
                            <CustomizeTab />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className="absolute start-3 top-10 lg:hidden w-full z-20 mb-4">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline" className="w-14 h-14 rounded-2xl">
                            <Edit3 />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="p-0">
                        <DrawerTitle className="sr-only">Editor Settings</DrawerTitle>
                        <div className="flex w-full flex-col gap-6 py-2 px-2">
                            <Tabs value={activeEntity} onValueChange={setActiveEntity} >
                                <TabsList >
                                    {entities.map((entity) => (
                                        <TabsTrigger className="px-2 cursor-pointer" key={entity.id} value={entity.id}>
                                            {entity.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                <TabsContent value="general">
                                    <GeneralTab />
                                </TabsContent>
                                <TabsContent value="customize">
                                    <CustomizeTab />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            <div className="w-full min-h-[80vh] max-h-[80vh] z-10 rounded-lg mb-4 md:mb-0 py-6">
                <Preview />
            </div>
        </div>
    )
}

export default Editor;