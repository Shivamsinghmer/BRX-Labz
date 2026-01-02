import React from 'react'
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const projects = [
  { name: "Erikk", img: "/MarqueProjects/Erikk.png" },
  { name: "FYLAA", img: "/MarqueProjects/FYLAA.png" },
  { name: "Hotel Odisej", img: "/MarqueProjects/HotelOdisej.png" },
  { name: "iPhone 15", img: "/MarqueProjects/Iphone15Page.png" },
  { name: "Lagunitas", img: "/MarqueProjects/Lagunitas.png" },
  { name: "Lazarev", img: "/MarqueProjects/Lazarev.png" },
  { name: "Metallica", img: "/MarqueProjects/Metallica-Portfolio.png" },
  { name: "NewsTrace", img: "/MarqueProjects/NewsTrace.png" },
  { name: "Newspaper", img: "/MarqueProjects/Newspaper-theme.png" },
  { name: "Portfolio", img: "/MarqueProjects/Portfolio-Shivam.png" },
  { name: "Resumind", img: "/MarqueProjects/Resumind.png" },
  { name: "Simple", img: "/MarqueProjects/Simple-Portfolio.png" },
  { name: "Admin Panel", img: "/MarqueProjects/Softwater-Admin.png" },
  { name: "Softwater", img: "/MarqueProjects/Softwater.png" },
  { name: "Solana", img: "/MarqueProjects/Solana-Wallet-Adapter.png" },
  { name: "Tala", img: "/MarqueProjects/Tala.png" },
  { name: "Twitter Dapp", img: "/MarqueProjects/Twitter-Dapp.png" },
  { name: "Vision Pro", img: "/MarqueProjects/VisionPro.png" },
  { name: "Zora", img: "/MarqueProjects/Zora.png" },
]

const ProjectCard = ({ img, name }) => {
  return (
    <div className="project-card relative h-50 aspect-16/9  group/card overflow-hidden rounded-xl cursor-pointer border border-white/10 transition-all duration-500 hover:border-white/30 group-has-[.project-card:hover]/marquee:opacity-40 group-has-[.project-card:hover]/marquee:blur-[2px] hover:opacity-100! hover:blur-none! hover:scale-105 z-10">
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
          <h3 className="text-white text-xl font-black italic tracking-tighter uppercase">
            {name}
          </h3>
          <div className="h-0.5 w-10 bg-blue-500 mx-auto mt-1 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 delay-100" />
        </div>
      </div>
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  )
}

const ProjectsMarque = () => {
  return (
    <section className="py-20 overflow-hidden relative group/marquee">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <Marquee pauseOnHover className="[--duration:80s] [--gap:2rem] overflow-visible">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </Marquee>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

export default ProjectsMarque
