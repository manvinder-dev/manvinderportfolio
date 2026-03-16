import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";

export const metadata = {
    title: "Gallery | Play | Manvinder Rayat",
    description: "A collection of my photography.",
};

export default function GalleryPage() {
    const shotsDirectory = path.join(process.cwd(), 'public/shots');
    let photos: Array<{ id: string; url: string; label: string; rotation: number }> = [];
    try {
        const filenames = fs.readdirSync(shotsDirectory);
        photos = filenames
            .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map((filename, index) => {
                // Deterministic rotation based on index between -2 and 2
                const rotation = (index % 5) - 2; 
                return {
                    id: String(index + 1),
                    url: `/shots/${filename}`,
                    label: filename.replace(/\.[^/.]+$/, ""),
                    rotation
                };
            });
    } catch (e) {
        console.error("Failed to read shots directory", e);
    }

    return (
        <div className="flex flex-col gap-16 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-2">
                <Link href="/play" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-foreground transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Play
                </Link>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-foreground">
                    Some Playing <span className="text-script text-accent">Around</span>
                </h1>
                <p className="text-xl text-[#888888] font-light leading-relaxed mt-4">
                    A collection of moments captured through my lenses.
                </p>
            </div>

            <section className="pb-12">
                <PhotoGallery photos={photos} />
            </section>
        </div>
    );
}
