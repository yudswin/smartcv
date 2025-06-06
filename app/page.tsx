import Footer from "@/components/footer";
import ScrollVelocity from "@/components/reactbits/scroll-vertical";
import Action from "@/components/sections/action";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Works from "@/components/sections/works";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SmartCV - Resume Builder",
  description:
    "SmartCV helps you create professional resumes in minutes. Build, customize, and export your CV with ease.",
  keywords: [
    "Resume",
    "CV",
    "Builder",
    "SmartCV",
    "Job",
    "Career",
    "Professional",
    "Template",
    "Export",
    "PDF",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Yudswin" }],
  openGraph: {
    type: "website",
    title: "SmartCV - Resume Builder",
    description:
      "SmartCV helps you create professional resumes in minutes. Build, customize, and export your CV with ease.",
    images: [{ url: "/logos/primary.svg" }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen pt-40 dark:bg-[#060606]">
      <Hero />
      <ScrollVelocity
        texts={['Easy to create ⌚ Easy to edit ✍🏻 Easy to impress 😎']}
        velocity={40}
      />  
      <Features />
      <Action />
      <Works />
      <Footer />
    </main>
  );
}
