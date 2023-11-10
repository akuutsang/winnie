import "./services.scss";
import { motion } from "framer-motion";
import ProjectsList from "../projectsLists/ProjectsList";
export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <p>
          I am happy to have you here, <br /> let me help your brand
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.jpeg" alt="" />
          <h1>
            <b>Smart</b> ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For your</b> Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Past Projects</h2>
          <ProjectsList />
        </div>
      </motion.div>
    </motion.div>
  );
};
