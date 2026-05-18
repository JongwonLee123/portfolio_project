"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Resume() {
    return (
        <main className="h-screen flex flex-col font-mono-display">
            <Navbar />
            <section className="flex- flex-col">
                {/* title */}
                <section className="flex flex-row justify-between items-end mx-8 my-8">
                    <section>
                        <p className="text-accent">&#91; resume &#93;</p>
                        <div className="font-serif-display text-5xl text-primary">
                            <h1 className="py-1">Experience.</h1>
                            <h1 className="text-tertiary italic">the full picture.</h1>
                        </div>
                    </section>
                    <section className="[&_button]:border [&_button]:border-primary [&_button]:rounded-lg [&_button]:px-3 [&_button]:py-2 [&_button]:hover:bg-primary/30">
                        <a href="./jongwon-lee-resume-2026.pdf">
                            <button className="mr-4">download pdf &#8595;</button>
                        </a>
                        <button onClick={() => window.print()}>view raw &#8599;</button>
                    </section>
                </section>

                <div className="border-b border-tertiary/30"></div>

                <section className="flex flex-row text-tertiary text-xs">
                    {/* left bar */}
                    <section className="flex-[1] flex flex-col [&>section]:mx-4 [&>section]:my-8">
                        <section>
                            <div className="flex flex-row gap-2 items-center mb-6">
                                <h3>contents</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>
                            <div className="flex flex-col gap-2 [&>div]:hover:text-primary [&>div]:active:text-accent [&>a]:hover:text-primary">
                                <a href="#education" className="flex flex-row justify-between">
                                    <p>education</p>
                                    <span>&#8594;</span>
                                </a>
                                <div className="border-b border-tertiary/30"></div>
                                <a href="#experience" className="flex flex-row justify-between">
                                    <p>experience</p>
                                    <span>&#8594;</span>
                                </a>
                                <div className="border-b border-tertiary/30"></div>
                                <a href="#projects" className="flex flex-row justify-between">
                                    <p>projects</p>
                                    <span>&#8594;</span>
                                </a>
                                <div className="border-b border-tertiary/30"></div>
                                <a href="#skills" className="flex flex-row justify-between">
                                    <p>skills</p>
                                    <span>&#8594;</span>
                                </a>
                            </div>
                            

                        </section>
                        
                        <div className="border-b border-tertiary/30"></div>

                        <section>
                            <div className="flex flex-row gap-2 items-center mb-6">
                                <h3>contact</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li>jklee4589@gmail.com</li>
                                <li>(510) 766-6853</li>
                                <li><a href="">La Jolla, CA</a></li>
                                <div className="flex flex-row gap-4">
                                    <li className="hover:text-primary"><a href="https://www.linkedin.com/in/jongwon-lee-39a3ba203/">linkedin</a></li>
                                    <span>&middot;</span>
                                    <li className="hover:text-primary"><a href="https://github.com/JongwonLee123">github</a></li>
                                </div>
                            </ul>
                        </section>
                        
                        <div className="border-b border-tertiary/30"></div>

                        <section>
                            <div className="flex flex-row gap-2 items-center mb-2">
                                <h3>last updated</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>
                            <p>May 2026</p>
                        </section>
                        
                        <div className="border-b border-tertiary/30"></div>

                        <section>
                            <a href="/jongwon-lee-resume-2026.pdf">
                                <p className="text-accent hover:text-primary">download pdf &#8595;</p>
                            </a>
                        </section>

                        <div className="border-b border-tertiary/30"></div>

                        <section>

                        </section>
                    </section>

                    <div className="border-r border-tertiary/30"></div>

                    {/* right bar */}
                    <section className="flex-[3] flex-col [&>section]:mx-6 [&>section]:my-8">
                        <section className="my-8">
                            <div id="education" className="flex flex-row gap-2 items-center mb-8">
                                <h3>education</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>

                            <section className="flex flex-col gap-4">
                                <section className="flex flex-row gap-4 justify-between items-start">
                                    <div className="flex flex-row items-start justify-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5"></div>
                                        <div className="flex flex-col">
                                            <h2 className="text-primary text-sm">University of California, San Diego</h2>
                                            <p className="text-xs">B.S. Computer Science &middot; Jacobs School of Engineering</p>
                                        </div>  
                                    </div>
                                    <span className="text-xs">Sep 2024 - June 2026</span>
                                </section>

                                <div className="flex-1 border-b border-tertiary/30"></div>
                                
                                <section className="flex flex-row gap-4 justify-between items-start">
                                    <div className="flex flex-row items-start justify-start gap-2">
                                        <div className="w-2 h-2 rounded-full bg-[#185FA5] mt-1.5"></div>
                                        <div className="flex flex-col">
                                            <h2 className="text-primary text-sm">Ohlone College</h2>
                                            <p className="text-xs">A.S. Computer Science & Mathematics &middot; Honors</p>
                                        </div>  
                                    </div>
                                    <span className="text-xs">Aug 2022 - May 2024</span>
                                </section>
                            </section>
                        </section>

                        <div className="border-b border-tertiary/30"></div>

                        <section>
                            <div id="experience"className="flex flex-row gap-2 items-center mb-8">
                                <h3>work experience</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>

                            <section className="flex flex-col">
                                <div className="flex flex-row">
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h3 className="text-primary">Software Developer Intern</h3>
                                        <h3>Frugal Innovation Hub, SCU</h3>
                                    </div>
                                        
                                    <span className="ml-auto">June 2023 - Aug 2023</span>
                                </div>
                                
                                <ol className="mt-2 text-xs list-disc pl-4 [&>li::marker]:text-accent">
                                    <li>
                                        Built Easy Tracker, an Android personal finance app in Flutter (Dart), serving ESL users — implemented 4+ modular
UI components for transaction logs and portfolio visualization, reducing average screen load time by ~25%
                                    </li>
                                    <li>
                                        Integrated Firebase Authentication and real-time database sync, enabling secure login and live data updates with
zero reported auth failures during the demo period
                                    </li>
                                    <li>
                                        Collaborated in weekly cross-functional technical debriefs with students and industry professionals, iterating on 3
major feature revisions based on feedback
                                    </li>
                                </ol>

                            </section>

                        </section>

                        <div className="border-b border-tertiary/30"></div>

                        <section className="flex flex-col gap-4">
                            <div id="projects" className="flex flex-row gap-2 items-center mb-4">
                                <h3>projects</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>

                            <section className="flex flex-col">
                                <div className="flex flex-row">
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h3 className="text-primary">Portfolio</h3>
                                        <ul className="flex flex-row text-[#185FA5] gap-2">
                                            <li>React</li>
                                            <span>&middot;</span>
                                            <li>Javascript</li>
                                            <span>&middot;</span>
                                            <li>Tailwind</li>
                                            <span>&middot;</span>
                                            <li>Next.js</li>
                                        </ul>
                                    </div>
                                        
                                    <span className="ml-auto">Jan 2026 - Present</span>
                                </div>
                                
                                <ol className="mt-2 text-xs list-disc pl-4 [&>li::marker]:text-accent">
                                    <li>
                                        Designed and built a personal portfolio using Next.js and Tailwind CSS, featuring a multi-page layout with dedicated sections for projects, resume, and about — deployed on Vercel with continuous delivery from GitHub
                                    </li>
                                    <li>
                                        Implemented responsive UI components including an animated envelope, project cards, and skills cards, ensuring consistent design across desktop and mobile viewports
                                    </li>
                                    <li>
                                        Structured the codebase using the Next.js App Router with reusable React components, maintaining clear separation between layout, page, and component layers
                                    </li>
                                </ol>
                            </section>

                            <div className="border-b border-tertiary/30"></div>

                            <section className="flex flex-col">
                                <div className="flex flex-row">
                                    <div className="flex flex-col gap-2 text-sm">
                                        <h3 className="text-primary">Diamond Stock &middot; ACM Hackathon</h3>
                                        <ul className="flex flex-row text-[#185FA5] gap-2">
                                            <li>TypeScript</li>
                                            <span>&middot;</span>
                                            <li>React</li>
                                            <span>&middot;</span>
                                            <li>HTML</li>
                                            <span>&middot;</span>
                                            <li>CSS</li>
                                            <span>&middot;</span>
                                            <li>PostgreSQL</li>
                                        </ul>
                                    </div>
                                        
                                    <span className="ml-auto">Apr 2023</span>
                                </div>
                                
                                <ol className="mt-2 text-xs list-disc pl-4 [&>li::marker]:text-accent">
                                    <li>
                                        Led frontend development for a real-time investment education web app built under 24 hours; implemented 3
interactive TypeScript/React components supporting dynamic stock data workflows
                                    </li>
                                    <li>
                                        Integrated Gemini API to generate and randomize quiz questions based on user interaction, reducing static content
reliance by 100%
                                    </li>
                                    <li>
                                        Designed structured PostgreSQL data schema for reliable parsing and consistent rendering of processed financial data
                                    </li>
                                </ol>
                            </section>

                            <div className="border-b border-tertiary/30"></div>

                            <section className="flex flex-row justify-between gap-4 items-center">
                                <p>Want to see more projects? Click the button on the right to navigate there now or checkout my github!</p>
                                <a href="/projects" className="border border-mono-blue/30 rounded-lg px-2 py-1 text-mono-blue hover:bg-primary/10">
                                    <button>projects</button>
                                </a>
                                <a href="https://github.com/JongwonLee123">
                                    <Image
                                        src="/images/github.svg"
                                        width={40}
                                        height={40}
                                        alt="github"
                                        className="bg-tertiary rounded-lg hover:bg-primary"
                                    />
                                </a>
                            </section>
                            
                        </section>

                        <div className="border-b border-tertiary/30"></div>

                        <section>
                            <div id="skills" className="flex flex-row gap-2 items-center mb-6">
                                <h3>technical skills</h3>
                                <div className="flex-1 border-b border-tertiary/30"></div>
                            </div>

                            <section className="grid grid-rows-2 grid-cols-2 gap-3">
                                <section>
                                    <h3 className="mb-2">languages</h3>
                                    <ul className="flex flex-row flex-wrap [&>li]:border [&>li]:border-tertiary/30 [&>li]:py-1 [&>li]:px-2 gap-2">
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>TypeScript</li>
                                        <li>C/C++</li>
                                        <li>SQL</li>
                                        <li>Dart</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="mb-2">frameworks</h3>
                                    <ul className="flex flex-row flex-wrap [&>li]:border [&>li]:border-tertiary/30 [&>li]:py-1 [&>li]:px-2 gap-2">
                                        <li>React</li>
                                        <li>Next.js</li>
                                        <li>Flutter</li>
                                        <li>Tailwind</li>
                                        <li>Node.js</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="mb-2">tools</h3>
                                    <ul className="flex flex-row flex-wrap [&>li]:border [&>li]:border-tertiary/30 [&>li]:py-1 [&>li]:px-2 gap-2">
                                        <li>Git</li>
                                        <li>Firebase</li>
                                        <li>VS Code</li>
                                        <li>PostgreSQL</li>
                                        <li>Linux</li>
                                    </ul>
                                </section>
                                <section>
                                    <h3 className="mb-2">concepts</h3>
                                    <ul className="flex flex-row flex-wrap [&>li]:border [&>li]:border-tertiary/30 [&>li]:py-1 [&>li]:px-2 gap-2">
                                        <li>RESPT APIs</li>
                                        <li>CI/CD</li>
                                        <li>ML</li>
                                        <li>PWA</li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
                
            </section>
            <Footer />
        </main>
    );
}
