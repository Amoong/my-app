import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #1b926a, #25725d);
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 100px;
`;

function App() {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible(prev => (prev === 8 ? 1 : prev + 1));
  const boxVariants = {
    invisible: { x: 500, opacity: 0, scale: 0 },
    visible: { x: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    exit: { x: -500, opacity: 0, scale: 0, rotateZ: 1800, transition: { duration: 1 } },
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i =>
          i === visible ? (
            <Box variants={boxVariants} initial="invisible" animate="visible" exit="exit" key={i}>
              {i}
            </Box>
          ) : null,
        )}
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
