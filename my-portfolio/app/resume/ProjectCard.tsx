export type Project = {
    id: string,
    githubUrl: string,
    name: string,
    type: string,
    technologies: string[],
    date: string,
    bullets: string[]
}


export default function ProjectCard({project}: {project: Project}){
    return(
        <div>
            <div className="flex justify-between">
                <h3>
                    {project.name} / {project.type} | {project.technologies.join(', ')}
                </h3>
                <span>{project.date}</span>
            </div>
            
            <ul>
                {project.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
        
    )
    
}