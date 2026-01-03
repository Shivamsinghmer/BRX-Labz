"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Check, ChevronRight, Calendar, Mail, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { content } from "@/data/pricing.js"

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 md:p-10 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Background Glow */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-3 md:p-2 rounded-full bg-white/10 border border-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all active:scale-95"
                        aria-label="Close modal"
                    >
                        <X size={18} className="md:w-4 md:h-4" />
                    </button>

                    <div className="relative z-10 space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-black text-white tracking-tight uppercase">Let&apos;s talk.</h3>
                            <p className="text-white/40 text-sm font-medium">How would you like to proceed?</p>
                        </div>

                        <div className="grid gap-4">
                            <a
                                href="https://cal.com/brx-labz/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-white text-black font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm uppercase tracking-widest leading-none mb-1">Book a Meeting</p>
                                    <p className="text-black/80 text-[11px] font-medium">30 min strategy session via Cal.com</p>
                                </div>
                            </a>

                            <a
                                href="mailto:brxlabz@gmail.com"
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 text-white font-bold transition-all hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm uppercase tracking-widest leading-none mb-1">Send an Email</p>
                                    <p className="text-white/40 text-[11px] font-medium">Drop us a line at brxlabz@gmail.com</p>
                                </div>
                            </a>
                            <a
                                href="https://wa.me/919451201779"
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-green-800/10 border border-white/10 text-white font-bold transition-all hover:bg-green-500/20 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm uppercase tracking-widest leading-none mb-1">WhatsApp Message</p>
                                    <p className="text-green-500/60 text-[11px] font-medium">Send us a message at +91 9451201779</p>
                                </div>
                            </a>
                        </div>

                        <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest">
                            Available for new projects
                        </p>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

const PricingCard = ({
    type,
    title,
    price,
    description,
    features,
    isPopular,
    delay,
    onContactOpen
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative flex flex-col p-6 rounded-4xl border backdrop-blur-lg transition-all duration-300",
                isPopular
                    ? "bg-white/8 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-105 z-10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
            )}
        >
            {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-xl">
                    Most Popular
                </div>
            )}

            <div className="space-y-1 mb-6">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{type}</p>
                <h4 className="text-2xl font-black text-white">{title}</h4>
            </div>

            <div className="mb-6">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{price}</span>
                    {price !== "Custom" && (
                        <span className="text-xs font-medium text-white/40">/one-time</span>
                    )}
                </div>
                <p className="mt-3 text-xs text-white/40 leading-relaxed font-medium">
                    {description}
                </p>
            </div>

            <div className="flex-1 space-y-3 mb-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                        <div className="mt-1 w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-[13px] text-white/60 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={onContactOpen}
                className={cn(
                    "w-full py-3 rounded-full font-black uppercase tracking-tight transition-all active:scale-95 text-xs",
                    isPopular
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                )}
            >
                Get Started
            </button>
        </motion.div>
    )
}

const Pricing = () => {
    const [plan, setPlan] = useState('dev') // 'dev' or 'design'
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <section className="py-20 relative overflow-hidden" id="pricing">
            {/* Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-xl mx-auto text-center mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                    >
                        Pricing
                    </motion.h2>

                    {/* Toggle */}
                    <div className="flex justify-center pt-2">
                        <div className="p-1 bg-white/5 border border-white/10 rounded-full flex gap-1">
                            <button
                                onClick={() => setPlan('dev')}
                                className={cn(
                                    "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                                    plan === 'dev' ? "bg-white text-black shadow-xl" : "text-white/40 hover:text-white"
                                )}
                            >
                                Development Only
                            </button>
                            <button
                                onClick={() => setPlan('design')}
                                className={cn(
                                    "px-5 py-2 rounded-full text-xs font-bold transition-all duration-300",
                                    plan === 'design' ? "bg-white text-black shadow-xl" : "text-white/40 hover:text-white"
                                )}
                            >
                                Design + Development
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {content[plan].map((card, idx) => (
                            <PricingCard
                                key={`${plan}-${card.title}`}
                                {...card}
                                delay={idx * 0.1}
                                onContactOpen={() => setIsContactOpen(true)}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Custom Quote Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 border border-white/5 rounded-full text-white font-bold hover:bg-neutral-800 transition-all shadow-2xl group text-sm"
                    >
                        Need a custom quote?
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </section>
    )
}

export default Pricing