"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";   

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: {},
        visible: {transition: {staggerChildren: 0.1}},
        exit: {transition: {staggerChildren: 0.1}}
    }

    const itemVariants = {
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -10}
    }

    const [isVisible, setIsVisible] = useState(true)

    const prevScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            setIsVisible(currentY < prevScrollY.current || currentY < 50)
            prevScrollY.current = currentY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <motion.nav 
            animate={{y: isVisible ? 0: -100}}
            transition={{duration: 0.3}}
            className="fixed top-0 left-0 w-full"
        >
            <div className="max-w-4xl mx-auto flex justify-between py-4">
                <motion.div
                    className="hover:bg-gray-700 rounded px-1 pt-1 transition"
                >
                    <Link href="/">
                        <Image src="/images/house.svg" alt="Home" width={32} height={32} className="invert"/>
                    </Link>
                </motion.div>
                
                
                <div className="relative">
                    <motion.button onClick={() => setIsOpen(!isOpen)}
                        className="hover:bg-gray-700 rounded px-1 py-1 transition"
                    >
                        <Image src="/images/text-align-justify.svg" alt="Dropdown" width={32} height={32} className="invert"/>
                    </motion.button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute right-0 mt-2 text-center"
                            >
                                <motion.li 
                                    variants={itemVariants}
                                    className="hover:bg-blue-700 transition hover:scale-110 px-2 py-1 rounded"
                                >
                                    <Link href="/about">About</Link>
                                </motion.li>
                                <motion.li 
                                    variants={itemVariants}
                                    className="hover:bg-gray-700 transition hover:scale-110 px-2 py-1 rounded"
                                >
                                    <Link href="/">Home</Link>
                                </motion.li>
                                <motion.li 
                                    variants={itemVariants}
                                    className="hover:bg-orange-700 transition hover:scale-110 px-2 py-1 rounded"
                                >
                                    <Link href="/projects">Projects</Link>
                                </motion.li>
                                <motion.li 
                                    variants={itemVariants}
                                    className="hover:bg-purple-700 transition hover:scale-110 px-2 py-1 rounded"
                                >
                                    <Link href="/resume">Resume</Link>
                                </motion.li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
}