"use client"
import { NEWS } from "@/constants/news";
import { NewsCard } from "@/components/news";
import { motion } from "framer-motion";

export default function NotificationSection() {
    return (
        <section className="py-12 px-4 sm:px-8 flex flex-col items-center mb-10">
            {NEWS.map((notification, idx) => (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 * idx }}
                    viewport={{ once: true }}
                    key={idx} className="w-full max-w-3xl mb-6">
                    <NewsCard notification={notification} />
                </motion.div>
            ))}
        </section>
    )
}
