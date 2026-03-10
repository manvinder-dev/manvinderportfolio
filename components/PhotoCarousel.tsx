"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
    "https://picsum.photos/seed/about1/800/800",
    "https://picsum.photos/seed/about2/800/800",
    "https://picsum.photos/seed/about3/800/800",
    "https://picsum.photos/seed/about4/800/800",
    "https://picsum.photos/seed/about5/800/800",
];

export default function PhotoCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDir: number) => {
        setDirection(newDir);
        setCurrent((prev) => (prev + newDir + photos.length) % photos.length);
    };

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
    };

    return (
        <div className="relative w-full">
            {/* Slide */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                        key={current}
                        src={photos[current]}
                        alt={`Photo ${current + 1}`}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -50) paginate(1);
                            else if (info.offset.x > 50) paginate(-1);
                        }}
                        className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                    />
                </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {photos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-4" : "bg-foreground/25"}`}
                        aria-label={`Go to photo ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
