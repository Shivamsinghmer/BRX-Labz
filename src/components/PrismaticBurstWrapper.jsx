"use client";

import React from 'react';

export default function PrismaticBurstWrapper() {
    const videoRef = React.useRef(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
            // Check if video is already ready (e.g. from cache)
            if (videoRef.current.readyState >= 3) {
                setIsLoaded(true);
            }
        }
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            {/* Fallback gradient/color while video loads */}
            <div className={`absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black transition-opacity duration-1000 ${isLoaded ? 'opacity-80' : 'opacity-100'}`} />

            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setIsLoaded(true)}
                onCanPlay={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover blur-sm transition-opacity duration-1000 ${isLoaded ? 'opacity-60' : 'opacity-0'
                    }`}
            >
                <source src="/bg.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
