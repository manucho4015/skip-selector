import { motion, type Cycle } from "motion/react";

// import { AppDispatch } from "../../../../store";
import { variants1, variants2, variants3 } from "../motion/variants";



const Overlay = ({ toggleOpen }: { toggleOpen: Cycle }) => {

    // const dispatch = useDispatch<AppDispatch>();

    return (
        <motion.div
            variants={variants1}
            onClick={() => toggleOpen()}
            className="relative w-full h-full overflow-auto overlay flex justify-center items-center"
        >
            <div className="flex flex-col items-center">
                <motion.div variants={variants2} className="bg-blend-overlay bg-[#0000003f] bg-[url(/manucho-agrivuma-face.png)] bg-center bg-cover rounded-full h-[150px] w-[150px] md:h-[200px] md:w-[200px] border-[1px] border-white" />
                <motion.p variants={variants3} className="text-white font-medium text-[36px] md:text-[56px]">Enjoy !</motion.p>
            </div>
        </motion.div>
    )
}

export default Overlay