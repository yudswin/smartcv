"use client"
import Editor from "@/components/signature/editor";
import { Button } from "@/components/shadcn/button";
import { Card } from "@/components/shadcn/card";
import { Label } from "@/components/shadcn/label";
import { Switch } from "@/components/shadcn/switch";
import { Drawer } from "@/components/signature/drawer";
import { DrawerItem } from "@/components/signature/drawer-item";
import { ArrowDown } from "lucide-react";
import { useState } from "react";


export default function SignaturePage() {
    const [isToggled, setIsToggled] = useState(true);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const scrollToEditor = () => {
        const editorElement = document.getElementById('editor-section');
        if (editorElement) {
            editorElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <main className="min-h-screen pt-60 dark:bg-[#060606] py-40 mx-2 md:mx-8">
            <article className="space-y-3 pb-8">
                <h1 className="text-center font-medium text-2xl sm:text-3xl md:text-5xl">
                    Email Signature Generator
                </h1>
                <div className="flex justify-center gap-4">
                    <div className="flex items-center gap-3 bg-secondary p-3 rounded-xl shadow-xl border">
                        <Label htmlFor="expand" className="text-sm font-medium">
                            Expand View
                        </Label>
                        <Switch
                            id="expand"
                            checked={!isToggled}
                            onCheckedChange={handleToggle}
                        />
                    </div>
                    <Button
                        onClick={scrollToEditor}
                        className="flex items-center gap-3 bg-secondary p-3 rounded-xl h-full shadow-xl hover:cursor-pointer transition-all duration-200"
                        variant="outline"
                    >
                        <div className="text-primary flex flex-row justify-center items-center gap-2">
                            <Label>Click to Editor</Label>
                            <ArrowDown className="transition-transform duration-200 group-hover:translate-y-1" />
                        </div>
                    </Button>
                </div>
            </article>
            <Drawer toggle={isToggled}>
                {[...Array(30)].map((_, i) =>
                    <DrawerItem key={i}>
                        <Card className="aspect-square w-full cursor-pointer place-items-center rounded-lg border bg-card-bg p-2 lg:p-5 2xl:h-4 h-fit shadow-xl">
                            <Button className=" aspect-square w-full cursor-pointer place-items-center rounded-lg border bg-card-bg p-2 shadow-[0px_1px_0px_0px_rgba(17,17,26,0.1)] lg:p-5 2xl:h-4 h-fit"
                            >
                            </Button>
                        </Card>
                    </DrawerItem>
                )}
            </Drawer>
            <div id="editor-section">
                <Editor />
            </div>
        </main>
    )
}