import type { Skip } from "../types/skip"

interface SkipCardProps {
    skip: Skip
    selected: boolean
    onSelect: (id: number) => void
}

const SkipCard = ({ skip, selected, onSelect }: SkipCardProps) => {
    return (
        <div
            className={`rounded-2xl p-4 bg-white shadow-md transition-transform hover:scale-105 ${selected ? "ring-4 ring-emerald-500" : ""
                }`}
        >
            <div className="flex justify-center">
                <img src='/skip-garbage-collector.png' alt={`${skip.size} yard skip`} className="h-32 object-contain" />
            </div>
            <div className="mt-4 text-center">
                <p className="text-emerald-700 font-bold">{skip.size} Yards</p>
                <h3 className="text-lg font-semibold capitalize">{skip.size} yard skip</h3>
                <p className="text-sm text-gray-600">{skip.hire_period_days} days</p>
                <p className="mt-2 text-lg font-bold text-emerald-900">£{skip.price_before_vat}</p>
                <button
                    onClick={() => onSelect(skip.id)}
                    className={`mt-2 px-4 py-2 rounded-lg text-white w-full ${selected ? "bg-emerald-600" : "bg-emerald-800 hover:bg-emerald-700"
                        }`}
                >
                    {selected ? "Selected" : "Select"}
                </button>
            </div>
        </div>
    )
}

export default SkipCard
