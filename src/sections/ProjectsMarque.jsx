import React from 'react'
import Image from 'next/image'
import { Marquee } from "@/components/ui/marquee"
import { projectsData } from "../data/projects.js"


const ProjectCard = ({ img, name }) => {
  return (
    <div className="project-card relative h-50 aspect-16/9  group/card overflow-hidden rounded-xl cursor-pointer border border-white/10 transition-all duration-500 hover:border-white/30 group-has-[.project-card:hover]/marquee:opacity-40 group-has-[.project-card:hover]/marquee:blur-[2px] hover:opacity-100! hover:blur-none! hover:scale-105 z-10">
      <Image
        src={img}
        alt={name}
        fill
        sizes="(max-width: 768px) 300px, 400px"
        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
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
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </Marquee>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

export default ProjectsMarque
