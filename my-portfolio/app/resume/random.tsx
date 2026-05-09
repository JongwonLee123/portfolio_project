"use client"
import Navbar from "@/components/Navbar";
import ProjectCard from "./ProjectCard"
import {projects} from "./data"
import SkillCard from "./SkillsCard"
import {skills} from "./skills"

export default function Resume() {
    return(
        <main className="pt-16">
            <Navbar />
            
            <a 
                href="/jongwon-lee-resume-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 text-blue-400 underline"
            >
                Download Resume 
                <span className="text-sm text-gray-400">
                    (opens in new tab)
                </span>
            </a>

            <header>
                <h1>Jongwon K. Lee</h1>
                <address>
                    San Diego, CA | (510) 766-6853 | jklee4589@gmail.com | LinkedIn | GitHub 
                </address>
                    
                
            </header>
            
            <section>
                <h2 className="border-b border-gray-400 w-full">Education</h2>
                <div>
                    <h3>University of California, San Diego</h3>
                    <p>September 2024 - June 2026</p>
                </div>
                <p>B.S. Computer Science</p>

                <div>
                    <h3>Ohlone College</h3>
                    <p>August 2022 - May 2024</p>
                </div>
                <p>Associate of Science, Computer Science, Mathematics | Honors Student </p>
            </section>

            <section>
                <h2 className="border-b border-gray-400 w-full">Work Experience</h2>
                <div className="flex justify-between">
                    <p>
                        Software Developer Intern / Frugal Innocation Hub, SCU
                    </p>
                    <span>June 2023 - August 2023</span>
                </div>
            </section>

            <section>
                <h2 className="border-b border-gray-400 w-full">Projects</h2> 
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </section>

            <section>
                <h2 className="border-b border-gray-400 w-full">Technical Skills</h2> 
                {skills.map((skill) => (
                    <SkillCard skill={skill}/>
                ))}
            </section>
            
        </main>
    );
}