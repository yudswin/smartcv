import Squares from '@/components/reactbits/squares'
import React from 'react'


interface LayeredBackgroundProps {
    layers?: {
        id: string
        component: 'squares'
        props: any
        zIndex?: number
    }[]
    children?: React.ReactNode
}

const LayeredBackground: React.FC<LayeredBackgroundProps> = ({
    layers = [
        {
            id: 'base',
            component: 'squares',
            props: {
                squareSize: 60,
                speed: 0.1,
                opacity: 0.2,
                borderColor: '#999',
                direction: 'right'
            },
            zIndex: 1
        },
        {
            id: 'overlay',
            component: 'squares',
            props: {
                squareSize: 30,
                speed: 0.3,
                opacity: 0.3,
                borderColor: '#666',
                direction: 'diagonal'
            },
            zIndex: 2
        }
    ],
    children
}) => {
    return (
        <div className="relative w-full h-full">
            {/* Background Layers */}
            {layers.map((layer) => (
                <div 
                    key={layer.id}
                    className="absolute inset-0 overflow-hidden"
                    style={{ zIndex: layer.zIndex || 1 }}
                >
                    {layer.component === 'squares' && (
                        <Squares {...layer.props} />
                    )}
                </div>
            ))}

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default LayeredBackground
