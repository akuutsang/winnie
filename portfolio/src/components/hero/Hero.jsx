import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello there!</motion.h2>
          <motion.h1 variants={textVariants}>
            Welcome to my portfolio webpage
          </motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </div>
          <motion.img
            className="img"
            variants={textVariants}
            src="/Wscroll.webp"
            alt=""
          />
        </motion.div>
      </div>
      <div className="slidingTextContainer">Akutsang</div>
      <div className="imageContainer">
        <img src="/robot-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};
