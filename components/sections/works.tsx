"use client"
import Marquee from "../marquee";
import { motion } from "framer-motion";


export default function Works() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="py-16 px-4 sm:px-8 md:mx-40 dark:bg-[#060606] bg-white flex flex-col items-center"
            id="how-it-works"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Chatbot love Smart CV!
            </h2>
            <Marquee />
        </motion.section>
    )
}