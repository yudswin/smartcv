"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-border bg-card text-muted-foreground mt-12"
        >
            <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between gap-8">
                {/* Logo and About */}
                <div className="md:w-1/3">
                    <a href="/" className="inline-block mb-4">
                        <Image src="/primary.svg" alt="SmartCV Logo" width={80} height={60} />
                    </a>
                    <p className="mb-6 text-sm">SmartCV helps you create professional, AI-powered resumes in minutes. Build, customize, and export your CV with ease.</p>
                    <div>
                        <span className="block uppercase text-xs tracking-widest mb-1">Contact</span>
                        <a href="mailto:hello@smartcv.app" className="font-medium hover:underline">hello@smartcv.app</a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="md:w-1/3 flex flex-col md:flex-row gap-8">
                    <div>
                        <h4 className="mb-4 font-semibold text-base text-foreground">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/" className="hover:text-primary">Home</a></li>
                            <li><a href="/builder" className="hover:text-primary">Builder</a></li>
                            <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
                            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold text-base text-foreground">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-primary">About</a></li>
                            <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                            <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
                            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                {/* Newsletter */}
                <div className="md:w-1/3">
                    <h4 className="mb-4 font-semibold text-base text-foreground">Newsletter</h4>
                    <p className="mb-4 text-sm">Subscribe to receive future updates</p>
                    <form className="flex items-center max-w-xs">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-full border border-border px-4 py-2 text-sm bg-background focus:border-primary focus:outline-none"
                        />
                        <button
                            type="submit"
                            aria-label="signup to newsletter"
                            className="ml-2 px-4 py-2 rounded-full bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
                        >
                            →
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-xs gap-4">
                <div>
                    &copy; {new Date().getFullYear()} SmartCV. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
                    <a href="/support" className="hover:text-primary">Support</a>
                </div>
                <div className="flex gap-3">
                    <a href="#" aria-label="Twitter" className="hover:text-primary">{/* Twitter icon */}
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M18.162 5.656c-.763.338-1.573.56-2.402.658.874-.523 1.528-1.345 1.84-2.314-.82.488-1.719.83-2.656 1.015-.629-.673-1.463-1.12-2.372-1.27-.91-.15-1.843.004-2.656.439-.813.435-1.459 1.126-1.838 1.966-.38.84-.471 1.782-.26 2.68C4.155 8.746 2.528 8.314 1.043 7.561c-.371.638-.566 1.364-.565 2.103 0 1.45.738 2.731 1.86 3.481-.664-.021-1.313-.2-1.894-.523v.052c0 1.017.355 1.953.967 2.7.612.748 1.463 1.261 2.41 1.453-.616.167-1.262.192-1.889.072.267.831.787 1.558 1.488 2.079.701.521 1.547.81 2.42.826 7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54.819-.592 1.526-1.325 2.088-2.165z" /></svg>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-primary">{/* LinkedIn icon */}
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M6.94 5c0 .53-.211 1.039-.586 1.414C5.978 6.789 5.469 7 4.939 7c-.53 0-1.039-.211-1.414-.586A1.995 1.995 0 0 1 2.94 5c0-.53.211-1.039.586-1.414A1.995 1.995 0 0 1 4.94 3c.53 0 1.039.211 1.414.586.375.375.586.884.586 1.414zM7 8.48H3V21h4V8.48zM13.32 8.48h-3.98V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" /></svg>
                    </a>
                </div>
            </div>
        </motion.footer>
    );
}
