import "./app.scss";
import { motion } from "framer-motion";
import { useState } from "react";

export const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="test">
      <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 2 }}
        whileTap={{ opacity: 1, scale: 2 }}
        drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>click</button>
    </div>
  );
};
