"use client"
import Image from "next/image";
import { FaCoffee, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Action() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            viewport={{ once: true }}
            className="py-12 px-4 sm:px-8 flex flex-col items-center mb-10"
            id="pricing"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                Pricing
            </h2>
            <h3 className="text-xl sm:text-2xl mb-4 text-center">
                <div>
                    Just kidding, SmartCV is free and
                    <span>
                        &nbsp;
                        <span className=" inline-block relative">
                            open-source
                            <img src="/crossout.webp" alt="crossword" className="block absolute left-0 right-[10px] bottom-[6px] w-full h-[75%] object-fill" />
                            <span className="absolute handwritten md:left-1/2 left-1 top-[calc(100%-4px)]   md:bottom-[calc(100%-4px)] text-[#3e7ff0] font-firsttimewriting text-[30px] text-nowrap font-semibold" style={{
                                textShadow: ".5px 0 0 #3e7ff0,-.5px 0 0 #3e7ff0,0 .5px 0 #3e7ff0,0 -.5px 0 #3e7ff0",
                                transform: "translate(70%) rotate(10deg)"
                            }}>Soon {"<3"} </span>
                        </span>
                    </span>
                </div>
            </h3>
            <div className="relative w-full flex flex-col items-center gap-4 sm:block">
                <Image src="/catSticker.gif" alt="catgif" width={220} height={220} className="mx-auto sm:w-[400px] sm:h-[400px] w-[220px] h-[220px]" />
                {/* Mobile buttons: stacked and centered */}
                <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mt-4 sm:hidden">
                    <button
                        className="w-full hover:scale-105 group transition-transform flex items-center bg-primary/10 hover:bg-amber-500 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[15px] font-medium gap-3 leading-none px-5 py-3"
                        onClick={() => window.open('https://github.com/yudswin/smartcv', '_blank')}
                    >
                        <FaStar className="group-hover:rotate-100 ease-in group-hover:text-yellow-200 transition-all" />
                        <span className="group-hover:text-white">Give this repository a star</span>
                    </button>
                    <button
                        onClick={() => window.open('https://ko-fi.com/yudswin', '_blank')}
                        className="w-full hover:scale-105 group transition-transform flex items-center hover:bg-amber-500 bg-primary/10 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[15px] font-medium gap-3 leading-none px-5 py-3"
                    >
                        <FaCoffee className="ease-in group-hover:text-yellow-700 transition-all" />
                        Sponsor this project
                    </button>
                </div>
                {/* Desktop buttons: absolute positioning */}
                <div className="hidden sm:block">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        viewport={{ once: true }}
                        className="absolute md:left-120  bottom-2/3">
                        <button
                            className="hover:scale-125 hover:-rotate-8 -rotate-4 group transition-transform flex items-center bg-primary/10 hover:bg-amber-500 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[14px] font-medium gap-3 leading-none px-5 py-4.5"
                            onClick={() => window.open('https://github.com/yudswin/smartcv', '_blank')}
                        >
                            <FaStar className="group-hover:rotate-100 ease-in group-hover:text-yellow-200 transition-all" />
                            <span className="group-hover:text-white">Give this repository a star</span>
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        viewport={{ once: true }}
                        className="absolute sm:right-120 bottom-1/3 ">
                        <button
                            onClick={() => window.open('https://ko-fi.com/yudswin', '_blank')}
                            className="hover:scale-125 group hover:rotate-12 rotate-6 transition-transform flex items-center hover:bg-amber-500 bg-primary/10 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[14px] font-medium gap-3 leading-none px-5 py-4.5"
                        >
                            <FaCoffee className="ease-in group-hover:text-yellow-700 transition-all" />
                            Sponsor this project
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}