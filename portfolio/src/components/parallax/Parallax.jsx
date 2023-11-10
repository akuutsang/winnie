import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["-50%", "30%"]);
  const yMountain = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "-40%"]);
  const yStar = useTransform(scrollYProgress, [0, 1], ["-40%", "100%"]);

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,   #111132,  #0c0c1d)"
            : "linear-gradient(180deg,   #29297d, #030327, )",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What we do?" : "What we did"}
      </motion.h1>
      <motion.div style={{ y: yMountain }} className="mountain"></motion.div>
      <motion.div
        className="planet"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ y: yBg }} className="astronauts"></motion.div>
      <motion.div style={{ y: yStar }} className="stars"></motion.div>
    </div>
  );
};
