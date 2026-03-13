import { getBlogPosts } from "@/utils/mdx";
import BlogGrid from "@/components/BlogGrid";

export const metadata = {
    title: "Blog | Manvinder Rayat",
    description: "Mind & Matter",
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="flex flex-col gap-16 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Header */}
            <section className="text-center">
                <h1 className="text-section text-foreground">
                    Thought{" "}
                    <span className="text-script text-accent">Scape</span>
                </h1>
            </section>

            {/* Blog Feed */}
            <section>
                <BlogGrid posts={posts} />
            </section>

        </div>
    );
}
