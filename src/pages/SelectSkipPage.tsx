import { useState, useEffect } from 'react'
import { motion, type Cycle } from 'motion/react'

// components
import SkipGrid from '../components/SkipGrid'

// custom types
import type { Skip } from '../types/skip'

// data
import { pageSteps } from '../data/steps'

const SelectSkipPage = ({ toggleOpen }: { toggleOpen: Cycle }) => {
    const [skips, setSkips] = useState<Skip[]>([])
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleSelect = (skip: Skip) => {
        if (selectedSkip) {
            if (skip.id === selectedSkip.id) {
                setSelectedSkip(null)
                return
            }
            setSelectedSkip(skip)
        } else {
            setSelectedSkip(skip)
        }
    }

    useEffect(() => {
        fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then((response) => response.json())
            .then((data: Skip[]) => {
                setSkips(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-[#ecfdf59a] relative">
            <div className="hidden  md:flex overflow-auto items-center justify-center gap-4 mb-[50px] pt-[25px]">
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

            <h1 className="text-2xl sm:text-3xl font-bold text-center text-emerald-900 mb-2 pt-[25px] md:p-0">
                Choose Your Skip Size
            </h1>
            <p className="text-center text-emerald-700 mb-6">
                Select the skip size that best suits your needs.
            </p>

            {
                isLoading ? (
                    <div className="h-[50vh] w-[100vw] flex justify-center items-center">
                        <img src="/line-md--loading-twotone-loop.svg" alt="loading" className='h-[50px] w-[50px] md:h-[100px] md:w-[100px]' />
                    </div>
                ) : (
                    <div className="px-[10vw] pb-[25px]">
                        <SkipGrid skips={skips} selectedSkip={selectedSkip} onSelect={handleSelect} />
                    </div>
                )
            }


            {/* 'Continue' footer banner */}
            <motion.div transition={{ type: 'tween' }} initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: selectedSkip ? 1 : 0, opacity: selectedSkip ? 1 : 0, width: '100%' }} className="sticky bottom-0 full z-[100] bg-emerald-900 py-4 text-white">
                <p className='text-center text-[12px] px-[5%] md:p-0'>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
                <div className="flex flex-wrap justify-end md:justify-between items-center px-[5%] mt-[25px] md:mt-[10px] gap-4">
                    <div className="flex gap-4 items-baseline">
                        <p className='capitalize'>{selectedSkip?.size} yard skip</p>
                        <p className='capitalize'>{selectedSkip?.hire_period_days} day hire</p>
                        <p className='text-white text-[24px] font-bold'>£{selectedSkip?.price_before_vat}</p>
                    </div>

                    <motion.button whileTap={{ scale: .95 }} onClick={() => toggleOpen()} className='flex items-center bg-emerald-600 px-4 py-2 rounded-lg text-white font-medium capitalize gap-2'>
                        continue
                        <img src="/iconoir--arrow-right.svg" alt="arrow right" className='h-5 w-5' />
                    </motion.button>
                </div>
            </motion.div>
            <footer className="text-xs absolute bottom-0 w-full  text-[#282727] text-center mt-10">
                UI redesigned for GemWaste interview challenge.
            </footer>
        </div>
    )
}

export default SelectSkipPage
