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
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => (prev === 8 ? 1 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible(prev => (prev === 1 ? 8 : prev - 1));
  };

  const boxVariants = {
    entry: (isBack: boolean) => ({ x: isBack ? -500 : 500, opacity: 0, scale: 0 }),
    center: { x: 0, scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: (isBack: boolean) => ({
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      rotateZ: 900,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <Wrapper>
      <AnimatePresence
        // exitBeforeEnter
        custom={back}
      >
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;
