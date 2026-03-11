import GearCard, { GearItem } from "@/components/GearCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Play | Manvinder Rayat",
    description: "Personal photography portfolio.",
};

const gear: GearItem[] = [
    {
        name: "Canon EOS Rebel T7",
        imageUrl: "/gear/canon-rebel-t7.png"
    },
    {
        name: "Canon EF 75-300mm Lens",
        imageUrl: "/gear/canon-75-300.png"
    },
    {
        name: "DJI Neo",
        imageUrl: "/gear/dji-neo.png"
    }
];

export default function PlayPage() {
    return (
        <div className="flex flex-col gap-24 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Header */}
            <section className="text-center">
                <h1 className="text-section text-foreground">
                    Beyond{" "}
                    <span className="text-script text-accent">Screens</span>
                </h1>
                <p className="text-script text-accent text-lg mt-1">(maybe not so much!)</p>
            </section>

            {/* Camera Gear Section */}
            <section className="space-y-8">
                <h2 className="text-2xl text-section text-foreground">Tools of <span className="text-script text-accent">Creation</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gear.map((item, idx) => (
                        <GearCard key={idx} item={item} />
                    ))}
                </div>
            </section>

            {/* Photo Gallery Link */}
            <section className="pb-12 flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                <div className="text-center md:text-left space-y-2">
                    <h2 className="text-2xl md:text-3xl font-medium text-foreground">Some Playing <span className="text-script text-accent">Around</span></h2>
                    <p className="text-[#888888] text-lg max-w-md mx-auto md:mx-0">
                        A collection of moments captured through my lenses.
                    </p>
                </div>
                <Link
                    href="/play/gallery"
                    className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-8 py-4 rounded-full font-medium transition-all shadow-md shrink-0"
                >
                    View Gallery
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>

        </div>
    );
}
