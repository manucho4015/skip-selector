import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// custom types
import type { Skip } from "../types/skip"

interface SkipCardProps {
    skip: Skip
    selected: boolean
    onSelect: (skip: Skip) => void
}

const SkipCard = ({ skip, selected, onSelect }: SkipCardProps) => {
    const [rippleStyle, setRippleStyle] = useState<React.CSSProperties | null>(null);
    const [rippleVisible, setRippleVisible] = useState(false);

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        setRippleStyle({
            top: y,
            left: x,
            width: size,
            height: size,
        });
        setRippleVisible(true);
        setTimeout(() => setRippleVisible(false), 500); // Hide after animation

        onSelect(skip); // Your original selection logic
    }
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.97 }}
            // onClick={handleClick}
            className={`relative rounded-2xl p-4 bg-white shadow-md cursor-pointer transition-all duration-300 ease-in-out
    hover:shadow-[0_0_0_4px_rgba(34,197,94,0.2)]
    ${selected ? "ring-2 ring-emerald-500 shadow-lg" : ""}`}
        >
            {rippleVisible && (
                <span
                    style={rippleStyle ?? {}}
                    className="absolute bg-emerald-300/30 rounded-full animate-ripple pointer-events-none"
                />
            )}
            {/* PULSE ANIMATION */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="pulse"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.9, 0] }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-2xl border-4 border-emerald-300 z-[-1]"
                    />
                )}
            </AnimatePresence>
            <div className="flex justify-center relative">
                <span className="bg-emerald-700 text-[12px] text-white py-1 px-4 rounded-2xl absolute top-0 right-0">{skip.size} Yards</span>
                <img src='/skip-garbage-collector.png' alt={`${skip.size} yard skip`} className="h-32 object-contain" />
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold capitalize text-emerald-700">{skip.size} yard skip</h3>
                <p className="text-sm text-gray-600">{skip.hire_period_days} day hire period</p>
                <div className="flex items-center justify-between">

                    <p className="mt-2 text-xl font-bold text-emerald-900">£{skip.price_before_vat}</p>
                    <motion.button
                        whileTap={{ scaleX: .95 }}
                        onClick={() => onSelect(skip)}
                        className={`cursor-pointer mt-2 px-6 py-1 rounded-2xl text-white w-fit ${selected ? "bg-emerald-600" : "bg-emerald-700 hover:bg-emerald-600"
                            }`}
                    >
                        {selected ? "Selected" : "Select"}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default SkipCard
