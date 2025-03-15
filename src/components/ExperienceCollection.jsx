import Experience from "./Experience";
import { motion } from "framer-motion";

export default function ExperienceCollection({ experiences }) {
  const experiences1 = experiences.slice(0, 4).concat(experiences.slice(0, 4));
  const experiences2 = experiences.slice(4).concat(experiences.slice(4));
  return (
    <div className="experiences" id="experiences">
      <h2>Experiences</h2>

      <div className="experiences-one">
        {experiences1?.map((experience, index) => {
          return (
            <motion.div
              animate={{ x: ["0%", "-550%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="moving"
              key={index}
            >
              <Experience experience={experience} />
            </motion.div>
          );
        })}
      </div>
      <div className="experiences-two">
        {experiences2?.map((experience, index) => {
          return (
            <motion.div
              animate={{ x: ["-700%","0%"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="moving"
              key={index}
            >
              <Experience experience={experience} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
