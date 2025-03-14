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
