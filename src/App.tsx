import {motion, useScroll, useSpring } from "motion/react";
import AnimatedButton from "./components/AnimatedButton/AnimatedButton.tsx";
import LayoutAnimation1 from "./components/LayoutAnimation1/LayoutAnimation1.tsx";
import LayoutAnimation2 from "./components/LayoutAnimation2/LayoutAnimation2.tsx";
import LayoutAnimation3 from "./components/LayoutAnimation3/LayoutAnimation3.tsx";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="container">
      <motion.div style={{ scaleX }} className="progress_bar" />
      <AnimatedButton />
      <LayoutAnimation1 />
      <LayoutAnimation2 />
      <LayoutAnimation3 />
    </div>
  )
}

export default App;
