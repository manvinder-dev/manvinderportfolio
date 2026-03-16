import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoCarousel from "@/components/PhotoCarousel";

export const metadata = {
    title: "About | Manvinder Rayat",
    description: "Developer with a passion for creating user-friendly systems.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center gap-12 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-hidden">

            {/* Header */}
            <section className="mb-8 text-center">
                <h1 className="text-section text-foreground">
                    A bit about{" "}
                    <span className="text-script text-accent">myself</span>
                </h1>
            </section>

            {/* Photo section: carousel on mobile, horizontal strip on desktop */}
            <section className="w-full">
                {/* Mobile carousel */}
                <div className="sm:hidden">
                    <PhotoCarousel />
                </div>

                {/* Desktop horizontal strip */}
                <div className="hidden sm:grid grid-cols-4 gap-3">
                    <div className="rounded-2xl overflow-hidden aspect-square relative group">
                        <img src="/about/Me1.JPG" alt="About"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium text-sm">From Punjab</span>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square relative group">
                        <img src="/about/Me2.JPG" alt="About"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square relative group">
                        <img src="/about/Me3.jpg" alt="About"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square relative group">
                        <img src="/about/Me4.jpg" alt="About"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium text-sm">To Vancouver</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="w-full space-y-6 mt-12 text-body text-lg leading-relaxed text-[#4A4A4A] text-left">
                <p>
                    Born and brought up in <Link className="underline underline-offset-4" href="https://en.wikipedia.org/wiki/Punjab,_India">ਪੰਜਾਬ (Panjab, India)</Link>, my early introduction to computers was through <Link className="underline underline-offset-4" href="https://en.wikipedia.org/wiki/Programmable_logic_controller">Programmable Logic Controller (PLC)</Link> operated lathe machines. For an 8-year-old to watch humans control machines through pure logic, shaping my ideology of machines. This mindset followed me to Vancouver, where I'm studying Information Technology @ <Link className="underline underline-offset-4" href="https://kpu.ca">KPU</Link>.
                </p>

                <p>
                    Over the past few years, I've been developing my skills to build people-friendly systems, mostly in 0→1 environments. I've worked across a spectrum of institutions - from supporting, developing, and maintaining on-premise and cloud infrastructure at a canadian post-secondary, to developing and testing products at a local startup.
                </p>

                <p>
                    I'm drawn to the gap around usability of AI-developed applications and how to solve communal problems using them. If you're building something ambitious, I'd love to connect!
                </p>

                <div className="pt-12 flex justify-center">
                    <Link
                        href="/lets-chat"
                        className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-full font-medium transition-all shadow-md"
                    >
                        Want to connect?
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
