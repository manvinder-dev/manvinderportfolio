import Link from "next/link";
import { Mail, Linkedin, MessageSquare, Rss, FileText } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full max-w-[1100px] mx-auto px-6 sm:px-12 pt-20 pb-12 mt-auto border-t border-divider">
            <div className="flex flex-col flex-col items-center text-center space-y-10">


                {/* Row 1: Icons */}
                <div className="flex items-center gap-6 md:gap-8">
                    <a href="mailto:manvinder.rayat@gmail.com" className="text-[#4A4A4A] hover:text-accent transition-colors p-2" aria-label="Email">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/manvinder-rayat/" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-accent transition-colors p-2" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-accent transition-colors p-2" aria-label="Discord">
                        <MessageSquare className="w-6 h-6" />
                    </a>
                    <a href="https://manvinderr.substack.com" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-accent transition-colors p-2" aria-label="Substack">
                        <Rss className="w-6 h-6" />
                    </a>
                    <a href="https://drive.google.com/file/d/1r2RC8D_q1dUnX6tE8GRagCpJBiwvrCGf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#4A4A4A] hover:text-accent transition-colors p-2" aria-label="Resume">
                        <FileText className="w-6 h-6" />
                    </a>
                </div>

                <div className="w-16 h-[1px] bg-divider" />

                {/* Row 2: Copyright */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-script text-accent text-sm">created with love</span>
                    <span className="text-sm text-[#4A4A4A]">© {currentYear} Manvinder Rayat</span>
                </div>

            </div>
        </footer>
    );
}
