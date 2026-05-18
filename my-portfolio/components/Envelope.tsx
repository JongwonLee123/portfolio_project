"use client"

import {motion} from "framer-motion"

import {Project} from "@/data/projects"

type Props = {
    project: Project
    isOpen: boolean
    onClick: () => void
}

export default function Envelope({project, isOpen, onClick}: Props){
    return(
        <motion.div
            whileHover={isOpen ? undefined : "hover"}
            onClick={onClick}
            className="relative cursor-pointer w-64 lg:scale-125" 
            style={{aspectRatio: "1.6"}}
        >
            {/* Envelope body */}
            <div className="absolute inset-0 rounded-md bg-[#111]"></div>
            {/* Left Flap */}
            <div
                className="absolute inset-0 bg-[#161616]"
                style={{
                    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    zIndex: 2,
                }}
            />
            {/* Right Flap */}
            <div
                className="absolute inset-0 bg-[#161616]"
                style={{
                    clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                    zIndex: 2,
                }}
            />
            {/* bottom triangle */}
            <div
                className="absolute inset-0 bg-[#141414]"
                style={{
                    clipPath: "polygon(0 100%, 50% 40%, 100% 100%)",
                    zIndex: 2
                }}
            />
            {/* top flap */}
            <motion.div
                className="absolute inset-0 bg-[#111] rounded-t-md"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 70%)",
                    transformOrigin: "top center",
                    zIndex: 3,
                    transformPerspective: 800,
                }}
                variants={{
                    closed: { rotateX: 0,    zIndex: 3 },
                    hover:  { rotateX: -150, zIndex: 3 },
                    open:   { rotateX: -270, zIndex: 0 },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{duration: 0.45, ease: "easeInOut"}}
            />
            {/* peek card */}
            <motion.div
                className="absolute rounded"
                style={{
                    left: "12%",
                    right: "12%",
                    bottom: "6px",
                    height: "55%",
                    backgroundColor: project.color,
                    zIndex: 1,
                }}
                variants={{
                    closed: { y: "0%" },
                    hover:  { y: "-120%" },
                    open:   { y: "-170%" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 300, damping: 35 }}    
            >
                {/* project title */}
                <p className="text-white text-xs font-medium text-center mt-2 px-2">
                    {project.title}
                </p>

                {/* tech tags */}
                <div className="flex flex-wrap justify-center gap-1 mt-1 px-2">
                    {project.techStack.slice(0, 2).map(tag => (
                        <span 
                            key={tag} 
                            className="text-white text-[8px] px-1.5 py-0.5"
                            style={{background: "rgba(255,255,255,0.2)"}}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
            
        </motion.div>
    )
}