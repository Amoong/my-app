import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1b926a, #25725d);
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: white;
  position: absolute;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  top: 100px;
  left: auto;
  bottom: auto;
  right: auto;
`;

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing(prev => !prev);

  const boxVariants = {
    initial: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, rotateZ: 360 },
    leaving: { opacity: 0, scale: 0, y: 50 },
  };

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving">
            adsfads
          </Box>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
