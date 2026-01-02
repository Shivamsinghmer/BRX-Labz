"use client"
import React from 'react'
import { motion } from "motion/react"
import { Paintbrush, Code2, BarChart3, MousePointer2, Code, CodeIcon, Code2Icon } from "lucide-react"

const ApproachCard = ({ icon: Icon, iconBgColor, iconColor, title, description, children, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col bg-white/5 rounded-4xl border border-white/10 shadow-2xl overflow-hidden group hover:bg-white/8 hover:border-white/20 transition-all duration-300"
        >
            {/* Visual Mockup Area */}
            <div className="h-56 bg-neutral-900/50 flex items-center justify-center relative overflow-hidden border-b border-white/5">
                {children}
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBgColor} bg-opacity-20 mb-2`}>
                    <Icon className={`w-4 h-4 ${iconColor.replace('bg-', 'text-')}`} />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                    {title}
                </h4>
                <p className="text-white/40 leading-relaxed text-sm font-medium selection:bg-blue-500/30">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

const CodeWindow = () => (
    <div className="w-5/6 h-45 bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl p-4 font-mono text-[10px] space-y-2 relative group-hover:scale-105 transition-transform duration-500">
        <div className="flex gap-1.5 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="space-y-1">
            <p className="text-[#ff7b72]">const <span className="text-[#d2a8ff]">Payment</span> = () ={">"} {"{"}</p>
            <p className="pl-4 text-white">return (</p>
            <p className="pl-8 text-[#79c0ff]">{"<StripeProvider>"}</p>
            <p className="pl-12 text-white/40 italic">...secure_txn</p>
            <p className="pl-8 text-[#79c0ff]">{"</StripeProvider>"}</p>
            <p className="pl-4 text-white">)</p>
            <p className="text-white">{"}"}</p>
        </div>
    </div>
)

const DesignMockup = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="w-48 h-32 bg-neutral-800 rounded-xl shadow-2xl border border-white/10 p-4 space-y-3 -rotate-6 transition-transform group-hover:rotate-0 duration-500">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#a855f7]" />
                <div className="h-2 w-20 bg-white/5 rounded-full" />
            </div>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#3b82f6]" />
                <div className="h-2 w-16 bg-white/5 rounded-full" />
            </div>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#c084fc]" />
                <div className="h-2 w-24 bg-white/5 rounded-full" />
            </div>
        </div>
        <motion.div
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-16 right-20"
        >
            <MousePointer2 className="w-6 h-6 text-white fill-white" />
            <div className="absolute -bottom-6 -right-2 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg">
                You
            </div>
        </motion.div>
    </div>
)

const GrowthMockup = () => (
    <div className="w-48 h-32 bg-neutral-800 rounded-xl shadow-2xl border border-white/10 p-5 space-y-4 group-hover:scale-105 transition-transform duration-500">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-wider">MRR</p>
                <p className="text-lg font-black text-white">$12,450</p>
            </div>
            <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                <span className="rotate-45 block">→</span> 12%
            </div>
        </div>
        <div className="flex items-end gap-1.5 h-8">
            <div className="flex-1 bg-white/5 rounded-sm h-[40%]" />
            <div className="flex-1 bg-white/5 rounded-sm h-[60%]" />
            <div className="flex-1 bg-white/5 rounded-sm h-[50%]" />
            <div className="flex-1 bg-emerald-500 rounded-sm h-[90%] shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
            <div className="flex-1 bg-white/5 rounded-sm h-[45%]" />
        </div>
    </div>
)

const ApproachSection = () => {
    return (
        <section className=" py-5 relative  overflow-hidden" id="approach">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-purple-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
                    >
                        <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Our Approach</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Everything you need.<br />
                        <span className="text-white/20">Nothing you don&apos;t.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-base text-white/40 max-w-xl mx-auto font-medium leading-relaxed"
                    >
                        We stripped away the agency bloat. No account managers, no jargon. Just direct access to senior engineers and world-class designers.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ApproachCard
                        icon={Paintbrush}
                        iconColor="bg-white"
                        iconBgColor="bg-purple-500"
                        title="World-Class Design"
                        description="Aesthetic isn't just decoration. We create emotionally resonant visual systems that build trust instantly."
                        delay={0.3}
                    >
                        <DesignMockup />
                    </ApproachCard>

                    <ApproachCard
                        icon={Code2Icon}
                        iconColor="bg-white"
                        iconBgColor="bg-blue-500"
                        title="Modern Engineering"
                        description="Built on Next.js and Tailwind. Clean, accessible, and type-safe code that scales with your business."
                        delay={0.4}
                    >
                        <CodeWindow />
                    </ApproachCard>

                    <ApproachCard
                        icon={BarChart3}
                        iconColor="bg-white"
                        iconBgColor="bg-emerald-500"
                        title="Growth & Data"
                        description="We implement advanced tracking and SEO foundations to ensure your product actually converts."
                        delay={0.5}
                    >
                        <GrowthMockup />
                    </ApproachCard>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </section>
    )
}

export default ApproachSection
