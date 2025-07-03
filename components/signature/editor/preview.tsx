import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/shadcn/card'
import EnhancedBackground from '../../reactbits/squares/enhanced-background'

const Preview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className='w-full h-full'
        >
            <Card className='relative py-0'>
                <EnhancedBackground
                    variant="squares"
                    intensity="medium"
                    color="secondary"
                    animation="normal"
                >
                    <br />
                    <CardContent>
                        <div className='p-4 h-[78vh] items-center justify-center mx-auto bg-secondary/60 z-10 text-card-foreground flex flex-col gap-6 rounded-xl backdrop  border py-6 shadow-sm'>
                            This is Card
                        </div>
                    </CardContent>
                    <br />
                </EnhancedBackground>
            </Card>
        </motion.div>
    )
}

export default Preview