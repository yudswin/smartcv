import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="z-50 fixed bottom-8 right-8">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        key="scroll-to-top"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.4 }}
                        onClick={scrollToTop}
                        aria-label="scroll to top"
                        className="rounded-full bg-primary text-background dark:bg-primary dark:text-background flex h-10 w-10 cursor-pointer items-center justify-center shadow-lg transition duration-300 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 15V5M10 5L5 10M10 5l5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="sr-only">scroll to top</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
