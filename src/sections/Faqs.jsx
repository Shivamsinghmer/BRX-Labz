"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/Section";
import { motion } from "motion/react";

export default function FAQ({
    title = "Frequently Asked Questions",
    items,
    className,
}) {
    return (
        <Section id="faqs" className={`${className} relative overflow-hidden`}>
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-125 h-125 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Support</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        Got Questions? <br />
                        <span className="text-white/20">We&apos;ve Got Answers.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-white/40 max-w-xl mx-auto text-sm md:text-base font-medium"
                    >
                        Everything you need to know about working with BRX Labz.
                        Can&apos;t find what you&apos;re looking for? Feel free to reach out.
                    </motion.p>
                </div>

                {/* FAQ Content */}
                <div className="max-w-4xl mx-auto">
                    {items !== false && items.length > 0 && (
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AccordionItem
                                        value={item.value || `item-${index + 1}`}
                                        className="border border-white/10 bg-white/2 backdrop-blur-xl rounded-2xl px-6 transition-all duration-300 hover:bg-white/4 hover:border-white/20 mb-4 overflow-hidden"
                                    >
                                        <AccordionTrigger className="text-left text-white/80 hover:text-white font-semibold py-6 transition-all decoration-transparent hover:no-underline">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white/50 leading-relaxed pb-6">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    )}
                </div>
            </div>
        </Section>
    );
}
