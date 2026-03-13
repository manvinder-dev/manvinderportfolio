import PhotoGallery from "@/components/PhotoGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Gallery | Play | Manvinder Rayat",
    description: "A collection of my photography.",
};

const mockPhotos = [
    { id: "1", url: "/icon.png", label: "Test Image", rotation: -1.5 },
    { id: "2", url: "https://picsum.photos/seed/photo2/800/1000", rotation: 1 },
    { id: "3", url: "https://picsum.photos/seed/photo3/800/1000", label: "Test Image 2", rotation: 2 },
    { id: "4", url: "https://picsum.photos/seed/photo4/800/1000", rotation: -2 },
    { id: "5", url: "https://picsum.photos/seed/photo5/800/1000", rotation: 1.5 },
    { id: "6", url: "https://picsum.photos/seed/photo6/800/1000", label: "Test Image 3", rotation: -1 },
    { id: "7", url: "https://picsum.photos/seed/photo6/800/1000", label: "Test Image 5", rotation: -1 },
    { id: "8", url: "https://picsum.photos/seed/photo6/800/1000", label: "Test Image 6", rotation: -1 },
    { id: "9", url: "https://picsum.photos/seed/photo6/800/1000", label: "Test Image 7", rotation: -1 },
    { id: "10", url: "/icon.png", label: "Test Image 8", rotation: -1.5 }
];

export default function GalleryPage() {
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
                <PhotoGallery photos={mockPhotos} />
            </section>
        </div>
    );
}
