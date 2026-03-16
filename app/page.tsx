import Link from "next/link";
import { getProjects, getBlogPosts } from "@/utils/mdx";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Camera } from "lucide-react";

export default function Home() {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter(p => p.frontmatter.featured).slice(0, 2);

  const recentBlogs = getBlogPosts().slice(0, 3);

  const defaultImg1 = "/shots/Image11.jpg";
  const defaultImg2 = "/shots/IMG_0773.jpg";
  const defaultImg3 = "/shots/IMG_0776.jpg";
  const defaultImg4 = "/shots/IMG_0780.jpg";

  return (
    <div className="flex flex-col gap-32 pb-20 overflow-hidden">

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-hero text-foreground">
          Crafting Purposeful
          <br className="hidden sm:inline" />
          <span className="text-script text-accent ml-4 mt-2 inline-block origin-left">Systems & Communities</span>
        </h1>
        <p className="text-body max-w-2xl mt-8 mx-auto text-lg sm:text-xl">
          I'm Manvinder, a developer, educator, and community builder turning ideas into real-world tech solutions. Welcome to my digital notebook.
        </p>
      </section>

      {/* Featured Blogs Section */}
      <section className="space-y-12">
        <h2 className="text-section text-foreground">Recent <span className="text-script text-accent">Thoughts</span></h2>
        {recentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentBlogs.map((post) => (
              <BlogCard key={post.slug} post={post.frontmatter} slug={post.slug} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-divider/50 rounded-2xl">
            <p className="text-script text-accent text-2xl mb-2">Nothing here yet</p>
            <p className="text-body text-sm text-[#888888]">Check back soon: thoughts are brewing.</p>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-full font-medium transition-all shadow-md"
          >
            Read all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-12">
        <h2 className="text-section text-foreground">Selected <span className="text-script text-accent">Work</span></h2>
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project.frontmatter} slug={project.slug} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-divider/50 rounded-2xl">
            <p className="text-script text-accent text-2xl mb-2">Coming soon</p>
            <p className="text-body text-sm text-[#888888]">New case studies are on their way.</p>
          </div>
        )}
        <div className="flex justify-end mt-8">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-full font-medium transition-all shadow-md"
          >
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Photography Teaser – Bento */}
      <section className="py-4 space-y-6">
        <h2 className="text-section text-foreground">
          Beyond{" "}
          <span className="text-script text-accent">Screens</span>
        </h2>
        {/* ── Mobile layout (< sm) ─────────────────────────── */}
        <div className="sm:hidden space-y-3">
          {/* Full-width tall photo */}
          <div className="relative h-52 rounded-2xl overflow-hidden group">
            <img src={defaultImg1} alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          {/* 2-col row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="h-36 rounded-2xl overflow-hidden group">
              <img src={defaultImg2} alt="Photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="h-36 rounded-2xl overflow-hidden group">
              <img src={defaultImg3} alt="Photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          {/* Dark label + more button */}
          <div className="grid grid-cols-2 gap-3">
            <div className="h-28 rounded-2xl bg-[#1a1a1a] flex flex-col justify-between p-4">
              <p className="text-white/50 text-[10px] font-medium uppercase tracking-wide">When I'm not building</p>
              <p className="text-white font-semibold text-xs leading-snug">I'm capturing the world<br />through lens & writing.</p>
            </div>
            <div className="h-28 rounded-2xl overflow-hidden relative group">
              <img src={defaultImg4} alt="Photography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <Link href="/play"
                className="absolute bottom-2 left-2 right-2 bg-accent hover:bg-accent/90 text-white text-xs font-semibold py-2 rounded-full text-center transition-all shadow-lg">
                more
              </Link>
            </div>
          </div>
        </div>

        {/* ── Desktop layout (sm+) ─────────────────────────── */}
        <div className="hidden sm:grid grid-cols-3 grid-rows-2 gap-3 h-[460px]">

          {/* Left: tall photo */}
          <div className="row-span-2 rounded-2xl overflow-hidden relative group">
            <img src={defaultImg1} alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Top-middle: landscape photo */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={defaultImg2} alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Top-right: portrait photo */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={defaultImg3} alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Bottom-middle: dark label card */}
          <div className="rounded-2xl bg-[#1a1a1a] flex flex-col justify-between p-5">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wide">When I'm not building</p>
            <p className="text-white font-semibold text-base leading-snug">I'm capturing the world<br />through lens & writing.</p>
          </div>

          {/* Bottom-right: "more" pill card */}
          <div className="rounded-2xl overflow-hidden relative group">
            <img src={defaultImg4} alt="Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <Link href="/play"
              className="absolute bottom-3 left-3 right-3 bg-accent hover:bg-accent/90 text-white text-sm font-semibold py-2.5 rounded-full text-center transition-all shadow-lg">
              More
            </Link>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32">
        <div className="flex flex-col lg:flex-row gap-16 justify-between items-start">
          <div className="max-w-md">
            <p className="text-section text-foreground text-xl">
              Something caught your eye?
            </p>
            <h2 className="text-script text-accent">Let's Chat</h2>
            <p className="text-body mt-8 mb-4">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Link href="/lets-chat" className="text-sm text-[#888888] hover:text-accent transition-colors mt-12 hidden lg:block">
              Or find me at ↓
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
