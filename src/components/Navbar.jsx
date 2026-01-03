"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { InteractiveHoverButton } from './ui/interactive-hover-button'

const navLinks = [
    { name: "Our Work", href: "/#work" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Careers", href: "/careers" },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='sticky top-4 md:top-8 z-50 md:w-[70%] lg:w-[50%] px-4 w-[92%] mx-auto rounded-3xl p-2 from-card/100 to-card/20 dark:border-border/10 dark:border-t-border/10 dark:from-primary/5 dark:to-primary/2 bg-white/10 backdrop-blur-md dark:border-b-0 shadow-2xl'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link href="/" className='flex items-center gap-4 dark:invert'>
                        <Image
                            src="/BRXLogo.png"
                            alt="BRX Labz"
                            width={160}
                            height={160}
                            quality={100}
                            priority
                            className="w-auto h-7 md:h-10"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center font-medium text-sm gap-6 text-white/60'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Link href="https://cal.com/brx-labz/30min" className='hidden sm:flex items-center'>
                            <InteractiveHoverButton className="dark:invert dark:border-none dark:text-primary h-9 px-5 text-xs">
                                Book a Call
                            </InteractiveHoverButton>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 text-white"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 md:hidden overflow-hidden"
                    >
                        <div className="bg-neutral-900/90 backdrop-blur-2xl  rounded-3xl p-6 shadow-2xl">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-bold text-white/80 hover:text-white transition-colors py-2 block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="pt-4 border-t border-white/5"
                                >
                                    <Link
                                        href="https://cal.com/brx-labz/30min"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full h-12 flex items-center justify-center bg-white text-black rounded-2xl font-black uppercase text-sm"
                                    >
                                        Book a Call
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar