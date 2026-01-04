"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { projects } from "../data/projects.js"


import { Marquee } from "@/components/ui/marquee"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative flex flex-col w-[280px] md:w-96 bg-white/5 border border-white/10 rounded-4xl overflow-hidden hover:bg-white/8 hover:border-white/20 transition-all duration-500 mx-3 md:mx-4"
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col gap-3">
        <div className="flex justify-between items-start">
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-black text-white tracking-tight">
          {project.title}
        </h3>

        <p className="text-white/40 text-[11px] md:text-xs leading-relaxed font-medium line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[9px] font-bold">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-3">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-[11px] group/btn"
          >
            Live Preview
            <ArrowUpRight className="w-3 h-3 text-white/40 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="work">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white tracking-tighter"
          >
            Our Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-xs md:text-sm max-w-xl mx-auto font-medium"
          >
            A comprehensive showcase of our work including UI/UX designs, full-stack applications, freelance projects, and more.
          </motion.p>
        </div>
      </div>

      {/* Projects Marquee */}
      <div className="relative w-full">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1rem] py-4">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </Marquee>

        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-black via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-black via-black/0 to-transparent" />
      </div>


    </section>
  )
}

export default ProjectsSection