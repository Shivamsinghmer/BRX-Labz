import { cn } from "@/lib/utils";
import {
    Footer,
    FooterBottom,
    FooterColumn,
    FooterContent,
} from "@/components/ui/footer";
import BRXLabz from "@/components/BRXLabz";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ArrowUpRight } from "lucide-react";

export default function FooterSection({
    logo = <BRXLabz />,
    name = "BRX Labz",
    columns = [
        {
            title: "Navigation",
            links: [
                { text: "Our Work", href: "/#work" },
                { text: "Services", href: "/#services" },
                { text: "Process", href: "/#approach" },
                { text: "Pricing", href: "/#pricing" },
            ],
        },
        {
            title: "Company",
            links: [
                { text: "Testimonials", href: "/#testimonials" },
                { text: "Careers", href: "/careers" },
                { text: "FAQs", href: "/#faqs" },
            ],
        },
        {
            title: "Socials",
            links: [
                { text: "LinkedIn", href: "https://www.linkedin.com/company/brx-labz" },
                { text: "Twitter / X", href: "https://x.com/BrxLabz" },
                { text: "Instagram", href: "https://www.instagram.com/brxlabz/" },
            ],
        },
    ],
    copyright = `© ${new Date().getFullYear()} BRX Labz. All rights reserved.`,
    policies = [
        { text: "Privacy Policy", href: "/policies#privacy" },
        { text: "Terms of Service", href: "/policies#terms" },
    ],
    showModeToggle = true,
    className,
}) {
    return (
        <footer className={cn("relative bg-black w-full border-t border-white/5 pt-16 overflow-hidden", className)}>
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-75 bg-linear-to-b from-blue-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <FooterContent className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <FooterColumn className="col-span-1 md:col-span-1 flex flex-col items-start gap-3">
                        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
                            <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                                {logo}
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                                {name}
                            </span>
                        </div>
                        <p className="text-white/40 text-sm max-w-60 leading-relaxed mt-2 font-medium">
                            Synthesizing code and design into high-conversion digital experiences.
                        </p>
                    </FooterColumn>

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {columns.map((column, index) => (
                            <FooterColumn key={index} className="gap-5">
                                <h3 className="text-white/90 text-sm font-bold uppercase tracking-widest">{column.title}</h3>
                                <ul className="flex flex-col gap-3">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="text-white/40 hover:text-white text-sm transition-all duration-300 flex items-center gap-1 group/link w-fit"
                                            >
                                                {link.text}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all duration-300" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}
                    </div>
                </FooterContent>

                <div className="w-full relative py-12 border-t border-white/5">
                    <div className="absolute -inset-8 flex items-center justify-center select-none h-48 overflow-hidden">
                        <TextHoverEffect text="BRX LABZ" />
                    </div>

                    <FooterBottom className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t-0">
                        <div className="text-white/30 text-xs font-medium tracking-tight">
                            {copyright}
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                {policies.map((policy, index) => (
                                    <a
                                        key={index}
                                        href={policy.href}
                                        className="text-white/30 hover:text-white text-xs transition-colors font-medium border-b border-white/0 hover:border-white/20"
                                    >
                                        {policy.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FooterBottom>
                </div>
            </div>

            {/* Very subtle bottom highlight */}
            <div className="h-1 w-full bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
        </footer>
    );
}

