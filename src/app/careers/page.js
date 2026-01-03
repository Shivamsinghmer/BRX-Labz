import CareersContent from "./CareersContent";

export const metadata = {
    title: "Careers",
    description: "Join our world-class team of designers and engineers. We're looking for Full Stack Developers, App Developers, UI/UX Designers, and Sales Managers to help us build the future of the web.",
    openGraph: {
        title: "Careers | Join BRX Labz",
        description: "Build the future of the web with BRX Labz. Explore open roles in development, design, and growth.",
        type: "website",
    },
};

export default function CareerPage() {
    return <CareersContent />;
}