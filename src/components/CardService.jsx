export default function CardService({ service }) {
  return (
    <div className="card-service">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p>{service.technologies}</p>
    </div>
  );
}