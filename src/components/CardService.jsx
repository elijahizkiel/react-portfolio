export default function CardService({ service }) {
  return (
    <div className="card-service">
      <h3>{service.title}</h3>
      <p className="description">{service.description}</p>
      <p className="tech-stack">{service.technologies}</p>
    </div>
  );
}