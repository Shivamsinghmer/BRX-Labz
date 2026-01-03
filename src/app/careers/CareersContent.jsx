"use client"

import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import {
    Code,
    Smartphone,
    Palette,
    TrendingUp,
    ArrowRight,
    Globe,
    Zap,
    Cpu,
    Briefcase,
    CheckCircle2
} from "lucide-react"
import { Section } from "@/components/ui/Section"
import Link from 'next/link'

const jobOpenings = [
    {
        title: "Full-Stack Developer Intern",
        link: "https://forms.gle/suv7xHJs3wNfynccA",
        description: "Join our team of cracked developers and build cutting-edge websites using Next.js and modern web technologies.",
        icon: Code,
        tags: ["Next.js", "React.js", "Node.js", "Tailwind"]
    },
    {
        title: "UI/UX Designer Intern",
        link: "https://forms.gle/Hg1579PbDbmgf6eH9",
        description: "Design premium digital experiences that wow users. We need someone with a sharp eye for aesthetics and high-end SaaS design.",
        icon: Palette,
        tags: ["Figma", "Design Systems", "Prototyping"]
    },
    {
        title: "App Developer",
        link: "https://forms.gle/QAvY2GYYeRPNivQ46",
        description: "Build exceptional mobile applications for iOS and Android platforms using React Native, Flutter, or native technologies.",
        icon: Smartphone,
        tags: ["React Native", "Expo", "Mobile UX"]
    },
    {
        title: "Outreach & Sales Manager",
        link: "https://forms.gle/EQcWwR9GonL2vjxz5",
        description: "Reach out to prospects through cold calls and messages to build new client relationships and expand our global footprint.",
        icon: TrendingUp,
        tags: ["Lead Gen", "Cold Outreach", "Sales"]
    }
]

const CareerCard = ({ job, index }) => {
    const Icon = job.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <Link
                href={job.link}
                className="relative block p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl transition-all duration-500 hover:border-white/10 overflow-hidden"
            >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 blur-[100px] animate-pulse" />
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 blur-[100px] animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                    {/* Icon Section */}
                    <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-yellow-500/30 transition-all duration-500">
                            <Icon className="w-8 h-8 text-yellow-500 group-hover:animate-pulse" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-yellow-500 transition-colors duration-300">
                                {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/40 uppercase tracking-widest whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-white/40 text-base leading-relaxed max-w-2xl font-medium group-hover:text-white/60 transition-colors duration-300">
                            {job.description}
                        </p>

                        <div className="pt-4 flex items-center gap-2 text-yellow-500 font-bold text-sm tracking-tight group/btn transition-all">
                            <span className="relative overflow-hidden inline-block">
                                <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-full lowercase">Apply now</span>
                                <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover/btn:-translate-y-full lowercase">Apply now</span>
                            </span>
                            <ArrowRight className="w-4 h-4 translate-y-[0.5px] group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

const PerkCard = ({ perk, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-lg border border-white/5 hover:border-white/10 transition-all duration-300 group"
        >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 mb-6 group-hover:scale-110 group-hover:text-white transition-all">
                <perk.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{perk.title}</h4>
            <p className="text-sm text-white/30 font-medium leading-relaxed group-hover:text-white/40 transition-colors">{perk.desc}</p>
        </motion.div>
    )
}

export default function CareersContent() {
    return (
        <main className="min-h-screen">
            {/* Hero Section with Moving Atmosphere */}
            <Section className="relative pt-40 min-h-screen pb-32 overflow-hidden">
                {/* Ultra-Premium Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] pointer-events-none overflow-hidden -z-10">
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-40 left-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-[12px] font-bold text-white/80 uppercase tracking-[0.2em] shadow-sm">Career At BRX Labz</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter"
                        >
                            <span className="block italic">Build Learn</span>
                            <span className="text-white/20">Ship.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
                        >
                            We&lsquo;re building a world-class team of designers and engineers to create the next generation of digital excellence. High speed, high quality, zero fluff.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-10 flex flex-wrap justify-center gap-12 text-white/20 font-black uppercase text-xs tracking-widest italic"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-white/5" />
                                Remote First
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-white/5" />
                                Rapid Scale
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-white/5" />
                                High Impact
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Grid Fade Section */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-black to-transparent z-10" />
            </Section>

            {/* Roles Section */}
            <Section id="open-roles" className="pt-20 pb-40">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-24 flex flex-col items-center text-center space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black text-white tracking-tighter"
                        >
                            Open Roles
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/30 font-medium"
                        >
                            Choose what fits your skills and interests.
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {jobOpenings.map((job, index) => (
                            <CareerCard key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Perks Grid */}
            <Section className="pb-40 relative overflow-hidden bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto rounded-[3.5rem] overflow-hidden p-[1px] bg-linear-to-b from-white/10 to-transparent mb-32">
                        <div className="bg-black/80 backdrop-blur-3xl p-12 md:p-20 text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">Why scale with us?</h2>
                            <p className="text-white/40 text-lg font-medium leading-relaxed">
                                We&lsquo;re not an agency. We&lsquo;re a lab where engineering meets art.
                                Join a culture that celebrates speed, precision, and the relentless pursuit of perfection.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Remote First", icon: Globe, desc: "Work from anywhere. We value results over geography." },
                            { title: "Latest Tech", icon: Cpu, desc: "Next.js, Tailwind, Framer. We stay on the absolute edge." },
                            { title: "Rapid Growth", icon: Zap, desc: "Step levels in months, not years. Fast-paced, high reward." },
                            { title: "Bold Vision", icon: Briefcase, desc: "We only work with founders who want to change the game." }
                        ].map((perk, i) => (
                            <PerkCard key={i} perk={perk} index={i} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final High-Energy CTA */}
            <Section className="pb-60 ">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 backdrop-blur-lg md:p-24 rounded-[4rem] border border-white/5 bg-linear-to-b from-white/3 to-transparent text-center space-y-12 overflow-hidden"
                    >

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Stay Curious.</h2>
                            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                                Don&lsquo;t see a role for you? We&lsquo;re always looking for geniuses who break rules and build better realities.
                            </p>
                        </div>

                        <motion.a
                            href="https://forms.gle/WMeHUBPRMePCMCfE9"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 rounded-full bg-yellow-500 text-black font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all"
                        >
                            General Application
                        </motion.a>

                        {/* Animated Grid Background for CTA */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
                    </motion.div>
                </div>
            </Section>
        </main>
    )
}
