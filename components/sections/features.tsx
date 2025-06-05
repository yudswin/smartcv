"use client"
import ChromaGrid from "@/components/reactbits/chroma-grid";
import COLORS from "@/constants/colors";
import { SiAdblock, SiSpeedtest, SiAdobeacrobatreader, SiMinutemailer, SiGithub, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";


const featureItems = [
    {
        image: <SiAdblock size={48} color="white" />,
        title: "Free forever!",
        subtitle: "No ads, no payments.",
        borderColor: '#eb7600',
        gradient: `linear-gradient(145deg, ${COLORS.red}, #0c0a09)`,
    },
    {
        image: <SiAdobeacrobatreader size={48} color="white" />,
        title: "Print/export as PDF",
        subtitle: "Select your destination from the print menu. ATS friendly.",
        borderColor: '#eb0c00',
        gradient: `linear-gradient(145deg, ${COLORS.lavender}, #0c0a09)`,
    },
    {
        image: <SiMinutemailer size={48} color="white" />,
        title: "No sign-in needed",
        subtitle: "Just copy and paste and you're back!",
        borderColor: '#004beb',
        gradient: `linear-gradient(145deg, ${COLORS.purple}, #0c0a09)`,
    },
    {
        image: <SiSpeedtest size={48} color="white" />,
        title: "Speedrun it",
        subtitle: "Builder lets you add section templates with a click. Creating is as easy as filling those in.",
        borderColor: '#00b506',
        gradient: `linear-gradient(145deg, ${COLORS.green}, #0c0a09)`,
    },
];

export default function Features() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
            id="features"
        >
            <div
                className="w-full">
                <ChromaGrid
                    items={featureItems}
                    radius={320}
                    damping={0.4}
                    fadeOut={0.1}
                    ease="power3.out"
                    title="Why Choose Smart CV?"
                />
            </div>
        </motion.section>
    )
}