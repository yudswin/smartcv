"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/shadcn/button"

interface NavButtonProps {
    path: string
    icon: React.ReactNode
    children?: React.ReactNode
}

export function NavButton({ path, icon, children }: NavButtonProps) {
    const router = useRouter()

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => router.push(path)}
            aria-label={typeof children === "string" ? children : "Navigate"}
        >
            {icon}
            <span className="sr-only">{children || "Navigate"}</span>
        </Button>
    )
}
