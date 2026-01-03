"use client";

import dynamic from "next/dynamic";

const PrismaticBurst = dynamic(() => import("./PrismaticBurst"), {
    ssr: false,
});

export default function PrismaticBurstWrapper(props) {
    return <PrismaticBurst {...props} />;
}
