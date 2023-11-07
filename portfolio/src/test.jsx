import "./app.scss";
import { motion } from "framer-motion";

export const Test = () => {
  return (
    <div className="test">
      <motion.div
        className="box"
        animate={{ opacity: 0 }}
        transition={{ duration: 2, delay: 2 }}
      ></motion.div>
    </div>
  );
};
