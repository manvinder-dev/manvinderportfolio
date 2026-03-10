"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

export default function Nav() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const links = [
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: "Play", path: "/play" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
        { name: "Let's Chat", path: "/lets-chat" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between transition-all duration-300 backdrop-blur-md bg-[#EBEBEB]/85 ${scrolled ? "h-[50px] px-4 sm:px-8 border-b border-divider/50 shadow-sm" : "h-[70px] px-6 sm:px-12"
                    }`}
            >
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="/logo.png" alt="Manvinder Rayat" className="h-7 w-auto" />
                    <span className="hidden sm:inline font-medium">Manvinder Rayat</span>
                    <span className="sm:hidden font-medium">Manvinder</span>
                </Link>

                {/* Desktop nav pill */}
                <nav className="hidden md:flex items-center bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)] rounded-full px-2 py-1">
                    <ul className="flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                            return (
                                <li key={link.path} className="relative">
                                    <Link
                                        href={link.path}
                                        className={`relative z-10 block px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-foreground hover:text-accent"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute inset-0 bg-[#EBEBEB] rounded-full z-0"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Resume button – desktop only */}
                    <a
                        href="https://drive.google.com/file/d/1r2RC8D_q1dUnX6tE8GRagCpJBiwvrCGf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-block bg-accent text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-accent/90 transition-all shadow-md"
                    >
                        Resume
                    </a>
                </div>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Drawer panel */}
                        <motion.div
                            key="drawer"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#EBEBEB] shadow-2xl flex flex-col md:hidden"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 h-[70px] border-b border-divider/40">
                                <img src="/logo.png" alt="Manvinder Rayat" className="h-7 w-auto" />
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="p-2 text-foreground hover:text-accent transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Links */}
                            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                                {links.map((link, i) => {
                                    const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                                    return (
                                        <motion.div
                                            key={link.path}
                                            initial={{ opacity: 0, x: 24 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <Link
                                                href={link.path}
                                                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                                                    ? "bg-accent/10 text-accent"
                                                    : "text-foreground hover:bg-white/60 hover:text-accent"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Resume at bottom */}
                            <div className="px-6 pb-8">
                                <a
                                    href="https://drive.google.com/file/d/1r2RC8D_q1dUnX6tE8GRagCpJBiwvrCGf/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-accent text-white px-5 py-3 rounded-full font-medium text-sm hover:bg-accent/90 transition-all shadow-md"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
