export type GearItem = {
    name: string;
    imageUrl: string;
};

export default function GearCard({ item }: { item: GearItem }) {
    return (
        <div className="flex flex-col items-center gap-4 group">
            <div className="w-full aspect-square flex items-center justify-center p-4">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-lg"
                />
            </div>
            <p className="text-base font-medium text-foreground text-center">{item.name}</p>
        </div>
    );
}
