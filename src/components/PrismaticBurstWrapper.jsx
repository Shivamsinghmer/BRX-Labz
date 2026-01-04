"use client";

import React, { useState, useEffect } from 'react';
import dynamic from "next/dynamic";

const PrismaticBurst = dynamic(() => import("./PrismaticBurst"), {
    ssr: false,
});

export default function PrismaticBurstWrapper(props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    if (isMobile) {
        return (
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten"
                >
                    <source src="/bg.mp4" type="video/mp4" />
                </video>
            </div>
        );
    }

    return <PrismaticBurst {...props} />;
}
