import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// MDX Types
export type ProjectFrontMatter = {
    title: string;
    date: string;
    tags?: string[];
    description: string;
    coverImage?: string;
    featured?: boolean;
};

export type BlogPostFrontMatter = {
    title: string;
    date: string;
    tags?: string[];
    excerpt: string;
    coverImage?: string;
};

export type MDXDocument<T> = {
    slug: string;
    frontmatter: T;
    content: string;
};

// Utilities
const slugify = (name: string) =>
    name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')       // spaces → hyphens
        .replace(/[^a-z0-9-_]/g, '') // strip remaining special chars
        .replace(/-+/g, '-');        // collapse duplicate hyphens

const getMdxFiles = (dir: string) => {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
};

const readMdxFile = <T>(filePath: string): { frontmatter: T; content: string } => {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    return { frontmatter: data as T, content };
};

const getMdxData = <T>(dir: string): MDXDocument<T>[] => {
    const mdxFiles = getMdxFiles(dir);
    return mdxFiles.map((file) => {
        const filePath = path.join(dir, file);
        const { frontmatter, content } = readMdxFile<T>(filePath);
        return {
            slug: slugify(file.replace(/\.mdx$/, '')),
            frontmatter,
            content,
        };
    });
};

// Expose API
export const getProjects = () => getMdxData<ProjectFrontMatter>(path.join(process.cwd(), 'content', 'projects')).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
export const getBlogPosts = () => getMdxData<BlogPostFrontMatter>(path.join(process.cwd(), 'content', 'blog')).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

export const getProjectBySlug = (slug: string) => {
    const projects = getProjects();
    return projects.find((p) => p.slug === slug);
};

export const getBlogPostBySlug = (slug: string) => {
    const posts = getBlogPosts();
    return posts.find((p) => p.slug === slug);
};
