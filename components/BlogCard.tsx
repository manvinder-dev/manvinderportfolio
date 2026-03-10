"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPostFrontMatter } from "@/utils/mdx";
import { format } from "date-fns";

export default function BlogCard({ post, slug }: { post: BlogPostFrontMatter; slug: string }) {
    return (
        <Link href={`/blog/${slug}`} className="group block focus:outline-hidden h-full">
            <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.06)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-card rounded-xl p-6 shadow-xs border border-divider/40 h-full flex flex-col"
            >
                <div className="flex items-center gap-4 text-sm text-[#888888] mb-3">
                    <time dateTime={post.date}>
                        {format(new Date(post.date), "MMMM d, yyyy")}
                    </time>
                    {post.tags?.[0] && (
                        <>
                            <span>·</span>
                            <span className="text-tag bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                                {post.tags[0]}
                            </span>
                        </>
                    )}
                </div>
                <h3 className="text-card-title text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                </h3>
                <p className="text-body text-sm mt-auto line-clamp-2">
                    {post.excerpt}
                </p>
            </motion.div>
        </Link>
    );
}
