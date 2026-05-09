"use client"

import { usePathname } from "next/navigation";


export default function Navbar(){
    const pathname = usePathname();
    return(
        <nav className="font-mono-display text-tertiary flex flex-row justify-between">
            <p className="ml-8 mt-4">JKL DEV</p>
            <ul className="flex flex-row gap-8 mt-4 mr-8 text-sm">
                <li><a href="/" className={pathname === "/" ? "text-secondary" : ""}>home</a></li>
                <li><a href="/about" className={pathname === "/about" ? "text-secondary" : ""}>about</a></li>
                <li><a href="/projects" className={pathname === "/projects" ? "text-secondary" : ""}>projects</a></li>
                <li><a href="/resume" className={pathname === "/resume" ? "text-secondary" : ""}>resume</a></li>
            </ul>
        </nav>
    );
}