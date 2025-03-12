import CardService from "./CardService"

export default function Services({ services }) {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services?.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
