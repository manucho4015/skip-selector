import { useState, useEffect } from 'react'

// components
import SkipGrid from '../components/SkipGrid'

// custom types
import type { Skip } from '../types/skip'

// data
import { pageSteps } from '../data/steps'

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
        <div className="min-h-screen bg-[#ecfdf59a] p-4 sm:p-8">
            <div className="hidden  md:flex overflow-auto items-center justify-center gap-4 mb-[50px]">
                {
                    pageSteps.map((step, index) => (
                        <div className="flex gap-5 items-center">
                            <div key={index} className="flex gap-1 items-center w-fit">
                                <img src={step.icon} alt={step.title} className='w-7 h-7' />
                                <p className={`${index < 3 ? 'font-medium text-emerald-700' : 'text-[#667067]'} capitalize text-[14px]`}>{step.title}</p>
                            </div>
                            {
                                index !== pageSteps.length - 1 && (
                                    <div className={` ${index < 2 ? 'bg-[#0ceb26]' : 'bg-[#667067]'} h-[1.5px] w-16`} />
                                )
                            }
                        </div>
                    ))
                }
            </div>

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
