"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectFrontMatter } from "@/utils/mdx";

export default function ProjectCard({ project, slug }: { project: ProjectFrontMatter; slug: string }) {
    return (
        <Link href={`/work/${slug}`} className="group block focus:outline-hidden">
            <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-card rounded-xl overflow-hidden shadow-xs border border-divider/40 h-full flex flex-col"
            >
                <div className="aspect-[4/3] bg-divider/20 relative w-full overflow-hidden">
                    {project.coverImage ? (
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#A0A0A0]">
                            No Image
                        </div>
                    )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-card-title text-foreground mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-body text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <span key={tag} className="text-tag bg-[#F2F2F2] text-[#4A4A4A] px-2 py-1 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
