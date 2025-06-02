import Footer from "@/components/footer";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SmartCV - AI Resume Builder",
  description:
    "SmartCV helps you create professional, AI-powered resumes in minutes. Build, customize, and export your CV with ease.",
  keywords: [
    "Resume",
    "CV",
    "AI",
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
    title: "SmartCV - AI Resume Builder",
    description:
      "SmartCV helps you create professional, AI-powered resumes in minutes. Build, customize, and export your CV with ease.",
    images: [{ url: "/logos/metaSecondary.png" }],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-background text-foreground pt-32">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 py-16 px-4 sm:px-8 bg-gradient-to-b from-primary/10 to-transparent">
        <Image
          src="/primary.svg"
          alt="Smart CV Logo"
          width={80}
          height={80}
          className="mb-6"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center tracking-tight">
          Build Your{" "}
          <span className="text-primary">Smart CV</span> Instantly
        </h1>
        <p className="text-lg sm:text-xl text-center max-w-2xl mb-8 text-muted-foreground">
          Create a professional, modern CV in minutes. Powered by AI, designed for
          impact. Stand out and land your dream job with Smart CV.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-primary/90 transition-colors"
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section
        className="py-16 px-4 sm:px-8 bg-background flex flex-col items-center"
        id="features"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Why Choose Smart CV?
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 max-w-5xl w-full">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
            <Image
              src="/file.svg"
              alt="Easy Editing"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Easy Editing</h3>
            <p className="text-muted-foreground">
              Edit and customize your CV with a simple, intuitive interface. No
              design skills needed.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
            <Image
              src="/globe.svg"
              alt="AI Assistance"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">AI Assistance</h3>
            <p className="text-muted-foreground">
              Get smart suggestions for content, layout, and keywords to make your
              CV stand out.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card">
            <Image
              src="/window.svg"
              alt="Export Options"
              width={32}
              height={32}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Export & Share</h3>
            <p className="text-muted-foreground">
              Download your CV as PDF or share a link. Apply to jobs with
              confidence and ease.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="py-16 px-4 sm:px-8 bg-muted flex flex-col items-center"
        id="how-it-works"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          How It Works
        </h2>
        <ol className="list-decimal list-inside max-w-2xl text-lg space-y-4 text-muted-foreground">
          <li>Sign up or log in to your Smart CV account.</li>
          <li>Fill in your details or import your existing CV.</li>
          <li>
            Let our AI enhance your content and design.
          </li>
          <li>Preview, export, or share your new CV instantly.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section
        className="py-12 px-4 sm:px-8 flex flex-col items-center bg-background"
        id="get-started"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Ready to create your Smart CV?
        </h2>
        <a
          href="#"
          className="inline-block bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-primary/90 transition-colors"
        >
          Start Now
        </a>
      </section>
      <Footer />
    </div>
  );
}
