import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoCarousel from "@/components/PhotoCarousel";

export const metadata = {
    title: "About | Manvinder Rayat",
    description: "Product designer weaving warm digital experiences.",
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

            {/* Photo section: carousel on mobile, bento on desktop */}
            <section className="w-full">
                {/* Mobile carousel */}
                <div className="sm:hidden">
                    <PhotoCarousel />
                </div>

                {/* Desktop bento grid */}
                <div className="hidden sm:grid grid-cols-4 gap-3">
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden aspect-square">
                        <img src="https://picsum.photos/seed/about1/800/800" alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                        <img src="https://picsum.photos/seed/about2/500/500" alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                        <img src="https://picsum.photos/seed/about3/500/500" alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                        <img src="https://picsum.photos/seed/about4/500/500" alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-square">
                        <img src="https://picsum.photos/seed/about5/500/500" alt="About"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="max-w-2xl mx-auto space-y-6 mt-12 text-body text-lg leading-relaxed text-[#4A4A4A] text-center">
                <p>
                    I'm Manvinder, a product designer based between Vancouver and Punjab. I grew up surrounded by vibrant colors and stories, which heavily influences my design philosophy today. I believe the best digital products aren't just usable—they have a pulse.
                </p>

                <p>
                    My journey into design wasn't linear. I started out studying cognitive psychology, endlessly fascinated by how people perceive and interact with the world around them. That curiosity naturally evolved into structuring digital spaces. Now, I use systems thinking and human-centered design to craft products that feel as good as they look.
                </p>

                <blockquote className="border-l-[3px] border-accent pl-6 py-2 my-8">
                    <p className="text-script text-accent text-3xl md:text-4xl leading-snug m-0 p-0">
                        "Design is empathy made visible."
                    </p>
                </blockquote>

                <p>
                    Over the last few years, I've had the privilege of building high-impact tools for enterprise platforms and fast-paced startups. I thrive in the space between blank-page ambiguity and pixel-perfect execution.
                </p>

                <p>
                    Currently, my focus is bridging the gap between utilitarian interfaces and editorial elegance. I want to build software that people actually look forward to opening.
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
