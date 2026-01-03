"use client"

import Link from "next/link";

export const faqs = [
    {
        question: "What exactly does BRX Labz do?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-160 text-balance">
                    BRX Labz is a premium digital agency specializing in high-performance web development,
                    strategic brand identity, and conversion-focused product design. We don't just build websites;
                    we build digital assets that drive growth and scale.
                </p>
                <p className="text-muted-foreground mb-4 max-w-160 text-balance">
                    From startups looking to launch their first MVP to established brands seeking a digital overhaul,
                    we provide the design and engineering expertise needed to dominate your market.
                </p>
            </>
        ),
    },
    {
        question: "How long does a typical project take?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-150">
                    Timelines vary depending on the complexity of the project. A high-converting landing page
                    can typically be delivered in 1-2 weeks, while more complex web applications or full brand
                    overhauls might take 4-8 weeks.
                </p>
                <p className="text-muted-foreground mb-4 max-w-150">
                    We prioritize speed without compromising quality, ensuring you get to market as fast as possible
                    with a product that is perfected for scale.
                </p>
            </>
        ),
    },
    {
        question: "What is your design and development process?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Our process is highly collaborative and transparent. It starts with a **Strategy & Discovery**
                    phase to understand your goals, followed by **Design & Prototyping** where we map out the
                    user experience.
                </p>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Once the design is perfected, we move into **Development & Engineering**, building your product
                    with modern tech stacks like Next.js and Tailwind CSS. Finally, we handle **Testing & Launch**
                    to ensure everything is flawless.
                </p>
            </>
        ),
    },
    {
        question: "Do you offer branding and identity services?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Yes, absolutely. We believe that a great product needs a great identity. We offer comprehensive
                    branding services including logo design, color palettes, typography, and visual voice to
                    ensure your brand resonates with your target audience.
                </p>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Our goal is to create a cohesive brand experience that translates seamlessly across all
                    digital touchpoints.
                </p>
            </>
        ),
    },
    {
        question: "How much does a project with BRX Labz cost?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Because every project is unique, we offer customized pricing based on your specific needs
                    and goals. We work with various budgets and offer both project-based pricing and retainer models.
                </p>
                <p className="text-muted-foreground mb-4 max-w-145">
                    For a detailed estimate, we recommend booking a strategy call where we can discuss your
                    requirements and provide a tailored proposal.
                </p>
            </>
        ),
    },
    {
        question: "Will I have support after the project is launched?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Yes, we don't just disappear after launch. We offer ongoing support and maintenance packages
                    to ensure your website or application stays updated, secure, and continues to perform at its best.
                </p>
                <p className="text-muted-foreground mb-4 max-w-145">
                    Whether you need minor updates or major feature additions, we're here to grow with you.
                </p>
            </>
        ),
    },
];