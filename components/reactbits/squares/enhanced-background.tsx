import React from 'react'
import Squares from '@/components/reactbits/squares'

interface EnhancedBackgroundProps {
    variant?: 'squares' | 'dots' | 'lines'
    intensity?: 'low' | 'medium' | 'high'
    color?: 'primary' | 'secondary' | 'accent'
    animation?: 'slow' | 'normal' | 'fast'
    children?: React.ReactNode
}

const EnhancedBackground: React.FC<EnhancedBackgroundProps> = ({
    variant = 'squares',
    intensity = 'medium',
    color = 'secondary',
    animation = 'normal',
    children
}) => {
    // Configure based on props
    const getOpacity = () => {
        switch (intensity) {
            case 'low': return 0.2
            case 'medium': return 0.4
            case 'high': return 0.6
            default: return 0.4
        }
    }

    const getSpeed = () => {
        switch (animation) {
            case 'slow': return 0.1
            case 'normal': return 0.2
            case 'fast': return 0.5
            default: return 0.2
        }
    }

    const getBorderColor = () => {
        switch (color) {
            case 'primary': return 'hsl(var(--primary))'
            case 'secondary': return 'hsl(var(--muted-foreground))'
            case 'accent': return 'hsl(var(--accent))'
            default: return '#999'
        }
    }

    return (
        <div className="relative w-full h-full">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {variant === 'squares' && (
                    <Squares
                        squareSize={40}
                        speed={getSpeed()}
                        opacity={getOpacity()}
                        borderColor={getBorderColor()}
                        direction="diagonal"
                        gradient={{
                            enabled: true,
                            intensity: 1,
                            centerX: 0.5,
                            centerY: 0.5
                        }}
                        className="rounded-lg"
                    />
                )}
                {/* Add more variants here */}
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default EnhancedBackground
