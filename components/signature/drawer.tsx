"use client"
import { useState } from "react";

export interface DrawerProps {
    children: React.ReactNode;
    className?: string;
    toggle: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
    children,
    className,
    toggle = false,
}) => {
    return (
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
xl:overflow-none relative mx-auto grid w-[80%] max-w-screen-lg grid-cols-3 gap-2 overflow-hidden pb-10 sm:gap-4 lg:grid-cols-4 lg:gap-8 lg:pb-10 xl:max-w-screen-xl xl:grid-cols-5 2xl:gap-10 ${toggle ? 'lg:h-[28rem] xl:h-[30rem] 2xl:h-[32rem]' : 'h-full'} ${className}`}>
            {children}
            <div className={`absolute bottom-0 left-0 z-10 grid h-60 w-full place-content-center bg-gradient-to-t from-42% from-white dark:from-black transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${toggle
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">
                        {toggle ? 'Collapsed View' : 'Expanded View'}
                    </p>
                    <div className="w-8 h-1 bg-primary/60 rounded-full mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

