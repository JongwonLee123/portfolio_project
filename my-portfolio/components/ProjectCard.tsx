import { Project } from "@/data/projects"
import Image from "next/image"

type ProjectCardProps = {
    project: Project
}

export default function ProjectCard({project} : ProjectCardProps){
    return (
        <div>
            <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-xl object-cover"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.year}</p>
            <div>
                {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
            <div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                )}
            </div>
        </div>
    )
}