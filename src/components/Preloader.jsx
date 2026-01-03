"use client"

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import BRXLabz from './BRXLabz'

const Preloader = () => {
    const [progress, setProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setIsVisible(false), 500)
                    return 100
                }
                const diff = Math.random() * 15
                return Math.min(prev + diff, 100)
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -100,
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
                >
                    {/* Background Atmosphere */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-12">
                        {/* Brand Section */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <BRXLabz />
                            </div>

                            <div className="overflow-hidden h-6">
                                <motion.div
                                    animate={{ y: ["100%", "0%", "-100%"] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        times: [0, 0.2, 0.5, 0.8, 1],
                                        ease: "easeInOut"
                                    }}
                                    className="flex flex-col items-center gap-0"
                                >
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] h-6 flex items-center shrink-0">Synthesizing Code</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] h-6 flex items-center shrink-0">Perfecting Design</span>
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] h-6 flex items-center shrink-0">Xcelerating Future</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Progress Section */}
                        <div className="flex flex-col items-center gap-4 w-64">
                            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                            </div>
                            <div className="flex justify-between w-full">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">System Boot</span>
                                <span className="text-[10px] font-black text-white italic">{Math.round(progress)}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Digital Grid Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
