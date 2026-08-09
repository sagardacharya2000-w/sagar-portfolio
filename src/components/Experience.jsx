
import { motion } from "framer-motion";
import { experience } from "../constants/constants";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Work <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional journey, technical internships, and self-driven projects
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition duration-300 cursor-pointer border border-gray-800 hover:border-purple/50"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <FaBriefcase className="text-purple text-lg" />
                    {item.role}
                  </h3>
                  <p className="text-gray-400 text-base font-medium mt-1">
                    {item.company} <span className="text-purple">•</span>{" "}
                    <span className="text-xs bg-dark-200 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700">
                      {item.type}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 bg-dark-200 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
                  <FaCalendarAlt className="text-purple" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-2 mb-6 leading-relaxed">
                {item.description.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-gray-300">
                    <span className="text-gray-300 ml-1">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60">
                {item.skills.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-dark-200 text-purple text-xs font-medium px-2.5 py-1 rounded-md border border-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;