"use client"
import React from 'react'
import { motion } from "motion/react"
import { Layout, Palette, Diamond, Code, Smartphone, Presentation } from "lucide-react"
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Link from 'next/link'

const VideoHeader = ({ src, poster }) => (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-neutral-900/50">
        <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* Subtle Overlay to maintain dark theme consistency */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
    </div>
)

const ServiceCard = ({ title, description, icons, videoSrc, isComingSoon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="group relative flex flex-col bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
        >
            {/* Video Header Area */}
            <div className="h-52 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <VideoHeader src={videoSrc} />

                {/* Icons overlaying the video area if needed, or keeping it clean */}
                <div className="relative z-10 flex gap-2">
                    {icons.map((Icon, idx) => (
                        <div key={idx} className="w-10 h-10 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <Icon className="w-5 h-5 text-white/80" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-white tracking-tight">
                        {title}
                    </h4>
                    {isComingSoon && (
                        <span className="text-[10px] font-black text-black bg-yellow-500 px-2.5 py-1 rounded-full uppercase tracking-tighter">
                            Coming Soon
                        </span>
                    )}
                </div>

                <p className="text-white/40 leading-relaxed text-sm font-medium">
                    {description}
                </p>

                <div className="flex items-center gap-1.5 pt-2">
                    {icons.map((Icon, idx) => (
                        <Icon key={idx} className="w-3.5 h-3.5 text-white/20" />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

const OurServices = () => {
    // High-quality stock video URLs for demonstration. Replace these with local assets.
    const serviceVideos = {
        brand: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
        webDesign: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
        productDesign: "https://videos.pexels.com/video-files/2491284/2491284-uhd_2560_1440_24fps.mp4",
        webDev: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
        appDev: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
        pitchDeck: "https://videos.pexels.com/video-files/2491284/2491284-uhd_2560_1440_24fps.mp4"
    }

    return (
        <section className="py-24 relative overflow-hidden" id="services">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
                    >
                        <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Our Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Anything you need.<br />
                        <span className="text-white/20">Done for you.</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    <ServiceCard
                        title="Brand Identity"
                        description="Get a differentiated and unique brand identity to stand out your product from competitors."
                        icons={[Palette, Layout]}
                        videoSrc={serviceVideos.brand}
                        delay={0.1}
                    />

                    <ServiceCard
                        title="Website Design"
                        description="Turn your website into an eye-dropping marketing machine to turn visitors into customers."
                        icons={[Layout, Diamond]}
                        videoSrc={serviceVideos.webDesign}
                        delay={0.2}
                    />

                    <ServiceCard
                        title="Product Design"
                        description="Make your product so delightful to, it instantly becomes the thing to talk about in the industry."
                        icons={[Layout, Diamond, Palette]}
                        videoSrc={serviceVideos.productDesign}
                        delay={0.3}
                    />

                    <ServiceCard
                        title="Web Development"
                        description="Build fast, scalable, and modern web applications with cutting-edge technologies and best practices."
                        icons={[Code, Layout]}
                        videoSrc={serviceVideos.webDev}
                        delay={0.4}
                    />

                    <ServiceCard
                        title="App Development"
                        description="Create native and cross-platform mobile applications that deliver exceptional user experiences."
                        icons={[Smartphone, Layout]}
                        videoSrc={serviceVideos.appDev}
                        isComingSoon={true}
                        delay={0.5}
                    />

                    <ServiceCard
                        title="Pitch Deck & Collaterals"
                        description="Fulfill all marketing design requirements with a team that feels like your own."
                        icons={[Presentation, Layout]}
                        videoSrc={serviceVideos.pitchDeck}
                        delay={0.6}
                    />
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="https://cal.com/shivam-singh-mer-f1rqse/30min"><InteractiveHoverButton
                        className="flex dark:invert dark:border-none dark:hover:border-none items-center gap-2 px-6 py-3 bg-black border border-white/10 rounded-full hover:bg-neutral-900 transition-all font-bold text-white shadow-2xl group text-sm"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Book Strategy Call
                    </InteractiveHoverButton></Link>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-bold text-white hover:bg-white/10 transition-all shadow-2xl text-sm"
                    >
                        Get a Quote
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default OurServices