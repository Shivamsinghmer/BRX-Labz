"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const PricingCard = ({
    type,
    title,
    price,
    description,
    features,
    isPopular,
    delay
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative flex flex-col p-6 rounded-4xl border transition-all duration-300",
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

            <button className={cn(
                "w-full py-3 rounded-full font-black uppercase tracking-tight transition-all active:scale-95 text-xs",
                isPopular
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
            )}>
                Get Started
            </button>
        </motion.div>
    )
}

const Pricing = () => {
    const [plan, setPlan] = useState('dev') // 'dev' or 'design'

    const content = {
        dev: [
            {
                type: "Basic Package",
                title: "Starter",
                price: "$1,999",
                description: "Perfect for small businesses looking to establish their digital presence.",
                features: [
                    "Frontend Development",
                    "Mobile Responsive",
                    "Basic SEO Setup",
                    "Contact Forms",
                    "3 Revisions",
                    "30 Days Support"
                ]
            },
            {
                type: "Most Popular",
                title: "Professional",
                price: "$3,999",
                description: "Ideal for growing businesses that need advanced functionality.",
                isPopular: true,
                features: [
                    "Everything in Starter",
                    "Advanced Animations",
                    "CMS Integration",
                    "E-commerce Ready",
                    "Analytics Setup",
                    "Unlimited Revisions",
                    "90 Days Support",
                    "Performance Optimization"
                ]
            },
            {
                type: "Premium Package",
                title: "Enterprise",
                price: "Custom",
                description: "For large-scale projects requiring custom solutions and ongoing support.",
                features: [
                    "Everything in Professional",
                    "Custom Backend Development",
                    "Third-party Integrations",
                    "Advanced Security",
                    "Multi-language Support",
                    "Dedicated Project Manager",
                    "Priority Support",
                    "6 Months Maintenance"
                ]
            }
        ],
        design: [
            {
                type: "Basic Package",
                title: "Starter",
                price: "$2,999",
                description: "Full brand identity plus high-performance web development.",
                features: [
                    "Brand Identity Design",
                    "UI/UX Design (3 Pages)",
                    "Frontend Development",
                    "Mobile Responsive",
                    "Basic SEO Setup",
                    "30 Days Support"
                ]
            },
            {
                type: "Most Popular",
                title: "Professional",
                price: "$5,499",
                description: "Complete design system and advanced technical execution.",
                isPopular: true,
                features: [
                    "Everything in Starter",
                    "Full Design System",
                    "UI/UX Design (Up to 8 Pages)",
                    "Advanced Animations",
                    "CMS Integration",
                    "90 Days Support",
                    "E-commerce Ready"
                ]
            },
            {
                type: "Premium Package",
                title: "Enterprise",
                price: "Custom",
                description: "Consultative design and architecture for industry leaders.",
                features: [
                    "Everything in Professional",
                    "Custom Illustration Pack",
                    "UX Research & Strategy",
                    "Custom Backend",
                    "Dedicated Project Manager",
                    "Priority Support",
                    "Lifetime Updates"
                ]
            }
        ]
    }

    return (
        <section className="py-20  relative overflow-hidden" id="pricing">
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
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 border border-white/5 rounded-full text-white font-bold hover:bg-neutral-800 transition-all shadow-2xl group text-sm">
                        Need a custom quote?
                        <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing