import "./services.scss";
import { motion } from "framer-motion";
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
            <b>Smart ideas</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>
              For your <br /> Business
            </b>
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
            suscipit, sunt obcaecati similique quae libero non amet nesciunt
            accusamus.
          </p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
            suscipit, sunt obcaecati similique quae libero non amet nesciunt
            accusamus.
          </p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
            suscipit, sunt obcaecati similique quae libero non amet nesciunt
            accusamus.
          </p>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia
            suscipit, sunt obcaecati similique quae libero non amet nesciunt
            accusamus.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
