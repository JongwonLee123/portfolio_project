"use client";

export default function Footer(){
    return(
        <footer className="px-8 font-mono-display text-tertiary text-sm flex flex-row justify-between border-t border-tertiary/30 py-6">
            <ul className="flex flex-row gap-4 [&>li]:hover:text-primary">
                <li><a href="mailto:jklee4589@gmail.com">jklee4589@gmail.com</a></li>
                <li>&middot;</li>
                <li><a href="https://www.linkedin.com/in/jongwon-lee-39a3ba203">linkedin</a></li>
                <li>&middot;</li>
                <li><a href="https://github.com/JongwonLee123">github</a></li>
            </ul>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-primary">scroll ↑</button>
        </footer>
    )
}