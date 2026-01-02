import React from 'react'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center  pb-12 px-4 overflow-hidden">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium tracking-wide dark:text-primary/80 uppercase">Available for new Projects</span>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl w-full text-center space-y-4">
                <h2 className="text-lg md:text-lg font-medium tracking-widest text-primary/60 dark:text-primary/40 uppercase animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
                    Building. Refining. Xcelerating.
                </h2>

                <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-tight bg-clip-text text-transparent bg-linear-to-b from-primary to-primary/60 dark:from-white dark:to-white/40 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                    We Build Websites That Turn Visitors Into Customers.
                </h1>

                <p className="max-w-xl mx-auto text-sm md:text-base text-primary/60 dark:text-primary/40 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
                    We help forward-thinking companies create digital experiences that resonate, convert, and scale.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                    <Link href="https://cal.com/shivam-singh-mer-f1rqse/30min">
                        <InteractiveHoverButton className="dark:invert dark:border-none dark:text-primary h-12 px-8 text-base">
                            Start Your Project
                        </InteractiveHoverButton>
                    </Link>
                    <Link href="/projects" className="h-12 px-8 rounded-full text-center flex items-center justify-center border border-primary/10 bg-primary/5 backdrop-blur-md font-bold hover:bg-primary/10 transition-all active:scale-95 text-primary text-sm">
                        View Our Work
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default HeroSection