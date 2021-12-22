import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #1b926a, #25725d);
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  top: 100px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2);
  background-color: dodgerblue;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(prev => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: "50px", scale: "1" }} />
        ) : null}
      </Box>
      <Box>
        {!clicked ? null : <Circle layoutId="circle" style={{ borderRadius: "0px", scale: "2" }} />}
      </Box>
    </Wrapper>
  );
}

export default App;
