import NotificationSection from "./NotificationSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notifications | SmartCV",
};

export default function NotificationPage() {
    return (
        <main className="min-h-screen pt-40 dark:bg-[#060606]">
            <NotificationSection />
        </main>
    )
}