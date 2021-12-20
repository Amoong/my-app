import styled from "styled-components";
import { motion, useMotionValue, useTransform, useViewportScroll } from "framer-motion";
import { useEffect } from "react";
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1b926a, #25725d);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);

  const rotateZ = useTransform(x, [-800, 800], [-3600, 3600]);
  const gradient = useTransform(
    x,
    [-800, 800],
    ["linear-gradient(135deg, #6668ca, #253d72)", "linear-gradient(135deg, #1b926a, #25725d)"],
  );
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    scrollY.onChange(() => {});
  }, [scrollY, scrollYProgress]);

  return (
    <Wrapper style={{ background: gradient }}>
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x, rotateZ, scale }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}

export default App;
