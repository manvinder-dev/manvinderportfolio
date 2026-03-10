"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ProjectFrontMatter } from "@/utils/mdx";

type MDXDocument = { slug: string; frontmatter: ProjectFrontMatter };

export default function ProjectGrid({ projects }: { projects: MDXDocument[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string>("All");

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach(p => p.frontmatter.tags?.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, [projects]);

    const filteredProjects = useMemo(() => {
        let result = projects;

        if (searchQuery.trim()) {
            const fuse = new Fuse(result, {
                keys: ["frontmatter.title", "frontmatter.description", "frontmatter.tags"],
                threshold: 0.3,
            });
            result = fuse.search(searchQuery).map(res => res.item);
        }

        if (selectedTag !== "All") {
            result = result.filter(p => p.frontmatter.tags?.includes(selectedTag));
        }

        return result;
    }, [projects, searchQuery, selectedTag]);

    return (
        <div className="space-y-8">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Tag Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar -mx-6 px-6 md:px-0 md:mx-0">
                    <button
                        onClick={() => setSelectedTag("All")}
                        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedTag === "All" ? "bg-foreground text-card" : "bg-divider/30 text-body hover:bg-divider/50"
                            }`}
                    >
                        All Work
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? "bg-foreground text-card" : "bg-divider/30 text-body hover:bg-divider/50"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64 shrink-0">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-body">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-2 bg-card border border-divider/50 rounded-full text-sm focus:ring-1 focus:ring-accent focus:border-accent outline-hidden transition-all text-foreground placeholder:text-body"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            key={project.slug}
                        >
                            <ProjectCard project={project.frontmatter} slug={project.slug} />
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-12 text-center text-body"
                        >
                            No projects found matching your criteria.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
