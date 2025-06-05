"use client"
import Image from "next/image";
import { FaCoffee, FaStar } from "react-icons/fa";

export default function Action() {
    return (
        <section
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
                            <span className="absolute handwritten left-1/2 bottom-[calc(100%-4px)] text-[#3e7ff0] font-firsttimewriting text-[30px] text-nowrap font-semibold" style={{
                                textShadow: ".5px 0 0 #3e7ff0,-.5px 0 0 #3e7ff0,0 .5px 0 #3e7ff0,0 -.5px 0 #3e7ff0",
                                transform: "translate(70%) rotate(10deg)"
                            }}>Soon {"<3"} </span>
                        </span>
                    </span>
                </div>
            </h3>
            <div className="relative">
                <Image src="/catSticker.gif" alt="catgif" width={400} height={400} />
                <div className="absolute -left-40 bottom-2/3">
                    <button
                        className="hover:scale-125 hover:-rotate-4 group transition-transform flex items-center bg-primary/10 hover:bg-amber-500 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[14px] font-medium gap-3 leading-none px-5 py-4.5"
                        onClick={() => window.open('https://github.com/yudswin/smartcv', '_blank')}
                    >
                        <FaStar className="group-hover:rotate-100 ease-in group-hover:text-yellow-200 transition-all" />
                        <span className="group-hover:text-white">Give this repository a star</span>
                    </button>
                </div>
                <div className="absolute -right-48 bottom-1/3 ">
                    <button
                        onClick={() => window.open('https://ko-fi.com/yudswin', '_blank')}
                        className="hover:scale-125 group hover:rotate-8 transition-transform flex items-center hover:bg-amber-500 bg-primary/10 border border-primary/20 rounded-[3px] text-primary cursor-pointer flex-row text-[14px] font-medium gap-3 leading-none px-5 py-4.5"
                    >
                        <FaCoffee className="ease-in group-hover:text-yellow-700 transition-all" />
                        Sponsor this project
                    </button>
                </div>
            </div>
        </section>
    )
}