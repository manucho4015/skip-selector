// components
import SkipCard from "./SkipCard"

// custom types 
import type { Skip } from "../types/skip"

interface SkipGridProps {
    skips: Skip[]
    selectedSkip: Skip | null
    onSelect: (skip: Skip) => void
}
const SkipGrid = ({ skips, selectedSkip, onSelect }: SkipGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skips.map((skip) => (
                <SkipCard
                    key={skip.id}
                    skip={skip}
                    selected={selectedSkip ? selectedSkip.id === skip.id : false}
                    onSelect={onSelect}
                />
            ))}
        </div>
    )
}

export default SkipGrid
