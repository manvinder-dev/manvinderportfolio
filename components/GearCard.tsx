import { motion } from "framer-motion";

export type GearItem = {
    name: string;
    model: string;
    note: string;
    imageUrl: string;
};

export default function GearCard({ item }: { item: GearItem }) {
    return (
        <div className="bg-card rounded-2xl p-6 shadow-xs border border-divider/40 flex flex-col items-center text-center group hover:border-accent/30 transition-colors">
            <div className="w-32 h-32 mb-6 relative">
                {/* Replace with actual image in production */}
                <div className="absolute inset-0 bg-divider/20 rounded-full group-hover:bg-divider/30 transition-colors" />
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain relative z-10 group-hover:-translate-y-2 transition-transform duration-300"
                />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-1 group-hover:text-accent transition-colors">{item.name}</h3>
            <div className="text-sm font-medium text-[#888888] mb-4 font-mono">{item.model}</div>
            <p className="text-body text-sm text-[#4A4A4A] italic leading-relaxed">"{item.note}"</p>
        </div>
    );
}
