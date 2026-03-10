import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, MessageSquare, Rss, FileText, ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Let's Chat | Manvinder Rayat",
    description: "Get in touch for design work or questions.",
};

const links = [
    { label: "Email", value: "manvinder.rayat@gmail.com", icon: Mail, href: "mailto:manvinder.rayat@gmail.com" },
    { label: "LinkedIn", value: "in/manvinder-rayat", icon: Linkedin, href: "https://www.linkedin.com/in/manvinder-rayat/" },
    { label: "Discord", value: "@manvinderrayat", icon: MessageSquare, href: "https://discordapp.com/users/845694904112906290" },
    { label: "Substack", value: "manvinderr.substack.com", icon: Rss, href: "https://manvinderr.substack.com" },
    { label: "Resume", value: "Download CV", icon: FileText, href: "https://drive.google.com/file/d/1r2RC8D_q1dUnX6tE8GRagCpJBiwvrCGf/view?usp=sharing" },
];

export default function LetsChatPage() {
    return (
        <div className="flex flex-col gap-16 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl mx-auto">

            {/* Header */}
            <section className="text-center">
                <h1 className="text-section text-foreground">
                    Something caught your{" "}
                    <span className="text-script text-accent">eye?</span>
                </h1>
                <p className="text-script text-accent text-xl mt-1">Let's chat</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Side: Links */}
                <div className="space-y-0 text-body">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between py-5 border-b border-divider/50 hover:bg-divider/10 transition-colors -mx-4 px-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-card shadow-xs border border-divider/40 flex items-center justify-center text-[#4A4A4A] group-hover:text-accent transition-colors">
                                    <link.icon className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-foreground">{link.label}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#888888] group-hover:text-accent transition-colors">
                                <span className="hidden sm:inline text-sm">{link.value}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Right Side: Form */}
                <div className="lg:pt-2">
                    <ContactForm />
                </div>

            </div>

        </div>
    );
}
