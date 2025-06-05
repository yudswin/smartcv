import Image from "next/image";

export default function Features() {
    return (
        <section
            className="py-16 px-4 sm:px-8 flex flex-col items-center bg-secondary"
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
    )
}