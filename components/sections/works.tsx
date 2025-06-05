import Marquee from "../marquee";

export default function Works() {
    return (
        <section
            className="py-16 px-4 sm:px-8 md:mx-40 dark:bg-[#060606] bg-white flex flex-col items-center"
            id="how-it-works"
        >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                Chatbot love Smart CV!
            </h2>
            <Marquee />
        </section>
    )
}