"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    floatingLabel?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, floatingLabel = false, ...props }, ref) => {
        const inputId = props.id || React.useId()

        if (floatingLabel && label) {
            return (
                <label htmlFor={inputId} className="relative">
                    <input
                        {...props}
                        id={inputId}
                        type={type}
                        placeholder=""
                        className={cn(
                            "peer mt-0.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            className
                        )}
                        ref={ref}
                    />
                    <span className="pointer-events-none absolute inset-y-2.5 start-3 -translate-y-5 bg-background px-0.5 text-xs text-muted-foreground transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm  peer-focus:text-xs peer-focus:-translate-y-5 ease-in-out">
                        {label}
                    </span>
                </label>
            )
        }

        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export { Input }
