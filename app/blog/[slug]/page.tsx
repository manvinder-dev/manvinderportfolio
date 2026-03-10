import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getBlogPosts } from "@/utils/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { format } from "date-fns";

// Allow slugs not pre-generated at build time (new posts won't 404)
export const dynamicParams = true;

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((p) => ({
        slug: p.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const mdxComponents = {
        h2: (props: any) => <h2 className="text-2xl md:text-3xl font-medium mt-16 mb-6 text-foreground tracking-tight" {...props} />,
        h3: (props: any) => <h3 className="text-xl font-medium mt-12 mb-4 text-foreground tracking-tight" {...props} />,
        p: (props: any) => <p className="text-body text-[1.125rem] leading-relaxed mb-6 text-[#333333]" {...props} />,
        ul: (props: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-body text-[1.125rem] text-[#333333]" {...props} />,
        li: (props: any) => <li {...props} />,
        a: (props: any) => <a className="text-accent font-medium hover:underline underline-offset-4" {...props} />,
        blockquote: (props: any) => <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-xl text-[#666666]" {...props} />
    };

    return (
        <article className="max-w-[680px] mx-auto py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="mb-12">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-foreground transition-colors mb-10">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <div className="flex items-center gap-4 text-[#888888] mb-6 text-sm font-medium">
                    <time dateTime={post.frontmatter.date}>
                        {format(new Date(post.frontmatter.date), "MMMM d, yyyy")}
                    </time>
                    {post.frontmatter.tags?.[0] && (
                        <>
                            <span>·</span>
                            <span className="text-tag bg-accent/10 text-accent px-2 py-0.5 rounded-full">
                                {post.frontmatter.tags[0]}
                            </span>
                        </>
                    )}
                </div>
                <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6">
                    {post.frontmatter.title}
                </h1>
                <p className="text-xl text-[#888888] font-light leading-relaxed">
                    {post.frontmatter.excerpt}
                </p>
            </div>

            {post.frontmatter.coverImage && (
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-divider/20 mb-16 shadow-xs border border-divider/40">
                    <img
                        src={post.frontmatter.coverImage}
                        alt={post.frontmatter.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Special Drop Cap for the first paragraph of the post */}
            <div className="prose prose-neutral max-w-none first-letter:text-6xl first-letter:font-script first-letter:text-accent first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
                <MDXRemote source={post.content} components={mdxComponents} />
            </div>

        </article>
    );
}
