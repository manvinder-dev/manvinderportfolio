"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Photo = {
    src: string;
    label: string;
};

const photos: Photo[] = [
    { src: "/shots/IMG_0771 2.JPG", label: "Landscape" },
    { src: "/shots/IMG_0773.JPG", label: "Cityscape" },
    { src: "/shots/IMG_0776.JPG", label: "Nature" },
    { src: "/shots/IMG_0780.JPG", label: "Architecture" },
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
                    <motion.div
                        key={current}
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
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing group"
                    >
                        <img
                            src={photos[current].src}
                            alt={`Photo ${current + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                            <span className="text-white font-medium text-sm">{photos[current].label}</span>
                        </div>
                    </motion.div>
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
