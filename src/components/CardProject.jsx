/**
 * A functional component that renders a project card with details about a project.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Object} props.project - The project object containing details about the project.
 * @param {number} props.project.id - The unique identifier for the project.
 * @param {string} props.project.title - The title of the project.
 * @param {string} props.project.description - A brief description of the project.
 * @param {string} props.project.technologies - The technologies used in the project.
 * @param {string} props.project.link - The URL link to the project details or live demo.
 * @returns {JSX.Element} A JSX element representing the project card.
 */
export default function CardProject({ project }) {
  return (
    <div className="card-project">
      <p className="project-number">Project {project.id}</p>
      <h3 className="project-name">{project.title}</h3>
        <p className="description">{project.description}</p>
        <p className="tech-stack">{project.technologies}</p>
        <a href={project.link}>See More</a>
    </div>
  );
}
