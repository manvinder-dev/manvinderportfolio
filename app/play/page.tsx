import GearCard, { GearItem } from "@/components/GearCard";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata = {
    title: "Play | Manvinder Rayat",
    description: "Personal photography portfolio.",
};

const gear: GearItem[] = [
    {
        name: "Fujifilm X100V",
        model: "X100V",
        note: "My everyday carry. The film simulations give me exactly what I want straight out of camera.",
        imageUrl: "https://picsum.photos/seed/camera1/400/400"
    },
    {
        name: "Sony Alpha a7IV",
        model: "ILCE-7M4",
        note: "For planned shoots and when I need reliable autofocus and higher resolution. A dependable workhorse.",
        imageUrl: "https://picsum.photos/seed/camera2/400/400"
    },
    {
        name: "Canon AE-1",
        model: "35mm SLR",
        note: "For slowing down and being intentional with every frame. Processing film is my kind of meditation.",
        imageUrl: "https://picsum.photos/seed/camera3/400/400"
    }
];

const mockPhotos = [
    { id: "1", url: "icon.png", label: "From Pune", rotation: -1.5 },
    { id: "2", url: "https://picsum.photos/seed/photo2/800/1000", rotation: 1 },
    { id: "3", url: "https://picsum.photos/seed/photo3/800/1000", label: "To San Francisco", rotation: 2 },
    { id: "4", url: "https://picsum.photos/seed/photo4/800/1000", rotation: -2 },
    { id: "5", url: "https://picsum.photos/seed/photo5/800/1000", rotation: 1.5 },
    { id: "6", url: "https://picsum.photos/seed/photo6/800/1000", label: "Early Mornings", rotation: -1 },
    { id: "7", url: "https://picsum.photos/seed/photo6/800/1000", label: "Early Mornings", rotation: -1 },
    { id: "8", url: "https://picsum.photos/seed/photo6/800/1000", label: "Early Mornings", rotation: -1 },
    { id: "9", url: "https://picsum.photos/seed/photo6/800/1000", label: "Early Mornings", rotation: -1 },
    { id: "10", url: "icon.png", label: "From Pune", rotation: -1.5 }
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
                <p className="text-script text-accent text-xl mt-1">(maybe not so much!)</p>
            </section>

            {/* Camera Gear Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-medium text-foreground">What I shoot with</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gear.map((item, idx) => (
                        <GearCard key={idx} item={item} />
                    ))}
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="space-y-8 pb-12">
                <h2 className="text-2xl font-medium text-foreground">Gallery</h2>
                <PhotoGallery photos={mockPhotos} />
            </section>

        </div>
    );
}
