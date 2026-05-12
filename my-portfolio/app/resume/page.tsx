"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function Resume() {
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <iframe
                src="/jongwon-lee-resume-2026.pdf"
                className="w-full max-w-2xl mx-auto mt-4 border-2 border-gray-300 rounded-lg"
                style={{ height: "80vh" }}
            />
            <Footer />
        </main>
    );
}
