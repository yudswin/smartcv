"use client";
import { motion } from "framer-motion";

export default function Footer() {
    const heartIcon = (
        <svg
            aria-label="love"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="inline align-text-bottom mx-1"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-border bg-card w-full text-center text-muted-foreground mt-12"
        >
            <div className="border-t border-border py-6 px-4">
                <p className="inline-flex items-center justify-center">
                    Made with{heartIcon}by&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/yudswin/" className="hover:text-primary">@Yudswin</a>
                </p>
            </div>
        </motion.footer>
    );
}
