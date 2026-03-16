import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getProjects } from "@/utils/mdx";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((p) => ({
        slug: p.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    // Define custom MDX components suitable for the design language
    const mdxComponents = {
        h1: () => null, // Hide h1 from MDX to avoid duplicate titles
        h2: (props: any) => <h2 className="text-2xl md:text-3xl font-medium mt-16 mb-6 text-foreground" {...props} />,
        h3: (props: any) => <h3 className="text-xl font-medium mt-12 mb-4 text-foreground" {...props} />,
        p: (props: any) => <p className="text-body text-lg leading-relaxed mb-6" {...props} />,
        ul: (props: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-body text-lg" {...props} />,
        li: (props: any) => <li {...props} />,
        a: (props: any) => <a className="text-accent hover:underline underline-offset-4" {...props} />,
        table: (props: any) => (
            <div className="w-full overflow-x-auto mb-8 rounded-xl border border-divider/40 bg-white/40 shadow-sm">
                <table className="w-full text-left border-collapse text-body" {...props} />
            </div>
        ),
        thead: (props: any) => <thead className="bg-[#EBEBEB] border-b border-divider/40" {...props} />,
        th: (props: any) => <th className="px-5 py-4 font-semibold text-foreground text-sm tracking-wide" {...props} />,
        tbody: (props: any) => <tbody className="divide-y divide-divider/20" {...props} />,
        tr: (props: any) => <tr className="hover:bg-black/5 transition-colors" {...props} />,
        td: (props: any) => <td className="px-5 py-4 align-top text-[1rem] text-[#4A4A4A]" {...props} />,
    };

    return (
        <article className="max-w-3xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            <div className="mb-10">
                <Link href="/work#projects" className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-foreground transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Work
                </Link>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.frontmatter.tags?.map((tag) => (
                        <span key={tag} className="text-tag bg-divider/30 text-[#4A4A4A] px-2 py-1 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-section text-foreground mb-4">{project.frontmatter.title}</h1>
                <p className="text-xl text-[#888888] font-light leading-relaxed">
                    {project.frontmatter.description}
                </p>
            </div>

            {project.frontmatter.coverImage && (
                <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-divider/20 mb-16 shadow-sm border border-divider/40">
                    <img
                        src={project.frontmatter.coverImage}
                        alt={project.frontmatter.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="prose prose-neutral max-w-none">
                <MDXRemote source={project.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>

        </article>
    );
}
