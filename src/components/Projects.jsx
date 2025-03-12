import CardProject from "./CardProject";

export default function Projects({ projects }) {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects?.map((project) => (
          <div>
            <img
              className={"project-img " + project.id}
              src={project.image}
              alt={project.title}
            />
            <CardProject key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
