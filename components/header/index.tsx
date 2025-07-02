import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./theme-toggler"
import { NavButton } from "./nav-button"
import { CiMail } from "react-icons/ci";
import { Banner } from "./banner";


export default function Header() {
    return (
        <header className={
            "fixed left-0 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition duration-100 sticky-menu"
        }>
            <Banner />
            <div className="relative mx-auto max-w-screen-xl flex items-center justify-between px-4 md:px-8 h-24 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/primary.svg" alt="SmartCV Logo" width={72} height={72} className="dark:hidden dark:-rotate-90 scale-100 block transition-all" />
                    <Image src="/secondary.svg" alt="SmartCV Logo" width={72} height={72} className="hidden rotate-90 transition-all dark:block dark:rotate-0" />
                </Link>
                <nav className="flex items-center gap-2">
                    <NavButton path="/notification" icon={<CiMail />} />
                    <ModeToggle />
                </nav>
            </div>
        </header>
    )
}
