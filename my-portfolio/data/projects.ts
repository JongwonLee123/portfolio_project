// shape of one project
export type Project = {
    id: string
    title: string
    description: string
    image: string
    color: string
    techStack: string[]
    githubUrl: string
    liveUrl?: string
    year: number
}

// actual projects as array
export const projects: Project[] = [
    {
        id: "portfolio",
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built with Next.js and TypeScript to showcase my projects and skills.",
        image: "/images/portfolio-new.png",
        color: "#6366f1",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        githubUrl: "https://github.com/JongwonLee123/portfolio_project",   
        liveUrl: "https://jongwon-lee-portfolio.vercel.app/",
        year: 2026,
    },

    {
        id: "diamond stocks",
        title: "Diamond Stocks",
        description: "A stock market analysis tool that provides insights and predictions based on historical data and machine learning algorithms.",
        image: "/images/diamond-stocks.png",
        color: "#0ea5e9",
        techStack: ["TypeScript", "PostgreSQL"],
        githubUrl: "https://github.com/JongwonLee123/Diamond-Stocks",
        liveUrl: "https://github.com/JongwonLee123/Diamond-Stocks",
        year: 2025,
    },

    {
        id: "pokemon learning hub",
        title: "Pokemon Learning Hub",
        description: "A learning platform for Pokemon enthusiasts to explore and learn about different Pokemon species.",
        image: "/images/pokemon.png",
        color: "#f59e0b",
        techStack: ["HTML", "CSS", "JavaScript", "PWA", "Service Workers"],
        githubUrl: "https://github.com/cse110-sp25-group17/cse110-sp25-group17",
        liveUrl: "https://cse110-sp25-group17.github.io/cse110-sp25-group17/source/home_page.html",
        year: 2025,
    },

    {
        id: "easy tracker",
        title: "Easy Tracker",
        description: "A simple financial tracking application built to help ESL individuals manage their expenses and income effectively.",
        image: "/images/easy-tracker.png",
        color: "#10b981",
        techStack: ["React", "Node.js", "Dart", "Firebase"],
        githubUrl: "https://github.com/JongwonLee123/Easy_Tracker",
        liveUrl: "https://github.com/JongwonLee123/Easy_Tracker",
        year: 2023,
    },

    {
        id: "Marvel Comic",
        title: "Marvel Comic",
        description: "Simple web application that allows users to find comics about certain characters from Marvel",
        image: "/images/marvel.png",
        color: "#ef4444",
        techStack: ["HTML", "JavaScript", "CSS"],
        githubUrl: "https://github.com/JongwonLee123/MarvelComic",
        liveUrl: "https://jongwonlee123.github.io/MarvelComic/",
        year: 2023,
    },
    {
        id:"cart",
        title: "Autonomous Arduino Car",
        description: "auto car",
        image: "/images/marvel.png",
        color:"#ef4444",
        techStack: ["C++", "Arduino", "Embedded Systems"],
        githubUrl: "",
        liveUrl: "",
        year: 2024,
    },
]