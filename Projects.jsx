import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
  <motion.section
    className="p-10"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold">Projects</h2>
    <ul className="list-disc pl-5 mt-2">
      <li>Enhanced Portfolio with Firebase</li>
      <li>Realtime ToDo App</li>
      <li>Weather Dashboard</li>
    </ul>
  </motion.section>
);

export default Projects;
