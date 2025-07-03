"use client"
import { Card, CardHeader } from '@/components/shadcn/card';
import { TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/shadcn/tooltip";
import { EditorTab } from '@/types/signature.interface';

interface TabNavigationProps {
    entities: EditorTab[];
    activeEntity: string;
}

const TabNavigation = ({ entities, activeEntity }: TabNavigationProps) => {
    return (
        <CardHeader className='flex justify-center items-center'>
            <TabsList>
                {entities.map((entity) => (
                    <Tooltip key={entity.id}>
                        <TabsTrigger className="px-4 xl:px-8 py-4 cursor-pointer" key={entity.id} value={entity.id}>
                            <TooltipTrigger asChild>
                                <span className={
                                    entity.id === activeEntity
                                        ? `filter ${entity.id === 'general' ? 'drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]' :
                                            entity.id === 'images' ? 'drop-shadow-[0_0_8px_rgba(251,146,60,0.6)]' :
                                                entity.id === 'social' ? 'drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
                                                    'drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]'
                                        }`
                                        : ""
                                }>
                                    {entity.label}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                <div className="max-w-xs whitespace-pre-line text-xs">
                                    {entity.tooltip}
                                </div>
                            </TooltipContent>
                        </TabsTrigger>
                    </Tooltip>
                ))}
            </TabsList>
        </CardHeader>
    );
};

export default TabNavigation;
