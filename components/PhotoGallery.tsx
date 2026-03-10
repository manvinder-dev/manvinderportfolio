"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Photo = {
    id: string;
    url: string;
    label?: string;
    rotation?: number;
};

// Per-photo bento spans: [mobile classes, desktop classes]
// 6-photo layout:
//   Desktop 3-col grid:
//     [0] 2col×2row (hero)  [1] 1col×1row  [2] 1col×1row
//     [3] 1col×1row         [4] 1col×1row  [5] 1col×1row
//   Mobile 2-col grid:
//     [0] 2col×1row         [1] 1col×1row  [2] 1col×1row
//     [3] 2col×1row         [4] 1col×1row  [5] 1col×1row
const SPANS: string[] = [
    "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2",  // hero
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1 sm:col-span-1 sm:row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
];

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedPhoto = photos.find((p) => p.id === selectedId);

    return (
        <>
            {/* Full-bleed bento grid */}
            <div
                className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 w-full"
                style={{ gridAutoRows: "clamp(140px, 22vw, 320px)" }}
            >
                {photos.map((photo, i) => (
                    <motion.div
                        key={photo.id}
                        layoutId={`photo-${photo.id}`}
                        onClick={() => setSelectedId(photo.id)}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className={`relative cursor-zoom-in rounded-xl overflow-hidden group ${SPANS[i] ?? "col-span-1 row-span-1"}`}
                    >
                        <img
                            src={photo.url}
                            alt={photo.label || "Photography"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {photo.label && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                                <span className="text-white text-xs sm:text-sm font-medium">{photo.label}</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedId && selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md cursor-zoom-out"
                        onClick={() => setSelectedId(null)}
                    >
                        <button
                            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
                            onClick={() => setSelectedId(null)}
                            aria-label="Close"
                        >
                            <X className="w-7 h-7" />
                        </button>
                        <motion.div
                            layoutId={`photo-${selectedId}`}
                            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedPhoto.url}
                                alt={selectedPhoto.label || "Photography"}
                                className="w-full h-auto max-h-[85vh] object-contain"
                            />
                            {selectedPhoto.label && (
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <span className="text-white text-sm font-medium">{selectedPhoto.label}</span>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
