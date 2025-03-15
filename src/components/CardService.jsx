/**
 * A functional component that renders a service card with a title, description, and technologies used.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {Object} props.service - The service object containing details to display.
 * @param {string} props.service.title - The title of the service.
 * @param {string} props.service.description - A brief description of the service.
 * @param {string} props.service.technologies - The technologies used in the service.
 * @returns {JSX.Element} A JSX element representing the service card.
 */
export default function CardService({ service }) {
  return (
    <div className="card-service">
      <h3>{service.title}</h3>
      <p className="description">{service.description}</p>
      <p className="tech-stack">{service.technologies}</p>
    </div>
  );
}