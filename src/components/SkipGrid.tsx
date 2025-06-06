// components
import SkipCard from "./SkipCard"

// custom types 
import type { Skip } from "../types/skip"

interface SkipGridProps {
    skips: Skip[]
    selectedId: number | null
    onSelect: (id: number) => void
}
const SkipGrid = ({ skips, selectedId, onSelect }: SkipGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skips.map((skip) => (
                <SkipCard
                    key={skip.id}
                    skip={skip}
                    selected={selectedId === skip.id}
                    onSelect={onSelect}
                />
            ))}
        </div>
    )
}

export default SkipGrid
