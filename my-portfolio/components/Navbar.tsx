"use client"

import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname();
    return(
        <nav className="font-mono-display text-tertiary flex flex-row justify-between border-b border-tertiary/30 py-6 px-8">
            <p><a href="/" className="hover:text-primary">JKL DEV</a></p>
            <ul className="flex flex-row gap-8 text-sm [&>li]:hover:text-primary">
                <li><a href="/" className={pathname === "/" ? "text-secondary" : ""}>home</a></li>
                <li><a href="/about" className={pathname === "/about" ? "text-secondary" : ""}>about</a></li>
                <li><a href="/projects" className={pathname === "/projects" ? "text-secondary" : ""}>projects</a></li>
                <li><a href="/resume" className={pathname === "/resume" ? "text-secondary" : ""}>resume</a></li>
            </ul>
        </nav>
    );
}