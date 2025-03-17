/**
 * A React functional component that renders a list of projects.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Array} props.projects - An array of project objects to be displayed.
 * @param {string} props.projects[].id - The unique identifier for the project.
 * @param {string} props.projects[].image - The URL of the project's image.
 * @param {string} props.projects[].title - The title of the project.
 * @returns {JSX.Element} The rendered Projects component.
 */
import CardProject from "./CardProject";
import { motion } from "framer-motion";

export default function Projects({ projects }) {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects?.map((project) => (
          <div key={project.id} className="project">
          <motion.div
            whileInView={{ opacity: 1, x:0 }}
            animate={{ opacity: 0.5, x: project.id % 2 === 0 ? "-50%" : "50%" }}
            transition={{ duration: 1 }}
            className="motion"
          > 
            <img
              className={"project-img " + project.id}
              src={project.image}
              alt={project.title}
            />
          </motion.div>
            <CardProject project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
