import { getProjects } from "@/utils/mdx";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = {
    title: "Work | Manvinder Rayat",
    description: "A selection of product design and research projects.",
};

const timeline = [
    {
        company: "Acme Design Co.",
        role: "Senior Product Designer",
        date: "2022 - Present",
        bullets: [
            "Led the redesign of the core dashboard, improving user retention by 24%.",
            "Established and maintained the global design system.",
            "Mentored junior designers and facilitated cross-functional workshops."
        ]
    },
    {
        company: "StartUp Inc.",
        role: "Product Designer",
        date: "2019 - 2022",
        bullets: [
            "Designed the end-to-end mobile application from 0 to 1.",
            "Conducted foundational user research to validate product-market fit.",
            "Collaborated closely with engineering to ensure pixel-perfect implementation."
        ]
    },
    {
        company: "Creative Agency",
        role: "UX/UI Designer",
        date: "2017 - 2019",
        bullets: [
            "Delivered high-converting landing pages for diverse B2B clients.",
            "Prototyped interactive experiences using advanced Framer techniques."
        ]
    },
    {
        company: "Creative Agency",
        role: "UX/UI Designer",
        date: "2017 - 2019",
        bullets: [
            "Delivered high-converting landing pages for diverse B2B clients.",
            "Prototyped interactive experiences using advanced Framer techniques."
        ]
    }
];

const timelineVolunteer = [
    {
        company: "Acme Design Co.",
        role: "Senior Product Designer",
        date: "2022 - Present",
        bullets: [
            "Led the redesign of the core dashboard, improving user retention by 24%.",
            "Established and maintained the global design system.",
            "Mentored junior designers and facilitated cross-functional workshops."
        ]
    },
    {
        company: "StartUp Inc.",
        role: "Product Designer",
        date: "2019 - 2022",
        bullets: [
            "Designed the end-to-end mobile application from 0 to 1.",
            "Conducted foundational user research to validate product-market fit.",
            "Collaborated closely with engineering to ensure pixel-perfect implementation."
        ]
    }
];

export default function WorkPage() {
    const projects = getProjects();

    return (
        <div className="flex flex-col gap-24 py-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Header */}
            <section className="text-center">
                <h1 className="text-section text-foreground">
                    Experiences that shaped{" "}
                    <span className="text-script text-accent">me</span>
                </h1>
            </section>

            {/* Work Experience */}
            <section>
                <h2 className="text-section text-foreground text-2xl mb-8">Work <span className="text-script text-accent">Experience</span></h2>
                <div className="space-y-12 pl-2 md:pl-0">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative md:flex gap-8 group">
                            <div className="hidden md:block w-48 shrink-0 text-sm text-[#888888] pt-1">
                                {item.date}
                            </div>

                            {/* Timeline Connector — line + dot share same x axis */}
                            <div className="absolute left-48 top-0 bottom-[-3rem] hidden md:flex flex-col items-center gap-1.5 group-last:[&_.tl-line]:hidden">
                                <div className="w-2.5 h-2.5 rounded-full bg-divider/80 ring-4 ring-card shrink-0 mt-1.5" />
                                <div className="tl-line w-[1px] flex-1 bg-divider/50" />
                            </div>

                            <div className="flex-1 pb-4 md:pb-0">
                                <div className="md:hidden text-sm text-[#888888] mb-1">{item.date}</div>
                                <h3 className="text-lg font-medium text-foreground">{item.company}</h3>
                                <div className="text-accent text-sm font-medium mb-4">{item.role}</div>
                                <ul className="space-y-2">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i} className="text-body text-sm flex items-start gap-3">
                                            <span className="text-[#A0A0A0] shrink-0 leading-5">—</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Volunteer Experience */}
            <section>
                <h2 className="text-section text-foreground text-2xl mb-8">Volunteer <span className="text-script text-accent">Experience</span></h2>
                <div className="space-y-12 pl-2 md:pl-0">
                    {timelineVolunteer.map((item, idx) => (
                        <div key={idx} className="relative md:flex gap-8 group">
                            <div className="hidden md:block w-48 shrink-0 text-sm text-[#888888] pt-1">
                                {item.date}
                            </div>

                            {/* Timeline Connector — line + dot share same x axis */}
                            <div className="absolute left-48 top-0 bottom-[-3rem] hidden md:flex flex-col items-center group-last:[&_.tl-line]:hidden">
                                <div className="w-2.5 h-2.5 rounded-full bg-divider/80 ring-4 ring-card shrink-0 mt-1.5" />
                                <div className="tl-line w-[1px] flex-1 bg-divider/50" />
                            </div>

                            <div className="flex-1 pb-4 md:pb-0">
                                <div className="md:hidden text-sm text-[#888888] mb-1">{item.date}</div>
                                <h3 className="text-lg font-medium text-foreground">{item.company}</h3>
                                <div className="text-accent text-sm font-medium mb-4">{item.role}</div>
                                <ul className="space-y-2">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i} className="text-body text-sm flex items-start gap-3">
                                            <span className="text-[#A0A0A0] shrink-0 leading-5">—</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="scroll-mt-32" id="projects">
                <h2 className="text-section text-foreground text-2xl mb-8">Selected <span className="text-script text-accent">Projects</span></h2>
                <ProjectGrid projects={projects} />
            </section>

        </div>
    );
}
