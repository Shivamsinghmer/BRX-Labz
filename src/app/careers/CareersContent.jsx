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
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="group relative"
        >
            <Link
                href={job.link}
                className="relative block p-5 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] overflow-hidden"
            >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-10">
                    {/* Icon Section */}
                    <div className="shrink-0">
                        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                            <Icon className="w-9 h-9 text-white/70 group-hover:text-white transition-colors duration-500" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-4">
                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                                {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 uppercase tracking-[0.15em] backdrop-blur-md group-hover:border-white/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-white/50 text-md leading-relaxed max-w-3xl font-light group-hover:text-white/80 transition-colors duration-300 mb-8">
                            {job.description}
                        </p>

                        <div className="flex items-center gap-3 text-white/40 group-hover:text-white transition-all duration-300">
                            <div className="h-[1px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-white/40 transition-all duration-500" />
                            <span className="text-xs  uppercase tracking-[0.2em]">Apply Position</span>
                            <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
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
            className="p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-lg border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group"
        >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 mb-6 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white transition-all">
                <perk.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{perk.title}</h4>
            <p className="text-sm text-white/50 font-medium leading-relaxed group-hover:text-white/70 transition-colors">{perk.desc}</p>
        </motion.div>
    )
}

export default function CareersContent() {
    return (
        <main className="min-h-screen relative ">
            {/* Global Noise Texture */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
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
                            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] shadow-sm">Career At BRX Labz</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter"
                        >
                            <span className="block italic bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">Build Learn</span>
                            <span className="text-white/20">Ship.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-lg text-white/40 max-w-3xl mx-auto font-medium leading-relaxed tracking-tight"
                        >
                            We&lsquo;re building a world-class team of designers and engineers to create the next generation of digital excellence. High speed, high quality, zero fluff.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-8 flex flex-wrap justify-center gap-4"
                        >
                            {[
                                "Remote First",
                                "Rapid Scale",
                                "High Impact"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
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
                            className="inline-block px-8 py-4 rounded-full bg-gray-300 text-black font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all"
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
