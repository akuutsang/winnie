import "./app.scss";
import { motion } from "framer-motion";

export const Test = () => {
  return (
    <div className="test">
      <motion.div
        className="box"
        initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1, x: 500, y: 300 }}
        transition={{ duration: 2, delay: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
      ></motion.div>
    </div>
  );
};
