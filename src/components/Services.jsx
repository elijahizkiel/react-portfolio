/**
 * Services component that displays a list of services using motion animations.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.services - An array of service objects to be displayed.
 * Each service object should have the following properties:
 *   @param {number} service.id - The unique identifier for the service.
 *   @param {string} service.title - The title of the service.
 *   @param {string} service.description - The description of the service.
 *
 * @returns {JSX.Element} The rendered Services section.
 */
import CardService from "./CardService";
import { motion } from "framer-motion";

export default function Services({ services }) {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services?.map((service) => (
          <motion.div
            key={service.id}
            whileInView={{ opacity: 1, x: 1 }}
            animate={{ opacity: 0.5, x: service.id % 2 !== 0 ? -150 : 150 }}
            transition={{ duration: 1 }}
          >
            <CardService service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
