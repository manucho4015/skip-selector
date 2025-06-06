import type { Skip } from "../types/skip"

interface SkipCardProps {
    skip: Skip
    selected: boolean
    onSelect: (skip: Skip) => void
}

const SkipCard = ({ skip, selected, onSelect }: SkipCardProps) => {
    return (
        <div
            className={`rounded-2xl p-4 bg-white shadow-md transition-transform hover:scale-105 ${selected ? "ring-2 ring-emerald-500" : ""
                }`}
        >
            <div className="flex justify-center relative">
                <span className="bg-emerald-700 text-[12px] text-white py-1 px-4 rounded-2xl absolute top-0 right-0">{skip.size} Yards</span>
                <img src='/skip-garbage-collector.png' alt={`${skip.size} yard skip`} className="h-32 object-contain" />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold capitalize text-emerald-700">{skip.size} yard skip</h3>
                <p className="text-sm text-gray-600">{skip.hire_period_days} day hire period</p>
                <div className="flex items-center justify-between">

                    <p className="mt-2 text-xl font-bold text-emerald-900">£{skip.price_before_vat}</p>
                    <button
                        onClick={() => onSelect(skip)}
                        className={`mt-2 px-6 py-1 rounded-2xl text-white w-fit ${selected ? "bg-emerald-600" : "bg-emerald-700 hover:bg-emerald-600"
                            }`}
                    >
                        {selected ? "Selected" : "Select"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SkipCard
