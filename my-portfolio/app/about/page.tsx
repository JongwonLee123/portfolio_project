// app/about/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage(){
  const skills = [
    {name: "Python", percent: 90},
    {name: "Java", percent: 85},
    {name: "React/JS", percent: 80},
    {name: "C/C++", percent: 75},
    {name: "SQL", percent: 70},
    {name: "Machine Learning", percent: 68},
    {name: "Git / CI-CD", percent: 88},
    {name: "Linux / Shell", percent: 72}
  ]

  const education = [
    {degree: "B.S. Computer Science", school: "UC San Diego", date: "2024-26", info: "Jacobs School of Engineering", image: "/images/ucsd.png"},
    {degree: "A.S. Computer Science", school: "Ohlone College", date: "2022-24", info: "Honors", image: "/images/ohlone.jpg"},
    {degree: "A.S. Mathematics", school: "Ohlone College", date: "2022-24", info: "Honors", image: "/images/ohlone.jpg"},
  ]

  const life = [
    {emoji: "hoops", label: "Basketball", description: "Pickup games at RIMAC, REC, and Warriors Fan!"},
    {emoji: "gaming", label: "Gaming", description: "Love playing team games such as Card Games, Valorant, Minecraft"},
    {emoji: "building", label: "Side Projects", description: "Building whatever comes to my mind"},
    {emoji: "learning", label: "Learning", description: "Learning about applications using AI and front end"},
    {emoji: "sd", label: "San Diego Life", description: "Beach runs, food at Convoy, sunsets at La Jolla Cove"},
    {emoji: "pool", label: "8 Ball Pool", description: "Play with friends at UCSD Game Room and Vela Building"},
  ]

  const interests = [
    {name: "Machine Learning"},
    {name: "Game Dev"},
    {name: "Sports Analytics"},
    {name: "Competitive Gaming"},
    {name: "Basketball"},
    {name: "UI / UX"},
  ]

  const contact = [
    {contact: "Email Me", link: "jklee4589@gmail.com"},
    {contact: "LinkedIn", link: "https://www.linkedin.com/in/jongwon-lee-39a3ba203/"},
    {contact: "GitHub", link: "https://github.com/JongwonLee123"},
    {contact: "Resume", link: "/jongwon-lee-resume-2026.pdf"},
  ]

  function getBarColor(percent: number){
    if(percent >= 85) return "bg-[#185FA5]"
    if(percent >= 75) return "bg-accent"
    if(percent >= 65) return "bg-[#BA7517]"
    return "bg-red-500"
  }

  return(
    <main className="font-mono-display">
      {/* Information about Me */}
      <div className="">
        <Navbar />
        <div className="flex flex-col">
          {/* Top */}
          <section className="flex flex-row [&>section]:px-8 [&>section]:py-18 border-b border-tertiary/30">
            <section className="flex-[3] flex-col">
              <p className="text-accent mb-2">@jongwonlee12345 &middot; UCSD '26</p>
              
              <section className="font-serif-display text-6xl my-8">
                <h1 className="">Jongwon L.</h1>
                <h1 className="text-tertiary italic">About Me!</h1>
              </section>
                
              <ul className="flex flex-row gap-4 text-xs">
                <li className="border border-[#185FA5] text-[#378ADD] text-center py-1 px-5">CS Senior</li>
                <li className="border border-accent text-accent text-center py-1 px-5">Software Engineer</li>
                <li className="border border-[#854F0B] text-[#BA7517] text-center py-1 px-5">San Diego, CA</li>
                <li className="border border-[#993556] text-[#D4537E] text-center py-1 px-5">Open to Work</li>
              </ul>
              <p className="mt-4 text-sm text-tertiary">
                Final-year CS student at UC San Diego with passion for building full-stack apps
                and diving deep into systems programming. When I'm not coding, I'm on the basketball court
                or playing games with my friends. Always down to talk tech, sports, or gaming strategies.
              </p>
            </section>

            <span className="border-r border-tertiary/30"></span>

            <section className="flex flex-[1] flex-col items-center">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                width={100}
                height={100}
                className="rounded pb-4"
              />
              <h3 className="text-primary pb-2">
                Jongwon L.
              </h3>
              <ul className="text-tertiary flex flex-col items-center text-sm">
                <li>UCSD &middot; CS 2026</li>
                <li>La Jolla, CA</li>
                <li>Software Engineer</li>
              </ul>
            </section>
          </section>

          {/* Technical and Education */}
          <section className="flex flex-row px-8 [&>section]:my-12 text-tertiary">
            <section className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="">technical skills</h2>
                <div className="flex-1 border-b border-tertiary/30"></div>
              </div>
              <div className="flex flex-col gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1 text-xs lg:mb-4">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-0.5">
                      <div className={`${getBarColor(skill.percent)} h-0.5 rounded-full`} style={{width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-r border-tertiary/30 mx-10"></div>

            <section className="flex-1">
              <div className="flex flex-row items-center gap-3 mb-4">
                <h2>education</h2>
                <div className="flex-1 border-b border-tertiary/30"></div>
              </div>
              
              <div className="flex flex-col text-xs">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-row items-center gap-4 py-3 border-b border-tertiary/30 lg:mb-4">
                    <Image 
                      src={edu.image}
                      alt={edu.school}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <section className="flex-1">
                      <p className="text-primary">{edu.degree}</p>
                      <p>{edu.school} - {edu.info}</p>
                      
                    </section>

                    <p className="whitespace-nowrap">{edu.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        
          <div className="border-b border-tertiary/30"></div>

          {/* My Life */}
          <section className="px-8 my-12 text-tertiary">
            <div className="flex flex-row items-center gap-3 mb-4">
              <h2>my life</h2>
                <div className="flex-1 border-b border-tertiary/30"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-xs">
              {life.map((hobby, index) => (
                <div key={index} className="flex flex-col justify-left border border-white/20 p-2 transition hover:scale-110">
                  <span className="text-accent">&#91; {hobby.emoji} &#93;</span>
                  <h3>{hobby.label}</h3>
                  <p>{hobby.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="border-b border-tertiary/30"></div>

          {/* Interests and Connections */}
          <section className="flex flex-row px-8 text-tertiary [&>section]:my-12">
            <section className="flex-1">
              <div className="flex flex-row items-center gap-3 mb-4">
                <h2>Interests</h2>
                <div className="flex-1 border-b border-tertiary/30"></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="border border-white/30 py-1 px-2 transition hover:scale-110 text-xs">
                    <p>{interest.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-r border-tertiary/30 mx-10"></div>

            <section className="flex-1">
              <div className="flex flex-row items-center gap-3 mb-4">
                <h2>Get In Touch</h2>
                <div className="flex-1 border-b border-tertiary/30"></div>
              </div>
              <p>Always open to new-grad SWE roles, research, or just talking about basketball and games.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {contact.map((social, index) => (
                  <div key={index}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer"
                      className="text-primary inline-block border border-white/30 rounded-lg py-1 px-2 transition hover:scale-110 active:scale-95 active:bg-neutral-600"
                    >
                      {social.contact}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
