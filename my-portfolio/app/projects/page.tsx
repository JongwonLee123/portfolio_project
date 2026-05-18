"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/projects"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Envelope from "@/components/Envelope"

const WINDOW_SIZE = 3

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0 }),
}

export default function Projects() {
    const [openId, setOpenId]           = useState<string | null>(null)
    const [windowStart, setWindowStart] = useState(0)
    const [direction, setDirection]     = useState(0)

    const visibleProjects = projects.slice(windowStart, windowStart + WINDOW_SIZE)
    const openProject     = projects.find(p => p.id === openId) ?? null

    const handleEnvelopeClick = (id: string) =>
        setOpenId(prev => (prev === id ? null : id))

    const handlePrev = () => {
        setDirection(-1)
        setWindowStart(w => Math.max(0, w - 1))
    }

    const handleNext = () => {
        setDirection(1)
        setWindowStart(w => Math.min(projects.length - WINDOW_SIZE, w + 1))
    }

    return (
        <main className="font-mono-display">
            <Navbar />

            <div className="flex flex-col">
                <section className="flex flex-row justify-between items-center mx-8 my-12">
                    <section>
                        <p className="text-accent">&#91; portfolio &#93;</p>
                        <div className="text-5xl font-serif-display">
                            <h1 className="my-3">Projects.</h1>
                            <h1 className="text-tertiary italic">things I built.</h1>
                        </div>
                    </section>

                    <section className="flex flex-row text-tertiary gap-6">
                        <section className="text-right">
                            <h2 className="text-2xl font-serif-display">{projects.length}</h2>
                            <p className="text-xs">total projects</p>
                        </section>
                        <section className="flex gap-3 self-start [&>button]:border [&>button]:text-primary [&>button]:border-primary [&>button]:p-2 [&>button]:rounded-xl [&>button]:disabled:opacity-20 [&>button]:transition-opacity [&>button]:hover:opacity-60">
                            <button onClick={handlePrev} disabled={windowStart === 0}>&#x2190;</button>
                            <button onClick={handleNext} disabled={windowStart >= projects.length - WINDOW_SIZE}>&#x2192;</button>
                        </section>
                    </section>
                </section>

                <div className="border-b border-tertiary/30"></div>

                {/* Carousel */}
                <div className="flex items-center gap-4 w-full max-auto my-12">
                    <div className="flex-1" style={{ overflowX: "clip" }}>
                        <div className="flex justify-center md:gap-6 lg:gap-32">
                            <AnimatePresence mode="popLayout" custom={direction}>
                                {visibleProjects.map(project => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <Envelope
                                            project={project}
                                            isOpen={openId === project.id}
                                            onClick={() => handleEnvelopeClick(project.id)}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Info panel */}
                <div className="w-full max-auto">
                    <AnimatePresence mode="wait">
                        {openProject && (
                            <motion.div
                                key={openProject.id}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 16 }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="border-t border-tertiary/30"></div>
                                <section className="mx-8 my-6 text-tertiary">
                                    <p className="text-accent">&#91; opened &#93;</p>
                                    <h2 className="font-serif-display text-3xl my-2 text-primary">{openProject.title}</h2>
                                    <p className="text-xs text-neutral-500">{openProject.year}</p>
                                    <p className="text-xs my-6">{openProject.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {openProject.techStack.map(tech => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1"
                                                style={{ border: `1px solid ${openProject.color}`, color: openProject.color }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 text-sm">
                                        <a
                                            href={openProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-primary"
                                        >
                                            github &#8599;
                                        </a>
                                        {openProject.liveUrl && openProject.liveUrl !== openProject.githubUrl && (
                                            <a
                                                href={openProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline hover:text-primary"
                                            >
                                                live &#8599;
                                            </a>
                                        )}
                                    </div>
                                </section>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </main>
    )
}
