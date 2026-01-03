"use client"
import React from 'react'
import { motion } from "motion/react"
import { MessageSquare, Mail } from "lucide-react"

const FloatingContact = () => {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-100 flex flex-col gap-4">
            {/* Email Float */}
            <motion.a
                href="mailto:brxlabz@gmail.com"
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white  text-black flex items-center justify-center shadow-2xl border border-white/20 transition-all group"
            >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-white text-black text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Email Us
                </span>
            </motion.a>

            {/* WhatsApp Float */}
            <motion.a
                href="https://wa.me/919451201779"
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all group"
            >
                <div className="relative">
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full" />
                </div>
                <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    WhatsApp Me
                </span>
            </motion.a>
        </div>
    )
}

export default FloatingContact
