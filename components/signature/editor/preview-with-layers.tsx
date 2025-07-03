import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/shadcn/card'
import LayeredBackground from './layered-background'

const PreviewWithLayers = () => {
    const backgroundLayers = [
        {
            id: 'base',
            component: 'squares' as const,
            props: {
                squareSize: 80,
                speed: 0.05,
                opacity: 0.15,
                borderColor: '#888',
                direction: 'right'
            },
            zIndex: 1
        },
        {
            id: 'mid',
            component: 'squares' as const,
            props: {
                squareSize: 40,
                speed: 0.2,
                opacity: 0.25,
                borderColor: '#666',
                direction: 'diagonal'
            },
            zIndex: 2
        },
        {
            id: 'top',
            component: 'squares' as const,
            props: {
                squareSize: 20,
                speed: 0.4,
                opacity: 0.2,
                borderColor: '#444',
                direction: 'up'
            },
            zIndex: 3
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className='w-full h-full'
        >
            <Card className='relative py-0'>
                <LayeredBackground layers={backgroundLayers}>
                    <CardContent>
                        <div className='p-40 mx-auto bg-secondary/80 backdrop-blur-sm z-10 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm'>
                            Complex layered background with multiple animated grids
                        </div>
                    </CardContent>
                </LayeredBackground>
            </Card>
        </motion.div>
    )
}

export default PreviewWithLayers
