import "./parallax.scss";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,   #111132,  #0c0c1d)"
            : "linear-gradient(180deg,  #111132, #505064)",
      }}
    >
      <h1>{type === "services" ? "What we do?" : "What we did"}</h1>
      <div className="mountain"></div>
      <div className="planet"></div>
      <div className="astronauts"></div>
      <div className="stars"></div>
      <div className="threeStars"></div>
    </div>
  );
};
