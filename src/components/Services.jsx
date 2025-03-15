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
            whileInView={{ opacity: 1, x: 25 }}
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
