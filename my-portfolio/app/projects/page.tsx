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
        <main className="min-h-screen items-center justify-center font-mono-display">
            <Navbar />

            <div className="flex flex-col items-center gap-8 px-4 mt-24 w-full">
                <h1 className="text-2xl font-bold self-start max-auto w-full mx-auto mb-16">Projects</h1>

                {/* Carousel */}
                <div className="flex items-center gap-4 w-full max-auto">
                    <button
                        onClick={handlePrev}
                        disabled={windowStart === 0}
                        className="text-3xl shrink-0 disabled:opacity-20 hover:opacity-60 transition-opacity"
                    >
                        ‹
                    </button>

                    <div className="flex-1" style={{ overflowX: "clip" }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={windowStart}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex justify-center gap-6"
                            >
                                {visibleProjects.map(project => (
                                    <Envelope
                                        key={project.id}
                                        project={project}
                                        isOpen={openId === project.id}
                                        onClick={() => handleEnvelopeClick(project.id)}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={windowStart >= projects.length - WINDOW_SIZE}
                        className="text-3xl shrink-0 disabled:opacity-20 hover:opacity-60 transition-opacity"
                    >
                        ›
                    </button>
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
                                className="border-t border-neutral-200 pt-6"
                            >
                                <h2 className="text-xl font-semibold mb-1">{openProject.title}</h2>
                                <p className="text-sm text-neutral-500 mb-3">{openProject.year}</p>
                                <p className="text-sm mb-4">{openProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {openProject.techStack.map(tech => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded-full text-white"
                                            style={{ backgroundColor: openProject.color }}
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
                                        className="underline"
                                    >
                                        GitHub
                                    </a>
                                    {openProject.liveUrl && openProject.liveUrl !== openProject.githubUrl && (
                                        <a
                                            href={openProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline"
                                        >
                                            Live
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </main>
    )
}
