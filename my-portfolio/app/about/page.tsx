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
    {emoji: "🏀", label: "Basketball", description: "Pickup games at RIMAC, REC, and Warriors Fan!"},
    {emoji: "👾", label: "Gaming", description: "Love playing team games such as Card Games, Valorant, Minecraft"},
    {emoji: "💻", label: "Side Projects", description: "Building whatever comes to my mind"},
    {emoji: "📚", label: "Learning", description: "Learning about applications using AI and front end"},
    {emoji: "🏖️", label: "San Diego Life", description: "Beach runs, food at Convoy, sunsets at La Jolla Cove"},
    {emoji: "🎱", label: "8 Ball Pool", description: "Play with friends at UCSD Game Room and Vela Building"},
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
    if(percent >= 85) return "bg-blue-500"
    if(percent >= 75) return "bg-green-500"
    if(percent >= 65) return "bg-orange-500"
    return "bg-red-500"
  }

  return(
    <main className="font-mono-display">
      {/* Information about Me */}
      <div className="bg-neutral-800">
        <Navbar />
        <div className="max-w-3xl mx-auto">
          <section className="flex flex-row gap-8 p-8 items-center">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
            <section className="flex flex-col">
              <p className="text-blue-500 mb-2">@jongwonlee12345 | UCSD '26</p>
              <h1 className="text-3xl font-bold mb-1">Jongwon L.</h1>
              <ul className="flex flex-row gap-4 text-xs">
                <li className="bg-blue-100 text-blue-700 text-center rounded-full py-1 px-5">CS Senior</li>
                <li className="bg-green-100 text-green-700 text-center rounded-full py-1 px-5">Software Engineer</li>
                <li className="bg-orange-100 text-orange-700 text-center rounded-full py-1 px-5">San Diego, CA</li>
                <li className="bg-red-100 text-red-700 text-center rounded-full py-1 px-5">Open to Work</li>
              </ul>
              <p className="mt-4">
                Final-year CS student at UC San Diego with passion for building full-stack apps
                and diving deep into systems programming. When I'm not coding, I'm on the basketball court
                or playing games with my friends. Always down to talk tech, sports, or gaming strategies.
              </p>
            </section>
          </section>
        </div>
      </div>

      {/* cards for skills,education,etc */}
      <section>
        <div className="max-w-3xl mx-auto py-8 flex flex-col gap-6">
          {/* cards for skills and education sections */}
          <section className="flex flex-row gap-6">
            <section className="flex-1 bg-neutral-800 rounded-xl p-8">
              <h2>Technical Skills</h2>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`${getBarColor(skill.percent)} h-2 rounded-full`} style={{width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              </section>

            <section className="flex-1 bg-neutral-800 rounded-xl p-8">
              <h2>Education</h2>
              <div className="flex flex-col">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-row items-center gap-4 py-3 border-b">
                    <Image 
                      src={edu.image}
                      alt={edu.school}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <section className="flex-1">
                      <p>{edu.degree}<br/>{edu.school} - {edu.info}</p>
                    </section>

                    <p className="whitespace-nowrap">{edu.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* life section */}
          <section className="bg-neutral-800 rounded-xl p-8">
            <h2>My Life</h2>
            <div className="grid grid-cols-3 gap-4">
              {life.map((hobby, index) => (
                <div key={index} className="flex flex-col justify-left border border-white/20 rounded-lg p-2 transition hover:scale-110">
                  <span>{hobby.emoji}</span>
                  <h3>{hobby.label}</h3>
                  <p>{hobby.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* interests and get in touch sections */}
          <section className="flex flex-row gap-6">
            <section className="flex-1 bg-neutral-800 rounded-xl p-8">
              <h2>Interests</h2>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="border border-white/30 rounded-full py-1 px-2 transition hover:scale-110">
                    <p>{interest.name}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex-1 bg-neutral-800 rounded-xl p-8">
              <h2>Get In Touch</h2>
              <p>Always open to new-grad SWE roles, research, or just talking about basketball and games.</p>
              <div className="flex flex-wrap gap-2">
                {contact.map((social, index) => (
                  <div key={index}>
                    <a href={social.link} 
                      className="inline-block border border-white/30 rounded-lg py-1 px-2 transition hover:scale-110 active:scale-95 active:bg-neutral-600"
                    >
                      {social.contact}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
