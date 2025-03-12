export default function CardProject({ project }) {
  return (
    <div className="card-project">
      <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{project.technologies}</p>
    </div>
  );
}
