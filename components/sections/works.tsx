export default function Works() {
    return (
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
    )
}