"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import RotatingText from "../reactbits/rotating-text";
import Magnet from "../reactbits/magnet";
import ShinyText from "../reactbits/shiny-text";
import { motion } from "framer-motion";

const checkList = [
    "Create a professional CV in minutes.",
    "Designed for maximum impact."
]

export default function Hero() {
    const router = useRouter();
    return (

        <section className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 relative" >
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className=" flex flex-col sm:items-start z-10">
                <h1 className="text-2xl pt-12 flex flex-col sm:text-4xl sm:items-start items-center font-bold text-left tracking-tight">
                    <Image src="/primary.svg" alt="SmartCV Logo" width={136} height={136} className="dark:hidden dark:-rotate-90 scale-100 block transition-all" />
                    <Image src="/secondary.svg" alt="SmartCV Logo" width={136} height={136} className="hidden rotate-90 transition-all dark:block dark:rotate-0" />
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <span className="text-3xl sm:text-4xl text-nowrap">Instantly Build Your{" "}</span>
                        <RotatingText
                            texts={['CV', 'Resume', 'Portfolio', 'Profile']}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-secondary overflow-hidden w-full sm:min-w-50 py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>
                </h1>
                <div className="text-xl sm:text-2xl gap-2 flex flex-col pl-4 text-left font-bold handwritten max-w-2xl mb-8 mt-2 text-muted-foreground">
                    <div className="flex flex-1 flex-col justify-start gap-1">
                        {checkList.map((item) => (
                            <span key={item}>- {item}</span>
                        ))}
                        <span>
                            - &nbsp;
                            <span className=" inline-block relative">
                                Guarantee
                                <img src="/crossout.webp" alt="crossword" className="block absolute left-0 right-[10px] top-[6px] w-full h-[75%] object-fill" />
                                <span className="absolute left-1/2 top-[calc(100%-4px)] text-[#3e7ff0] font-firsttimewriting text-[30px] text-nowrap font-semibold" style={{
                                    textShadow: ".5px 0 0 #3e7ff0,-.5px 0 0 #3e7ff0,0 .5px 0 #3e7ff0,0 -.5px 0 #3e7ff0",
                                    transform: "translate(-50%) rotate(4deg)"
                                }}>Hopefully :)</span>
                            </span>
                            &nbsp; for interview attention.
                        </span>
                    </div>
                </div>
                <Magnet padding={400} disabled={false} magnetStrength={50} innerClassName="flex flex-1 items-center justify-center sm:justify-start w-full">
                    <button
                        type="button"
                        onClick={e => {
                            e.preventDefault();
                            router.push("/builder");
                        }}
                        className="cursor-pointer group inline-block mt-10 bg-primary px-8 sm:px-20 py-3 rounded-lg font-semibold text-lg shadow hover:bg-primary/90 transition-colors w-full max-w-xs sm:w-auto"
                    >
                        <ShinyText text="Get Started >" disabled={false} speed={10} className="group-hover:text-secondary transition-colors text-[#c9c7c7a4] dark:text-gray-800 delay-75" />
                    </button>
                </Magnet>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                viewport={{ once: true }}
                className="hidden pt-50 overflow-y-clip items-center md:block pointer-events-none select-none relative">
                <img
                    src="/splash_image.gif"
                    alt="Splash Animation"
                    className="w-[255px] scale-200 h-[330px] border translate-y-10  border-black/50 relative z-1"
                    style={{
                        transform:
                            " rotate(4deg)"
                    }}
                />
                <div
                    className="absolute w-[255px] scale-200 h-[330px] border translate-x-10 translate-y-20 bottom-0 z-0 bg-white border-black/50"
                    style={{
                        transform: 'rotate(4deg)'
                    }}
                />
            </motion.div>
            {/* Mobile splash image */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col md:hidden w-full justify-center mt-6 overflow-clip p-4">
                <h2 className="text-2xl py-4 text-center">
                    Preview
                </h2>
                <img
                    src="/splash_image.gif"
                    alt="Splash Animation"
                    className="w-full border border-black/30 object-cover shadow-md"
                />
            </motion.div>
        </section>
    )
}