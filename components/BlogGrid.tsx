"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import { BlogPostFrontMatter } from "@/utils/mdx";

type MDXDocument = { slug: string; frontmatter: BlogPostFrontMatter };

export default function BlogGrid({ posts }: { posts: MDXDocument[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string>("All");

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(p => p.frontmatter.tags?.forEach(t => tags.add(t)));
        return Array.from(tags).sort();
    }, [posts]);

    const filteredPosts = useMemo(() => {
        let result = posts;

        if (searchQuery.trim()) {
            const fuse = new Fuse(result, {
                keys: ["frontmatter.title", "frontmatter.excerpt", "frontmatter.tags"],
                threshold: 0.3,
            });
            result = fuse.search(searchQuery).map(res => res.item);
        }

        if (selectedTag !== "All") {
            result = result.filter(p => p.frontmatter.tags?.includes(selectedTag));
        }

        return result;
    }, [posts, searchQuery, selectedTag]);

    return (
        <div className="space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar -mx-6 px-6 md:px-0 md:mx-0">
                    <button
                        onClick={() => setSelectedTag("All")}
                        className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedTag === "All" ? "bg-foreground text-card" : "bg-divider/30 text-body hover:bg-divider/50"
                            }`}
                    >
                        All
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

                <div className="relative w-full md:w-72 shrink-0">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#888888]">
                        <Search className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-4 py-2.5 bg-card border border-divider/50 rounded-full text-sm focus:ring-1 focus:ring-accent focus:border-accent outline-hidden transition-all text-foreground placeholder:text-[#A0A0A0]"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid Feed */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            key={post.slug}
                            className="h-full"
                        >
                            <BlogCard post={post.frontmatter} slug={post.slug} />
                        </motion.div>
                    ))}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-16 text-center text-body"
                        >
                            No posts found matching that search.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
