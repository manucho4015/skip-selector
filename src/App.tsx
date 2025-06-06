import { useRef } from 'react';

// motion
import { motion, useCycle } from 'motion/react';
import { useDimensions } from './motion/dimensions';
import { overlay } from './motion/overlay';

// components
import Overlay from './components/Overlay';

// pages
import SelectSkipPage from './pages/SelectSkipPage'

function App() {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.div initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} className="view container">
        <motion.div variants={overlay} className="fixed overflow-auto z-[150]  top-0 left-0 h-full w-full bg-[#00000079] ">
          <Overlay toggleOpen={toggleOpen} />
        </motion.div>
      </motion.div>
      <SelectSkipPage toggleOpen={toggleOpen} />
    </>
  )
}

export default App
