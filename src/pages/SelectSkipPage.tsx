import { useState, useEffect } from 'react'

// components
import SkipGrid from '../components/SkipGrid'

// custom types
import type { Skip } from '../types/skip'

const SelectSkipPage = () => {
    const [skips, setSkips] = useState<Skip[]>([])
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const handleSelect = (id: number) => {
        if (id === selectedId) {
            setSelectedId(null)
            return
        }
        setSelectedId(id)
    }

    useEffect(() => {
        fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then((response) => response.json())
            .then((data: Skip[]) => {
                console.log(data)
                setSkips(data)
            })
    }, [])

    return (
        <div className="min-h-screen bg-emerald-50 p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-emerald-900 mb-2">
                Choose Your Skip Size
            </h1>
            <p className="text-center text-emerald-700 mb-6">
                Select the skip size that best suits your needs.
            </p>
            <div className="px-[10vw]">

                <SkipGrid skips={skips} selectedId={selectedId} onSelect={handleSelect} />
            </div>
        </div>
    )
}

export default SelectSkipPage
