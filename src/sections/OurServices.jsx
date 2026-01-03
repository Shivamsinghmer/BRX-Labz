"use client"
import React from 'react'
import { motion } from "motion/react"
import { Layout, Palette, Diamond, Code, Smartphone, Presentation } from "lucide-react"
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Link from 'next/link'

const ServiceCard = ({ title, description, icons, delay }) => {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col h-full min-h-[280px] backdrop-blur-lg p-8 rounded-[2rem] border border-white/10 overflow-hidden transition-all duration-500"
            style={{
                boxShadow: isHovered
                    ? "0 0 40px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05)"
                    : "inset 0 0 20px rgba(255, 255, 255, 0.02)"
            }}
        >
            {/* Animated Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Glass Base */}
                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl" />

                {/* Diagonal Flow Gradient */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: isHovered ? 8 : 15,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-[-100%] opacity-50"
                    style={{
                        background: `radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.12) 0%, transparent 35%),
                                     radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.12) 0%, transparent 35%),
                                     radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
                                     radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 30%)`,
                        backgroundSize: '200% 200%',
                    }}
                />

                {/* Light Streaks / Shimmer */}
                <motion.div
                    animate={{
                        x: ['-100%', '200%'],
                        y: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: isHovered ? 3 : 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        background: 'linear-gradient(135deg, transparent 45%, rgba(255,255,255,0.4) 50%, transparent 55%)',
                        filter: 'blur(20px)',
                    }}
                />

                {/* Noise Overly */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />

                {/* Hover Border Glow */}
                <div className={`absolute inset-0 border border-white/20 rounded-[2rem] transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    style={{ boxShadow: 'inset 0 0 20px rgba(255,255,255,0.1)' }}
                />
            </div>

            {/* Content Area */}
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 ${isHovered ? 'scale-110 bg-white/10 border-white/20 shadow-xl' : ''}`}>
                        {icons[0] && React.createElement(icons[0], {
                            className: "w-6 h-6 text-white/80 transition-colors duration-500"
                        })}
                    </div>
                    <div className="flex gap-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
                        {icons.map((Icon, idx) => (
                            <Icon key={idx} className="w-3 h-3 text-white/30" />
                        ))}
                    </div>
                </div>

                <div className="space-y-3 mt-auto">
                    <div className="flex items-center gap-3">
                        <h4 className="text-xl font-bold text-white tracking-tight">
                            {title}
                        </h4>
                        {title === "App Development" && (
                            <span className="text-[10px] font-black text-black bg-yellow-500/90 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                Coming Soon
                            </span>
                        )}
                    </div>

                    <p className="text-white/50 leading-relaxed text-sm font-medium group-hover:text-white/70 transition-colors duration-500">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

const OurServices = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="services">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none opacity-20" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Our Expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Design & Code.<br />
                        <span className="text-white/20 font-medium">Perfected for Scale.</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        title="Brand Identity"
                        description="Crafting legendary visual stories that resonate. We build identities that don’t just exist, but dominate their market space."
                        icons={[Palette, Diamond]}
                        delay={0.1}
                    />

                    <ServiceCard
                        title="Website Design"
                        description="High-converting digital experiences designed to captivate your audience and turn every visitor into a loyal customer."
                        icons={[Layout, Palette]}
                        delay={0.2}
                    />

                    <ServiceCard
                        title="Product Design"
                        description="Intuitive UX and breathtaking UI. We design products that feel like magic and function with absolute precision."
                        icons={[Diamond, Smartphone]}
                        delay={0.3}
                    />

                    <ServiceCard
                        title="Web Development"
                        description="Engineered for performance. We build lightning-fast web applications using the most advanced modern tech stacks."
                        icons={[Code, Layout]}
                        delay={0.4}
                    />

                    <ServiceCard
                        title="App Development"
                        description="Native-feel mobile experiences crafted for perfection. We bring your most ambitious app ideas to life on any platform."
                        icons={[Smartphone, Code]}
                        delay={0.5}
                    />

                    <ServiceCard
                        title="Pitch Deck & Collaterals"
                        description="Winning investor decks and marketing materials designed to secure funding and communicate your vision effectively."
                        icons={[Presentation, Layout]}
                        delay={0.6}
                    />
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="https://cal.com/brx-labz/30min"><InteractiveHoverButton
                        className="flex dark:invert dark:border-none border-none dark:hover:border-none items-center gap-2 px-6 py-3 bg-black rounded-full hover:bg-neutral-900 transition-all font-bold text-white shadow-2xl group text-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Book Strategy Call
                    </InteractiveHoverButton></Link>
                </div>
            </div>
        </section>
    )
}

export default OurServices