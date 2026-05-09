"use client"

import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <div className="flex flex-row">
                <div className="bg-white-200">
                    <h1>Hi, I'm Jongwon</h1>
                </div>
                <div className="bg-purple-200">
                    <h1>TESTING</h1>
                </div>
            </div>
        </main>
    )
}