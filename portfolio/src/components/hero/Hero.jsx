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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imgVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 1,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.1,
      repeat: Infinity,
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
          <div className="hello">
            <motion.h2 variants={textVariants}>Hello there!</motion.h2>
            <motion.img
              className="helloImg"
              src="/SpacyNDog.png"
              alt=""
              variants={imgVariants}
            />
          </div>
          <motion.h1 variants={textVariants}>
            <p> Welcome to my portfolio webpage</p>
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
            animate="scrollButton"
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
