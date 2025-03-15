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

export default function Projects({ projects }) {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects?.map((project) => (
          <div key={project.id} className="project">
            <img
              className={"project-img " + project.id}
              src={project.image}
              alt={project.title}
            />
            <CardProject project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
