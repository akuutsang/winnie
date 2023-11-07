import "./navbar.scss";
import { motion } from "framer-motion";
import { SideBar } from "../sidebar/SideBar";

export const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Akutsang
        </motion.span>
        <div className="social">
          <a href="#">
            <img className="facebook" src="/facebook.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/instagram.webp" alt=""></img>
          </a>
          <a href="#">
            <img src="/twitter.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/youtube.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};
