import "./projectsList.scss";
import Projects from "../projects/Projects";
import { projects } from "../../Data";

const ProjectsList = () => {
  return (
    <div className="ProjectsList">
      <div className="Lists">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
