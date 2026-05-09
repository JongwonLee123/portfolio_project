import {Project} from "./ProjectCard"

export const projects: Project[] = [
    {
        id:"portfolio",
        githubUrl: "",
        name: "React Portfolio Website",
        type: "Personal Project",
        technologies: ["React", "JavaScript", "CSS", "REST APIs"],
        date: "Jan 2026 – Present",
        bullets: [
            `Designed and built a fully responsive personal portfolio in React, featuring reusable component architecture,
dynamic routing via React Router, and state-managed project filters`,
            `Integrated live REST API calls to fetch and display GitHub repository data, reducing manual content updates to zero
`,
            `Implemented dark/light mode theming using React Context API and CSS custom properties, improving UI consistency
across 10+ components`,
        ]
    },
    {
        id:"stocks",
        githubUrl: "",
        name: "Diamond Stock",
        type: "Diamond Hacks – ACM Hackathon",
        technologies: ["TypeScript", "React", "CSS", "HTML", "PostgreSQL"],
        date: "April 2025",
        bullets: [
            `Led frontend development for a real-time investment education web app built under 24 hours; implemented 3
interactive TypeScript/React components supporting dynamic stock data workflows
`,
            `Integrated Gemini API to generate and randomize quiz questions based on user interaction, reducing static content
reliance by 100%
`,
            `Designed structured PostgreSQL data schema for reliable parsing and consistent rendering of processed financial data`,
        ]
    },
    {
        id:"pokemon",
        githubUrl: "",
        name: "Pokémon Learning Hub ",
        type: "Group Project",
        technologies: ["HTML", "CSS", "JavaScript", "PWA", "Service Workers"],
        date: "March 2025 – June 2025",
        bullets: [
            `Developed the home page experience and collection page, integrating image assets, nav links, games, and dynamic
state updates across 3 feature modules
`,
            `Built a dropdown filtering system supporting filter-by-favorites and Pokémon type, reducing search time for a 150+
entry dataset
`,
            `Implemented Progressive Web App support with Service Workers for full offline access and installability across
mobile and desktop browsers`,
        ]
    },
    {
        id:"cart",
        githubUrl: "",
        name: "Autonomous Arduino Car",
        type: "Group Project",
        technologies: ["C++", "Arduino", "Embedded Systems"],
        date: "May 2023",
        bullets: [
            `Designed object-oriented C++ modules to control motors and process input from LED-based line-following sensors,
achieving reliable path tracking across 5+ test configurations
`,
            ` Implemented autonomous navigation logic detecting a black tape path via sensor feedback; led debugging and
calibration cycles that improved navigation accuracy by an estimated 40%`,
        ]
    }
]