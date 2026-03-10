"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const photos = [
    { url: "https://picsum.photos/seed/about1/400/500", rotation: -2.5, yOffset: 4, delay: 0 },
    { url: "https://picsum.photos/seed/about2/400/500", rotation: 1.5, yOffset: -8, delay: 0.1, label: "To Vancouver" },
    { url: "https://picsum.photos/seed/about3/400/500", rotation: -1, yOffset: 12, delay: 0.2 },
    { url: "https://picsum.photos/seed/about4/400/500", rotation: 3, yOffset: -4, delay: 0.3, label: "From Punjab" },
];

function PolaroidCard({ photo, size }: { photo: typeof photos[0]; size: "sm" | "lg" }) {
    const w = size === "sm" ? "w-[200px] h-[245px]" : "w-[190px] h-[230px]";
    const p = size === "sm" ? "p-3 pb-12" : "p-4 pb-16";
    const imgW = size === "sm" ? "w-[176px] h-[194px]" : "w-[158px] h-[182px]";

    return (
        <div
            className={`bg-white ${p} rounded-md shadow-md border border-divider/20 relative cursor-pointer`}
            style={{ transform: `rotate(${photo.rotation}deg)` }}
        >
            <img
                src={photo.url}
                alt="Personal portrait"
                className={`${imgW} object-cover`}
            />
            {photo.label && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center z-10">
                    <span className="bg-[#FFF4B3] text-[#4A4A4A] px-2 py-0.5 text-[10px] font-script rotate-[-2deg] shadow-xs">
                        {photo.label}
                    </span>
                </div>
            )}
        </div>
    );
}

export default function PolaroidStrip() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const go = (next: number) => {
        setDirection(next > active ? 1 : -1);
        setActive(next);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = touchStartX.current - e.changedTouches[0].clientX;
        if (delta > 40 && active < photos.length - 1) go(active + 1);
        else if (delta < -40 && active > 0) go(active - 1);
        touchStartX.current = null;
    };

    const variants = {
        enter: (d: number) => ({ x: d * 60, opacity: 0, scale: 0.9 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (d: number) => ({ x: d * -60, opacity: 0, scale: 0.9 }),
    };

    return (
        <>
            {/* ── Mobile slider (hidden on sm+) ── */}
            <div
                className="flex flex-col items-center gap-6 sm:hidden w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative h-[270px] w-[220px] flex items-center justify-center overflow-visible">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={active}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                            className="absolute"
                        >
                            <PolaroidCard photo={photos[active]} size="sm" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                    {photos.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => go(i)}
                            aria-label={`Go to photo ${i + 1}`}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: i === active ? "20px" : "8px",
                                height: "8px",
                                background: i === active ? "var(--color-accent)" : "var(--color-divider)",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* ── Desktop strip (hidden on mobile) ── */}
            <div className="hidden sm:flex gap-6 justify-center pt-4 pb-8 w-full">
                {photos.map((photo, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: photo.yOffset }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: photo.delay }}
                        whileHover={{ scale: 1.05, y: photo.yOffset - 10, zIndex: 20 }}
                        className="relative shrink-0"
                    >
                        <PolaroidCard photo={photo} size="lg" />
                    </motion.div>
                ))}
            </div>
        </>
    );
}

