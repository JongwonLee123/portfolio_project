"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"

import {useRouter} from "next/navigation";
import {motion} from "framer-motion";

export default function Home() {
    const router = useRouter();

    return (
        <main className="flex flex-col flex-1">
            <Navbar />
            <div className="flex flex-row font-mono-display px-8 flex-1">
                <div className="flex flex-col flex-[2] border-r border-tertiary/30 pr-8 pt-24">
                    <motion.span
                        className="w-fit border border-accent text-accent py-1 px-2 rounded-sm"
                        initial=""
                        animate=""
                    >
                        open to new grad &middot; june 2026
                    </motion.span>

                    {/* Greeting Section */}
                    <section className="text-6xl font-serif-display my-12">
                        <h1 className="text-primary">Hi, I'm Jongwon</h1>
                        <h1 className="text-tertiary italic">I love building</h1>
                    </section>

                    {/* info */}
                    <p className="text-tertiary">
                        CS senior @ UC San Diego
                        <br />
                        Full-stack dev &middot; sports enthusiast &middot; ML.
                        <br />
                        Hooper at RIMAC &middot; Gamer at heart
                    </p>

                    {/* buttons */}
                    <div className="flex gap-4 my-12">
                        <button className="text-black bg-primary rounded px-2 py-1 hover:bg-tertiary hover:text-primary" onClick={() => router.push("/projects")}>View Projects</button>
                        <button className="border border-tertiary text-tertiary rounded px-2 py-1 hover:bg-tertiary hover:text-primary" onClick={() => router.push("/about")}>About Me</button>
                    </div>

                    {/* skills */}
                    <div className="flex flex-row gap-4 text-sm items-center text-tertiary">
                        <p>stack</p>
                        <span className="border-t border-tertiary w-8 block"></span>
                        <ul className="flex flex-row gap-3 [&>li]:border [&>li]:border-tertiary [&>li]:rounded [&>li]:px-2 [&>li]:py-0.5">
                            <li>react</li>
                            <li>next.js</li>
                            <li>python</li>
                            <li>typescript</li>
                            <li>postgresql</li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col flex-[1] pl-8 text-tertiary [&>section]:my-12 [&>section:first-of-type]:mt-0 pt-24">
                    {/* top */}
                    <section>
                        <Image
                            src="/images/profile.jpg"
                            alt="Profile Picture"
                            width={100}
                            height={100}
                            className="rounded mb-4"
                        />
                        <h2 className="text-primary">Jongwon L.</h2>
                        <p className="text-sm">
                            UCSD &middot; CS '26
                            <br/>
                            La Jolla, CA
                            <br/>
                            Software Engineer
                        </p>
                    </section>

                    <span className="border-b border-tertiary/30"></span>
                    
                    {/* middle */}
                    <section>
                        <ul className="[&>li]:border-b [&>li]:border-tertiary/30 [&>li]:mb-4 text-sm [&>li]:hover:text-primary">
                            <li><a href="/projects">projects ↗</a></li>
                            <li><a href="/about">about ↗</a></li> 
                            <li><a href="/resume">resume ↗</a></li>
                            <li><a href="https://github.com/JongwonLee123" target="_blank" rel="noopener noreferrer">github ↗</a></li>
                        </ul>
                    </section>

                    <span className="border-b border-tertiary/30"></span>
                    
                    {/* bottom */}
                    <section>
                        <ol className="[&>li]:text-sm">
                            <li>basketball &middot; pool &middot; valorant &middot; outdoors &middot; ucsd &middot; pokemon</li>
                        </ol>
                    </section>
                </div>
            </div>
            <Footer/>
        </main>
    )
}